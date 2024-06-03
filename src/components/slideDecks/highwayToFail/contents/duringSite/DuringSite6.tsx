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
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je connais bien la stack donc j’avance vite.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
