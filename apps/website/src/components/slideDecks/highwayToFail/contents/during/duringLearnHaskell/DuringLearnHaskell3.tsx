import { Code, List, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);
export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Courbe d’apprentissage"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
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
    </List.Root>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Alors oui, la syntaxe est vraiment différente, avec ce que je vais appeler
      des symboles cabalistiques.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
