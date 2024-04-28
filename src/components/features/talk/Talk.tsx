import {
  Button,
  Flex,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, H3Heading } from '@/components/core';
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
    <Stack width="100%">
      <H3Heading>{t('title')}</H3Heading>

      <UnorderedList>
        {surveys.map(({ name, opensAt, closesAt }) => {
          const now = new Date();
          const opensAtDate = new Date(opensAt);
          const closesAtDate = new Date(closesAt);

          const surveyLink = `${talkLink}/${name}`;
          const resultLink = `${surveyLink}/results`;

          return (
            <ListItem key={name}>
              <Flex alignItems="center" gap="8">
                <Text as="span">{conventions.get(name)?.name}</Text>
                {opensAtDate <= now && now <= closesAtDate ? (
                  <Button as={NextLink} href={surveyLink}>
                    Survey
                  </Button>
                ) : null}
                {closesAtDate <= now ? (
                  <Button as={NextLink} href={resultLink}>
                    Results
                  </Button>
                ) : null}
              </Flex>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Stack>
  );
};
