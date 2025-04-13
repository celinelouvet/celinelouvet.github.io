import { Image } from '@chakra-ui/react';

import image from './why_haskell.jpg';

export function WhyHaskell() {
  return <Image src={image} width="auto" height="100%" objectFit="contain" />;
}

export default WhyHaskell;
