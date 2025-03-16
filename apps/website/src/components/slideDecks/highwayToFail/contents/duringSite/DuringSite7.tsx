import { Box, List, Stack, Text } from '@chakra-ui/react';

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

        <List.Root paddingLeft="1em">
          <List.Item>Javascript,</List.Item>
          <List.Item>VueJs,</List.Item>
          <List.Item>Firebase.</List.Item>
        </List.Root>
      </Stack>
    }
  >
    <Stack gap="1em">
      <Box>
        <ThumbsUp variant="slide">Ça ne coûte rien.</ThumbsUp>
      </Box>
      <Box>
        <ThumbsUp variant="slide">J’avance vite.</ThumbsUp>
      </Box>
      <Box>
        <ThumbsDown variant="slide">
          Besoin d’avoir des connaissances en développement.
        </ThumbsDown>
      </Box>
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
