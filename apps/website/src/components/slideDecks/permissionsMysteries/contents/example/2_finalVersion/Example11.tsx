import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const FinalUseCase2 = React.lazy(() =>
  import('./components/FinalUseCase2').then((module) => ({
    default: module.FinalUseCase2,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Le produit"
    topRightCorner="Version 2"
    alignContent="flex-start"
    allowOverflow
  >
    <Center height="130%" marginTop="-10%">
      <Suspense fallback={<Loading />}>
        <FinalUseCase2 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>On va répartir ces fonctionnalités en 3 interfaces:</Text>
    <List.Root as="ol">
      <List.Item>
        <Text>
          La précédente interface d’administration sera découpée en 2:
        </Text>
        <List.Root>
          <List.Item>
            Une interface d’administration générale, accessible uniquement aux
            administrateurs de la plateforme
          </List.Item>
          <List.Item>
            Une interface d’administration par site, accessible aux utilisateurs
            connectés
          </List.Item>
        </List.Root>
      </List.Item>
      <List.Item>Une interface publique, qui sera accessible à tous.</List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
