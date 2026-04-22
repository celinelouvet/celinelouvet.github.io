import { Flex, Stack, Tag, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from 'src/components/core';
import { type Resume } from 'src/data';
import { useTalk } from 'src/hooks';

import { Descriptions, Surveys } from './parts';

type TalkProps = {
  resume: Resume;
  talkSubjectId?: string | string[];
};

export const Talk: React.FC<TalkProps> = function Talk({
  resume,
  talkSubjectId,
}) {
  const { t } = useTranslation('talks', { keyPrefix: 'talk' });
  const { talkSubject, talkSubjectId: subjectId } = useTalk(
    resume,
    talkSubjectId,
  );

  if (!talkSubject) {
    return <Text>{t('notFound')}</Text>;
  }

  return (
    <Stack gap="8" width="100%">
      <Flex width="100%" gap="4">
        <H2Heading flex="1">{talkSubject.topic}</H2Heading>

        {talkSubject.availableForCfp ? (
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
