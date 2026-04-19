import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const MvpUseCase2 = React.lazy(() =>
  import('./components/MvpUseCase2').then((module) => ({
    default: module.MvpUseCase2,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Le produit"
    topRightCorner="MVP"
    alignContent="flex-start"
  >
    <Center height="100%">
      <Suspense fallback={<Loading />}>
        <MvpUseCase2 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>On va répartir ces fonctionnalités en 2 interfaces:</Text>

    <List.Root as="ol">
      <List.Item>
        Une interface d’administration, qui sera accessible uniquement aux
        administrateurs.
      </List.Item>
      <List.Item>Une interface publique, qui sera accessible à tous.</List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
