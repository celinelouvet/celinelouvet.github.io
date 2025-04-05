import { Code, List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Courbe d’apprentissage"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Text>Apprentissage très douloureux.</Text>
    <List.Root variant="slide">
      <List.Item>
        Syntaxe particulière (<Code variant="inlineSlide">{`->`}</Code>,{' '}
        <Code variant="inlineSlide">{`<-`}</Code>,{' '}
        <Code variant="inlineSlide">{`=>`}</Code>,{' '}
        <Code variant="inlineSlide">{`>>=`}</Code>,{' '}
        <Code variant="inlineSlide">{`<$>`}</Code>,{' '}
        <Code variant="inlineSlide">{`:>`}</Code>,{' '}
        <Code variant="inlineSlide">{`:<|>`}</Code>, etc.),
      </List.Item>
      <List.Item>Penser de manière fonctionnelle,</List.Item>
      <List.Item>Pure / IO,</List.Item>
    </List.Root>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      La gestion de l’IO est vraiment particulière et volontairement désagréable
      pour qu’on l’évite autant que possible.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
