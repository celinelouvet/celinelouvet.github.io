import { Center, Text } from '@chakra-ui/react';

import {
  Link,
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
      <Link.Internal
        to="/bdxio/results"
        textAlign="center"
        variant="slideLight"
        target="_blank"
      >
        celine.louvet.me/bdxio/results
      </Link.Internal>
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
