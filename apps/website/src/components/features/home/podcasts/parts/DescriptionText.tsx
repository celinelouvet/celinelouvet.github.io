import { chakra } from '@chakra-ui/react';
import * as React from 'react';

import { type Podcast } from 'src/data';

type DescriptionTextProps = Pick<Podcast, 'description'>;

export const DescriptionText: React.FC<DescriptionTextProps> =
  function DescriptionText({ description }) {
    if (!description) {
      return null;
    }

    return <chakra.span>{description}</chakra.span>;
  };
