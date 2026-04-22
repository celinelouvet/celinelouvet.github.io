import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { type Resume } from 'src/data';
import { useGroupByConventions } from 'src/hooks';

import { ConventionList } from './ConventionList';
import { Menu } from './Menu';
import { PodcastList } from './PodcastList';
import { SubjectList } from './SubjectList';

type TalksProps = {
  resume: Resume;
};

export const Talks: React.FC<TalksProps> = function Talks({ resume }) {
  const { t } = useTranslation('talks');

  const { comingConventions, alreadyDoneConventions } =
    useGroupByConventions(resume);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Stack gap="16">
      <Menu
        subjects={resume.talkSubjects}
        comingConventions={comingConventions}
        alreadyDoneConventions={alreadyDoneConventions}
        podcasts={resume.podcasts}
        onClick={scrollTo}
      />
      <SubjectList subjects={resume.talkSubjects} />
      <Box id="toCome">
        <ConventionList conventions={comingConventions} title={t('toCome')} />
      </Box>
      <Box id="alreadyDone">
        <ConventionList
          conventions={alreadyDoneConventions}
          title={t('alreadyDone')}
        />
      </Box>
      <Box id="podcasts">
        <PodcastList podcasts={resume.podcasts} title={t('podcasts')} />
      </Box>
    </Stack>
  );
};
