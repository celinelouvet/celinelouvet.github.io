import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Si je devais la refaire demain ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
