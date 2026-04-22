import * as React from 'react';

import { H4Heading } from 'src/components/core';
import { type TalkSubject } from 'src/data';

export type TopicTextProps = Pick<TalkSubject, 'topic'>;

export const TopicText: React.FC<TopicTextProps> = function TopicText({
  topic,
}) {
  if (!topic) {
    return null;
  }

  return <H4Heading>{topic}</H4Heading>;
};
