import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les conséquences ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>Mais quelles sont les conséquences de ce choix ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
