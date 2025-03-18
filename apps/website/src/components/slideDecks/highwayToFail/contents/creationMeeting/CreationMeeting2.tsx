import { Box, List, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="La rencontre"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    column2={
      <Box width="100%" height="100%">
        <Text>Ils ont :</Text>
        <List.Root variant="slide">
          <List.Item>l’idée,</List.Item>
          <List.Item>fait une étude de marché,</List.Item>
          <List.Item>le moyen de se démarquer,</List.Item>
          <List.Item>un business model,</List.Item>
          <List.Item>un business plan.</List.Item>
        </List.Root>
      </Box>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Box width="100%" height="100%">
      <ThumbsUp variant="slide">
        Ça tombe bien, car je n’ai absolument aucune de ces connaissances.
      </ThumbsUp>
    </Box>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Ça tombe bien, car c’est des connaissances que je n’ai absolument pas.
    </Text>
    <Text>
      Je suis issue d’une école d’ingénieurs spécialisée en dev. Je sais faire
      du dev, du système, et de la compta 😁
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
