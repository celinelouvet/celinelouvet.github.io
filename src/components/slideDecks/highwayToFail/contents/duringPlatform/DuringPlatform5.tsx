import { Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Platform4, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le produit"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center width="100%" height="100%">
      <Platform4 />
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Et enfin, l’API sert aussi les plugins des plateformes d’e-commerce, comme
      prestashop ou shopify.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
