import { Spinner } from '@chakra-ui/react';
import * as React from 'react';

export const Loading: React.FC = () => (
  <Spinner
    color="brand.500"
    animationDuration="0.8s"
    borderWidth="6px"
    css={{ '--spinner-size': 'sizes.20' }}
  />
);
