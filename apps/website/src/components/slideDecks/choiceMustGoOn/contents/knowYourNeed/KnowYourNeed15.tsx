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
          Comme on prévoit d’être rachetés l’année prochaine, on aura besoin de
          pouvoir configurer le rapport.
        </Text>
      </Quote>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    Autre cas. A moins que l'année prochaine soit dans quelques semaines, on va
    juste noter et ignorer ce besoin
  </SlideNote>
);

const slide = { content, note };
export default slide;
