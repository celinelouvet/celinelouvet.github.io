import { Stack } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Resume } from '@/data';
import { usePossibleTalkSubjects, useSortByConventions } from '@/hooks';

import { PossibleSubjectList } from './PossibleSubjectList';
import { TalkList } from './TalkList';

type TalksProps = {
  resume: Resume;
};

export const Talks: FC<TalksProps> = ({ resume }) => {
  const possibleSubjects = usePossibleTalkSubjects(resume);
  const { alreadyDoneTalks, comingTalks } = useSortByConventions(resume);
  const { t } = useTranslation('talks');

  return (
    <Stack spacing="8">
      <PossibleSubjectList subjects={possibleSubjects} />
      <TalkList talks={comingTalks} title={t('toCome')} />
      <TalkList talks={alreadyDoneTalks} title={t('alreadyDone')} />
    </Stack>
  );
};
