import { type FC } from 'react';

import { H3Heading } from '@/components/core';
import { type Podcast } from '@/data';
import { useHeadingSize } from '@/hooks';

export type EpisodeTextProps = Pick<Podcast, 'episode'>;

export const EpisodeText: FC<EpisodeTextProps> = ({ episode }) => {
  const size = useHeadingSize();

  if (!episode) {
    return null;
  }

  return <H3Heading size={size}>({episode})</H3Heading>;
};
