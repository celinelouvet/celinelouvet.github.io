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
          Je l’uploade sur notre site et j’envoie le lien aux stakeholders.
        </Text>
      </Quote>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Je l’uploade sur notre site et j’envoie le lien aux stakeholders.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
