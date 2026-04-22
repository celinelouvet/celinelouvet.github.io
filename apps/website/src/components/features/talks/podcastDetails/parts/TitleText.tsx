import * as React from 'react';

import { H4Heading } from 'src/components/core';
import { type Podcast } from 'src/data';

export type TitleTextProps = Pick<Podcast, 'title'>;

export const TitleText: React.FC<TitleTextProps> = function TitleText({
  title,
}) {
  if (!title) {
    return null;
  }

  return <H4Heading>{title}</H4Heading>;
};
