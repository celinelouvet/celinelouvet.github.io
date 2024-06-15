import { Center, Text } from '@chakra-ui/react';

import {
  InternalLink,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Résultats du sondage"
  >
    <Center width="100%" height="100%">
      <InternalLink
        href="/technwine/results"
        textAlign="center"
        variant="slideLight"
        target="_blank"
      >
        celine.louvet.me/technwine/results
      </InternalLink>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Penchons-nous sur les résultats du sondage.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
