import { Stack, Text } from '@chakra-ui/react';

import { Quote } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Besoins flous"
    alignContent="flex-start"
  >
    <Stack gap="brand.100" width="100%">
      <Quote title="Le client" variant="slide">
        <Text>
          Je les affiche sous forme de camembert pour les coller dans un
          rapport.
        </Text>
      </Quote>
      <Quote title="Moi" variant="rightSlide" opacity={0}>
        <Text>Et, vous faites quoi de ce rapport ?</Text>
      </Quote>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Je les affiche sous forme de camembert pour les coller dans un rapport.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
