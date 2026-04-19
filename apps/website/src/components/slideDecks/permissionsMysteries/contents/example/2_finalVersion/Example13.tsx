import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const FinalInfra = React.lazy(() =>
  import('./components/FinalInfra').then((module) => ({
    default: module.FinalInfra,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Le produit"
    topRightCorner="Version 2"
    alignContent="flex-start"
  >
    <Center height="100%">
      <Suspense fallback={<Loading />}>
        <FinalInfra />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      D’un point de vue technique, nous aurons un système distribué avec 3
      microservices. Chacun aura sa base de données.
    </Text>

    <List.Root>
      <List.Item>Users</List.Item>
      <List.Item>Sites</List.Item>
      <List.Item>Articles</List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
