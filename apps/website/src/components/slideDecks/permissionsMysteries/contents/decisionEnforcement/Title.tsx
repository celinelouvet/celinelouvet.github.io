import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitle}
    title="Décision & Exécution"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote minutes={10}>
    <Text>
      J’aimerais vous parler d’une différence importante: celle entre la
      décision et l’exécution.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
