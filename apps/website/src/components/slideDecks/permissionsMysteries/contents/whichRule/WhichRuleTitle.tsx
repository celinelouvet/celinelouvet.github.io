import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitle}
    title="Déterminer la règle à vérifier"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Celà dit, avançons.</Text>
    <Text>
      À un moment, j’ai dit qu’en mettant en place des permissions, on cherchait
      à répondre à un besoin exprimé sous la forme de règles.
    </Text>
    <Text>
      Tout le jeu de l’autorisation est de déterminer la bonne règle, puis de la
      vérifier.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
