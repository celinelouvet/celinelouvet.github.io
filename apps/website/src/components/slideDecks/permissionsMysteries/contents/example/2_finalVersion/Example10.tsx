import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const FinalUseCase1 = React.lazy(() =>
  import('./components/FinalUseCase1').then((module) => ({
    default: module.FinalUseCase1,
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
        <FinalUseCase1 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Nous avons 4 fonctionnalités supplémentaires :</Text>

    <List.Root>
      <List.Item>Supprimer un site</List.Item>
      <List.Item>Ajouter un utilisateur à un site</List.Item>
      <List.Item>Supprimer un utilisateur d’un site</List.Item>
      <List.Item>Créer un site</List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
