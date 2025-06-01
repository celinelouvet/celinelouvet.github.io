import { chakra } from '@chakra-ui/react';
import * as React from 'react';

import { type Podcast } from '@/data';

export type DescriptionTextProps = Pick<Podcast, 'description'>;

export const DescriptionText: React.FC<DescriptionTextProps> = ({
  description,
}) => {
  if (!description) {
    return null;
  }

  return <chakra.span>{description}</chakra.span>;
};
