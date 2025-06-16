import * as React from 'react';

import { H3Heading } from '@/components/core';
import { type Podcast } from '@/data';

export type EpisodeTextProps = Pick<Podcast, 'episode'>;

export const EpisodeText: React.FC<EpisodeTextProps> = function EpisodeText({
  episode,
}) {
  if (!episode) {
    return null;
  }

  return <H3Heading>({episode})</H3Heading>;
};
