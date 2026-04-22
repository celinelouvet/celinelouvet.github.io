import { HStack, Stack, Text } from '@chakra-ui/react';

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
      <HStack gap="brand.100" alignItems="stretch">
        <Quote title="Moi" variant="rightSlide">
          <Text>Et, vous faites quoi des résultats ?</Text>
        </Quote>
        <Quote title="Moi" variant="rightSlide">
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
    <Text>
      Est-ce que vous comparez aussi avec ceux des années précédentes ?
    </Text>
    <Text>
      Il m'aurait très certainement dit oui, même si ce n'avait jamais été le
      cas.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
