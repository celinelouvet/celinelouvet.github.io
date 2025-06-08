import * as React from 'react';

import { H4Heading } from '@/components/core';
import { type TalkSubject } from '@/data';
import { useHeadingSize } from '@/hooks';

export type TopicTextProps = Pick<TalkSubject, 'topic'>;

export const TopicText: React.FC<TopicTextProps> = function TopicText({
  topic,
}) {
  const size = useHeadingSize();
  if (!topic) {
    return null;
  }

  return <H4Heading size={size}>{topic}</H4Heading>;
};
