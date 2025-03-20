import { chakra } from '@chakra-ui/react';
import * as React from 'react';

import { type TalkSubject } from '@/data';

export type TalkProps = {
  talk: { topic: TalkSubject['topic'] };
};

export const TalkTopic: React.FC<TalkProps> = ({ talk: { topic } }) => (
  <chakra.span marginRight="2">{topic}</chakra.span>
);
