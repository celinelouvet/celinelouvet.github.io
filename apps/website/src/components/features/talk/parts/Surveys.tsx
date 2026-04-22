import { Box, Stack } from '@chakra-ui/react';
import type * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H3Heading, Link, List } from 'src/components/core';
import type { TalkSubject } from 'src/data';

import { Survey } from './Survey';

type SurveysProps = {
  talkSubjectId: string;
  talkSubject: TalkSubject;
};

export const Surveys: React.FC<SurveysProps> = function Surveys({
  talkSubjectId,
  talkSubject,
}) {
  const { t } = useTranslation('talks', { keyPrefix: 'talk.surveys' });

  const talkLink = `/talks/${talkSubjectId}`;

  const { survey } = talkSubject;
  if (!survey) {
    return null;
  }

  const { surveys } = survey;

  return (
    <Stack gap="4">
      <H3Heading>{t('title')}</H3Heading>

      <Box>
        <Link.Internal variant="underline" to={`${talkLink}/all/results`}>
          {t('allResults')}
        </Link.Internal>
      </Box>

      <List.Root paddingLeft="brand.100">
        {surveys
          .filter(({ show }) => show)
          .map(({ name, opensAt, closesAt }) => (
            <Survey
              key={name}
              name={name}
              opensAt={opensAt}
              closesAt={closesAt}
              talkLink={talkLink}
            />
          ))}
      </List.Root>
    </Stack>
  );
};
