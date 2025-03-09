import { Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { DateText, H3Heading } from '@/components/core';
import { type ConventionTalk } from '@/data';

import { ConventionName } from './ConventionName';
import { TalkLanguage } from './TalkLanguage';
import { TalkTopic } from './TalkTopic';

export type TalkProps = {
  talk: ConventionTalk;
};

export const TalkHeader: React.FC<TalkProps> = ({ talk }) => {
  const { t } = useTranslation('components', { keyPrefix: 'talkDetails' });

  const { when } = talk;
  return (
    <>
      <H3Heading>
        <TalkTopic talk={talk} />
        <TalkLanguage talk={talk} />
      </H3Heading>
      <Text>
        <ConventionName talk={talk} />
        <DateText when={when} dateFormat={t('date')} />
      </Text>
    </>
  );
};
