import { type FC } from 'react';

import { H4Heading } from '@/components/core';
import { type Podcast } from '@/data';
import { useHeadingSize } from '@/hooks';

export type TitleTextProps = Pick<Podcast, 'title'>;

export const TitleText: FC<TitleTextProps> = ({ title }) => {
  const size = useHeadingSize();
  if (!title) {
    return null;
  }

  return <H4Heading size={size}>{title}</H4Heading>;
};
