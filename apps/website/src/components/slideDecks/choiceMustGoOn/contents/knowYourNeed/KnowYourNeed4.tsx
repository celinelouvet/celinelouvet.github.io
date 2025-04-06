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
        <Text>
          Je m’en sers pour comparer les résultats avec ceux des mois
          précédents.
        </Text>
      </Quote>
      <Quote title="Moi" variant="rightSlide">
        <Text>Et, vous faites quoi des résultats ?</Text>
      </Quote>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
