import { Center } from '@chakra-ui/react';

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
        href="/survey/results"
        textAlign="center"
        variant="slideLight"
        target="_blank"
      >
        https://celine.louvet.me/survey/results
      </InternalLink>
    </Center>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
