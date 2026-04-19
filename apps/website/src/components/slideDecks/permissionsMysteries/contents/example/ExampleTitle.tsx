import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitle}
    title="Exemple"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Avant de poursuivre, j’aimerais vous présenter l’application qui nous
      servira de base de réflexion.
    </Text>
    <Text>
      Elle va évoluer en fonction du temps. Nous aurons donc 2 versions.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
