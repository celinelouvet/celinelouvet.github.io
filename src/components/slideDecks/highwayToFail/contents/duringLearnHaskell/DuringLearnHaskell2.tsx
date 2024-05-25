import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Courbe d’apprentissage"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Text>Apprentissage très douloureux.</Text>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Difficilement...</Text>
    <Text>
      Je débarquais pleine d’assurance, en me disant que ce n’était qu’une
      syntaxe différente.
    </Text>
    <Text>Que nenni !</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
