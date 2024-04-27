import { Text } from '@chakra-ui/react';
import { type FC } from 'react';

import { type TalkSubject } from '@/data';

export type TalkProps = {
  talk: { topic: TalkSubject['topic'] };
};

export const TalkTopic: FC<TalkProps> = ({ talk: { topic } }) => (
  <Text as="span" marginRight="2">
    {topic}
  </Text>
);
