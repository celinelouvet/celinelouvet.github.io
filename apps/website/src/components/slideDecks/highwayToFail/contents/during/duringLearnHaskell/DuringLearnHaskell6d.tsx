import { List, Text } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Type-Driven Development"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <List.Root variant="slide" as="ol">
      <List.Item>Définir les types de ce qu’on a</List.Item>
      <List.Item>Définir les types de là où on veut aller</List.Item>
      <List.Item>Laisser le compilateur guider le développement</List.Item>
    </List.Root>

    <Text>Point important : des noms expressifs</Text>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Et nommer les choses de manière expressive, c’est un point important.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
