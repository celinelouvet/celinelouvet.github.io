import * as React from 'react';

import { H4Heading } from 'src/components/core';
import { type Podcast } from 'src/data';

export type TitleTextProps = Pick<Podcast, 'title' | 'episode'>;

export const TitleText: React.FC<TitleTextProps> = function TitleText({
  title,
  episode,
}) {
  if (!title && !episode) {
    return null;
  }

  const texts: string[] = [];
  if (episode) {
    texts.push(episode);
  }
  if (episode && title) {
    texts.push(': ');
  }
  if (title) {
    texts.push(title);
  }

  return <H4Heading>{texts.join('')}</H4Heading>;
};
