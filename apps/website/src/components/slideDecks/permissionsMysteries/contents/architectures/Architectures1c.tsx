import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const Monolith2 = React.lazy(() =>
  import('./components/Monolith2').then((module) => ({
    default: module.Monolith2,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Monolithe"
    topRightCorner="MVP"
    alignContent="flex-start"
  >
    <Center height="100%">
      <Suspense fallback={<Loading />}>
        <Monolith2 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Il va contenir directement les 3 couches qu’on vient de voir :</Text>
    <List.Root>
      <List.Item>L’enforcer</List.Item>
      <List.Item>La décision</List.Item>
      <List.Item>La logique métier</List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
