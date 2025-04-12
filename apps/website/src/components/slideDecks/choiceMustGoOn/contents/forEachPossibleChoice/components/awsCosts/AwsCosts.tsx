import { Image } from '@chakra-ui/react';

import image from './aws_costs.jpeg';

export function AwsCosts() {
  return <Image src={image} width="auto" height="100%" objectFit="contain" />;
}

export default AwsCosts;
