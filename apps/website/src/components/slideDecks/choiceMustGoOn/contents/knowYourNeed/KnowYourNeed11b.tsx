import { HStack, Stack, Text } from '@chakra-ui/react';

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
        <Text>
          Je m’en sers pour comparer les résultats des 3 derniers mois.
        </Text>
      </Quote>
      <HStack gap="1em" alignItems="stretch">
        <Quote title="Moi" variant="rightSlide">
          <Text>Et, vous faites quoi des résultats ?</Text>
        </Quote>
        <Quote title="Moi" variant="rightSlide" opacity={0}>
          <Text>
            Est-ce que vous comparez aussi avec ceux des années précédentes ?
          </Text>
        </Quote>
      </HStack>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Je lui ai demandé ce qu’il faisait des résultats</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
