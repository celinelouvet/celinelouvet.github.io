import {
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="Le site vitrine"
    alignContent="flex-start"
    topRightCorner="Mi-Décembre 2017"
    column1={<VerticalTimelineDuring />}
    column2={
      <Stack gap="1em">
        <Text>Stack choisie :</Text>

        <UnorderedList paddingLeft="1em">
          <ListItem>Javascript,</ListItem>
          <ListItem>VueJs,</ListItem>
          <ListItem>Firebase.</ListItem>
        </UnorderedList>
      </Stack>
    }
  >
    <Stack gap="1em">
      <StackItem>
        <ThumbsUp variant="slide">Ça ne coûte rien.</ThumbsUp>
      </StackItem>
      <StackItem>
        <ThumbsUp variant="slide">J’avance vite.</ThumbsUp>
      </StackItem>
      <StackItem>
        <ThumbsDown variant="slide">
          Besoin d’avoir des connaissances en développement.
        </ThumbsDown>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Et là, gros piège.</Text>
    <Text>
      En effet, il faut avoir des connaissances en dev pour faire la moindre
      modification dessus.
    </Text>
    <Text>
      Corriger une typo, changer une couleur, ajouter un bouton, bref.
    </Text>
    <Text>Donc ça va être à moi de les faire.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
