import { Code, ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Courbe d’apprentissage"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Text>Apprentissage très douloureux.</Text>
    <UnorderedList paddingLeft="1em">
      <ListItem>
        Syntaxe particulière (<Code variant="inlineSlide">{`->`}</Code>,{' '}
        <Code variant="inlineSlide">{`<-`}</Code>,{' '}
        <Code variant="inlineSlide">{`=>`}</Code>,{' '}
        <Code variant="inlineSlide">{`>>=`}</Code>,{' '}
        <Code variant="inlineSlide">{`<$>`}</Code>,{' '}
        <Code variant="inlineSlide">{`:>`}</Code>,{' '}
        <Code variant="inlineSlide">{`:<|>`}</Code>, etc.),
      </ListItem>
      <ListItem>Penser de manière fonctionnelle,</ListItem>
      <ListItem>Pure / IO,</ListItem>
      <ListItem>Documentation parfois complexe à comprendre.</ListItem>
    </UnorderedList>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Alors oui, la syntaxe est vraiment différente, avec ce que je vais appeler
      des symboles cabalistiques.
    </Text>
    <Text>
      Mais c’est aussi un langage qui demander de penser vraiment de manière
      fonctionnelle.
    </Text>
    <Text>
      La gestion de l’IO est vraiment particulière et volontairement désagréable
      pour qu’on l’évite autant que possible.
    </Text>
    <Text>
      Et la documentation, bien que très complète, est parfois complexe à
      comprendre. Et je ne vous parle pas des réponses sur StackOverflow… où je
      comprends les mots, mais pas les phrases qui les utilisent.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
