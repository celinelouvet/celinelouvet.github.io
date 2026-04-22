import { Stack, Text } from '@chakra-ui/react';

import { Quote } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Besoins flous"
    alignContent="flex-start"
  >
    <Stack gap="brand.100" width="100%">
      <Quote title="Le client" variant="slide">
        <Text>C’est pour le coller dans Excel.</Text>
      </Quote>
      <Quote title="Moi" variant="rightSlide" opacity={0}>
        <Text>Et, à quoi va servir l'Excel ?</Text>
      </Quote>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote>C’est pour le coller dans Excel.</SlideNote>;

const slide = { content, note };
export default slide;
