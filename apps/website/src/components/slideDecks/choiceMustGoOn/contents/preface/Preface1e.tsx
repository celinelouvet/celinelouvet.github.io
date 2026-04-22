import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { type Tile, Tiles } from '../../../components/tiles';

const reasons = [
  { text: 'Budget respecté' },
  { text: 'Délai respecté' },
  { text: 'Besoin satisfait' },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Un projet réussi ?"
    alignContent="flex-start"
  >
    <Tiles data={reasons} />
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Et le dernier, le résultat répond au besoin des utilisateurs.</Text>
    <Text>
      On peut aussi ajouter, en bonus, une maintenance facilitée, une équipe de
      dev heureuse, etc. Mais du point de vue des décideurs, ce n’est pas ce qui
      est prioritaire.
    </Text>
    <Text>
      En préparant ce talk, j’ai voulu trouver des chiffres sur les échecs.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
