import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Vous allez me dire, et les levées dans tout ça ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
