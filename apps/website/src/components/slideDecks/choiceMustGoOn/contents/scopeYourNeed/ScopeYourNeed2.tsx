import { Stack, Text } from '@chakra-ui/react';

import { Quote } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Cadrer le besoin"
    alignContent="flex-start"
  >
    <Stack gap="brand.100" width="100%">
      <Quote title="Le client" variant="slide">
        <Text>J’ai besoin de gérer les permissions de mes utilisateurs.</Text>
      </Quote>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
