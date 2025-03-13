import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type TalkSubject } from '@/data';

import { PossibleSubject } from './PossibleSubject';

type PossibleSubjectListProps = {
  subjects: { subjectId: string; talkSubject: TalkSubject }[];
};

export const PossibleSubjectList: React.FC<PossibleSubjectListProps> = ({
  subjects,
}) => {
  const { t } = useTranslation('talks');

  if (subjects.length === 0) {
    return null;
  }

  return (
    <Box>
      <H2Heading>{t('subjects')}</H2Heading>

      <Stack gap="6">
        {subjects.map(({ subjectId, talkSubject }, index) => (
          <PossibleSubject
            key={index}
            subjectId={subjectId}
            subject={talkSubject}
          />
        ))}
      </Stack>
    </Box>
  );
};
