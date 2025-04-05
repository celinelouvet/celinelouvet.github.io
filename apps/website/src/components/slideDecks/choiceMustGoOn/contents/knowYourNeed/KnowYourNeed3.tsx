import { Stack, Text } from '@chakra-ui/react';

import { Quote } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Connaître son besoin"
    alignContent="flex-start"
  >
    <Stack gap="1em" width="100%">
      <Quote title="Le client" variant="slide">
        <Text>C’est pour le coller dans Excel.</Text>
      </Quote>
      <Quote title="Moi" variant="rightSlide">
        <Text>Et, à quoi va servir l'Excel ?</Text>
      </Quote>
    </Stack>
  </SlideContent>
);

const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
