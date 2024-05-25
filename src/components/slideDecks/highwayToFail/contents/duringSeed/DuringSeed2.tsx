import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Text>2 choses recherchées par les business angels :</Text>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Les business angels tendent à rechercher 2 choses.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
