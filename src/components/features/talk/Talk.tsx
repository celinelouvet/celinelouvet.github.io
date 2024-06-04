import {
  Flex,
  HStack,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, H3Heading, InternalLink } from '@/components/core';
import { type Convention, type Resume, type TalkSubject } from '@/data';
import { useTalk } from '@/hooks';

type TalkProps = {
  resume: Resume;
  talkSubjectId?: string | string[];
};

export const Talk: FC<TalkProps> = ({ resume, talkSubjectId }) => {
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
    <Stack spacing="8" width="100%">
      <Flex width="100%" gap="4">
        <H2Heading flex="1">{talkSubject.topic}</H2Heading>

        {isAvailableForCfp ? (
          <Tag variant="solid" colorScheme="brand">
            {t('availableForCfp')}
          </Tag>
        ) : null}
      </Flex>

      <Descriptions descriptions={talkSubject.descriptions} />
      <Surveys
        talkSubjectId={subjectId}
        talkSubject={talkSubject}
        conventions={resume.conventions}
      />
    </Stack>
  );
};

const Descriptions: FC<{ descriptions?: string[] }> = ({
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

const SurveyAction: FC<{
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
    return <InternalLink href={surveyLink}>{t('survey')}</InternalLink>;
  }

  if (closesAtDate <= now) {
    return <InternalLink href={resultLink}>{t('results')}</InternalLink>;
  }

  return <Text as="span">{t('notAvailable')}</Text>;
};

const Survey: FC<{
  name?: string;
  opensAt: string;
  closesAt: string;
  talkLink: string;
}> = ({ name, opensAt, closesAt, talkLink }) => {
  return (
    <ListItem>
      <HStack alignItems="baseline">
        <Text as="span" minWidth="12em">
          {name}
        </Text>

        <SurveyAction
          name={name}
          opensAt={opensAt}
          closesAt={closesAt}
          talkLink={talkLink}
        />
      </HStack>
    </ListItem>
  );
};

const Surveys: FC<{
  talkSubjectId: string;
  talkSubject: TalkSubject;
  conventions: Map<string, Convention>;
}> = ({ talkSubjectId, talkSubject, conventions }) => {
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

      <InternalLink href={`${talkLink}/all/results`}>
        {t('allResults')}
      </InternalLink>

      <UnorderedList paddingLeft="1em">
        {surveys
          .filter(({ show }) => show)
          .map(({ name, opensAt, closesAt }) => (
            <Survey
              key={name}
              name={conventions.get(name)?.name}
              opensAt={opensAt}
              closesAt={closesAt}
              talkLink={talkLink}
            />
          ))}
      </UnorderedList>
    </Stack>
  );
};
