import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const MvpUseCase3 = React.lazy(() =>
  import('./components/MvpUseCase3').then((module) => ({
    default: module.MvpUseCase3,
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
        <MvpUseCase3 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>On va maintenant ajouter 2 persona:</Text>

    <List.Root as="ol">
      <List.Item>
        Marc sera administrateur et aura le droit d’utiliser l’interface
        d’administration.
      </List.Item>
      <List.Item>
        Lucie, elle n’aura que le droit d’utiliser l’interface publique.
      </List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
