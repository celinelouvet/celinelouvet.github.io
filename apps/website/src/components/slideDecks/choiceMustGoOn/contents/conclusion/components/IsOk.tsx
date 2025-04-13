import { Image } from '@chakra-ui/react';

import image from './image.png';

function IsOk() {
  return <Image src={image} width="auto" height="100%" objectFit="contain" />;
}

export default IsOk;
