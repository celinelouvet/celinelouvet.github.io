import { Stack, Text } from '@chakra-ui/react';

import { Quote } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Besoins flous"
    alignContent="flex-start"
  >
    <Stack gap="1em" width="100%">
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
