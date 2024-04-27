import { Flex, Stack, Tag, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Resume } from '@/data';
import { useTalk } from '@/hooks';

type TalkProps = {
  resume: Resume;
  talkSubjectId?: string | string[];
};

export const Talk: FC<TalkProps> = ({ resume, talkSubjectId }) => {
  const { t } = useTranslation('talks');
  const { talkSubject, isAvailableForCfp } = useTalk(resume, talkSubjectId);

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
