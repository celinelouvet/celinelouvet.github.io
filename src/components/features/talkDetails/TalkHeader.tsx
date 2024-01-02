import { Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DateText, H3Heading } from '@/components/typography';
import { type ConventionTalk } from '@/data';

import { ConventionName } from './ConventionName';
import { TalkLanguage } from './TalkLanguage';
import { TalkTopic } from './TalkTopic';

export type TalkProps = {
  talk: ConventionTalk;
};

export const TalkHeader: FC<TalkProps> = ({ talk }) => {
  const { t } = useTranslation('components', { keyPrefix: 'talkDetails' });

  return (
    <>
      <H3Heading>
        <TalkTopic talk={talk} />
        <TalkLanguage talk={talk} />
      </H3Heading>
      <Text>
        <ConventionName talk={talk} />
        <DateText when={talk.when} dateFormat={t('date')} />
      </Text>
    </>
  );
};
