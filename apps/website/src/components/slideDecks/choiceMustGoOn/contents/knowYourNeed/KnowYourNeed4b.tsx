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
        <Text>
          Je m’en sers pour comparer les résultats des 3 derniers mois.
        </Text>
      </Quote>
      <Quote title="Moi" variant="rightSlide">
        <Text>Et, vous faites quoi des résultats ?</Text>
      </Quote>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Et, vous faites quoi des résultats ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
