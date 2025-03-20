import { Code, List, Text } from '@chakra-ui/react';

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
      <List.Item>Documentation parfois complexe à comprendre.</List.Item>
    </List.Root>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Et la documentation, bien que très complète, est parfois complexe à
      comprendre. Et je ne vous parle pas des réponses sur StackOverflow… où je
      comprends les mots, mais pas les phrases qui les utilisent.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
