import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>On est en octobre / novembre 2018.</Text>
    <Text>On n’a pas réussi à lever.</Text>
    <Text>On n’a pas encore de chiffre d’affaires.</Text>
    <Text>Et c’est la dégringolade.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
