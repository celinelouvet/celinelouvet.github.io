import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const MvpUseCase1 = React.lazy(() =>
  import('./components/MvpUseCase1').then((module) => ({
    default: module.MvpUseCase1,
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
        <MvpUseCase1 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Voici la liste des fonctionnalités attendues. On veut pouvoir:</Text>

    <List.Root>
      <List.Item>Ajouter un administrateur</List.Item>
      <List.Item>Supprimer un administrateur</List.Item>
      <List.Item>Créer un brouillon</List.Item>
      <List.Item>Modifier un brouillon</List.Item>
      <List.Item>Lister les brouillons existants</List.Item>
      <List.Item>Supprimer un brouillon</List.Item>
      <List.Item>Publier un brouillon</List.Item>
      <List.Item>Lister les articles publiés</List.Item>
      <List.Item>Visualiser un article publié</List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
