import { Box, Flex, HStack, Stack, Tag, Text, chakra } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, H3Heading, Link, List } from '@/components/core';
import { type Resume, type TalkSubject } from '@/data';
import { useTalk } from '@/hooks';

type TalkProps = {
  resume: Resume;
  talkSubjectId?: string | string[];
};

export const Talk: React.FC<TalkProps> = ({ resume, talkSubjectId }) => {
  const { t } = useTranslation('talks');
  const {
    talkSubject,
    isAvailableForCfp,
    talkSubjectId: subjectId,
  } = useTalk(resume, talkSubjectId);

  if (!talkSubject) {
    return <Text>{t('notFound')}</Text>;
  }

  return (
    <Stack gap="8" width="100%">
      <Flex width="100%" gap="4">
        <H2Heading flex="1">{talkSubject.topic}</H2Heading>

        {isAvailableForCfp ? (
          <Tag.Root variant="subtle" size="lg">
            <Tag.Label>{t('availableForCfp')}</Tag.Label>
          </Tag.Root>
        ) : null}
      </Flex>

      <Descriptions descriptions={talkSubject.descriptions} />
      <Surveys talkSubjectId={subjectId} talkSubject={talkSubject} />
    </Stack>
  );
};

const Descriptions: React.FC<{ descriptions?: string[] }> = ({
  descriptions = [],
}) => {
  if (descriptions.length === 0) {
    return null;
  }

  return (
    <Stack width="100%">
      {descriptions.map((line, index) => (
        <Text key={index}>{line}</Text>
      ))}
    </Stack>
  );
};

const SurveyAction: React.FC<{
  name?: string;
  opensAt: string;
  closesAt: string;
  talkLink: string;
}> = ({ name, opensAt, closesAt, talkLink }) => {
  const { t } = useTranslation('talks', { keyPrefix: 'talk.surveys' });

  const now = new Date();
  const opensAtDate = new Date(opensAt);
  const closesAtDate = new Date(closesAt);

  const surveyLink = `${talkLink}/${name}`;
  const resultLink = `${surveyLink}/results`;

  if (opensAtDate <= now && now <= closesAtDate) {
    return (
      <Link.Internal variant="underline" to={surveyLink}>
        {t('survey')}
      </Link.Internal>
    );
  }

  if (closesAtDate <= now) {
    return (
      <Link.Internal variant="underline" to={resultLink}>
        {t('results')}
      </Link.Internal>
    );
  }

  return <chakra.span>{t('notAvailable')}</chakra.span>;
};

const Survey: React.FC<{
  name?: string;
  opensAt: string;
  closesAt: string;
  talkLink: string;
}> = ({ name, opensAt, closesAt, talkLink }) => {
  return (
    <List.Item>
      <HStack alignItems="baseline">
        <chakra.span minWidth="chakra.span">{name}</chakra.span>

        <SurveyAction
          name={name}
          opensAt={opensAt}
          closesAt={closesAt}
          talkLink={talkLink}
        />
      </HStack>
    </List.Item>
  );
};

const Surveys: React.FC<{
  talkSubjectId: string;
  talkSubject: TalkSubject;
}> = ({ talkSubjectId, talkSubject }) => {
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

      <List.Root paddingLeft="1em">
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
