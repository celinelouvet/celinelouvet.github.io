import { Image } from '@chakra-ui/react';

import image from './zalando-radar.png';

//TODO: use https://github.com/omerg/react-tech-radar

function ZalandoRadar() {
  return <Image src={image} width="auto" height="100%" objectFit="contain" />;
}

export default ZalandoRadar;
