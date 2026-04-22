import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from 'src/components/core';
import { type TalkSubject } from 'src/data';

import { Subject } from './Subject';

type SubjectListProps = {
  subjects: Map<string, TalkSubject>;
};

export const SubjectList = React.forwardRef<HTMLDivElement, SubjectListProps>(
  function SubjectList({ subjects }, ref) {
    const { t } = useTranslation('talks');

    if (subjects.size === 0) {
      return null;
    }

    const sortedSubjects = [...subjects.entries()].reverse();

    return (
      <Box id="subjects" ref={ref}>
        <H2Heading>{t('subjects')}</H2Heading>

        <Stack gap="6">
          {sortedSubjects.map(([subjectId, talkSubject]) => (
            <Subject
              key={subjectId}
              subjectId={subjectId}
              subject={talkSubject}
            />
          ))}
        </Stack>
      </Box>
    );
  },
);
