import { Box, List, Stack, Text } from '@chakra-ui/react';

import { ThumbsUp } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="Le site vitrine"
    alignContent="flex-start"
    topRightCorner="Mi-Décembre 2017"
    column1={<VerticalTimelineDuring />}
    column2={
      <>
        <Text>Stack choisie :</Text>

        <List.Root variant="slide">
          <List.Item>Javascript,</List.Item>
          <List.Item>VueJs,</List.Item>
          <List.Item>Firebase.</List.Item>
        </List.Root>
      </>
    }
  >
    <Stack gap="1em">
      <Box>
        <ThumbsUp variant="slide">Ça ne coûte rien.</ThumbsUp>
      </Box>
      <Box>
        <ThumbsUp variant="slide">J’avance vite.</ThumbsUp>
      </Box>
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
