import * as React from 'react';

import { H4Heading } from '@/components/core';
import { type TalkSubject } from '@/data';

export type TopicTextProps = Pick<TalkSubject, 'topic'>;

export const TopicText: React.FC<TopicTextProps> = function TopicText({
  topic,
}) {
  if (!topic) {
    return null;
  }

  return <H4Heading>{topic}</H4Heading>;
};
