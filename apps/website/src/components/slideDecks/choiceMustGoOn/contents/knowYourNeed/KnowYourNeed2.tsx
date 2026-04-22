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
        <Text>J’ai besoin d’un bouton pour télécharger un CSV.</Text>
      </Quote>
      <Quote title="Moi" variant="rightSlide" opacity={0}>
        <Text>D’accord. À quoi va servir ce CSV ?</Text>
      </Quote>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>J’ai besoin d’un bouton pour télécharger un CSV.</SlideNote>
);

const slide = { content, note };
export default slide;
