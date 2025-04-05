import { List, Text } from '@chakra-ui/react';

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
        </List.Root>
      </>
    }
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je démarre donc.</Text>
    <Text>J’ai une stack avec VueJs déjà disponible, donc je m’en sers.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
