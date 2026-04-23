import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const FinalUseCase3 = React.lazy(() =>
  import('./components/FinalUseCase3').then((module) => ({
    default: module.FinalUseCase3,
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
        <FinalUseCase3 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>On va voir 5 personas.</Text>

    <List.Root as="ol">
      <List.Item>
        Marc sera maintenant administrateur de la plateforme
      </List.Item>
      <List.Item>Inès sera administratrice d’un site</List.Item>
      <List.Item>
        Enzo et Jessica seront des auteurs d’articles pour un site.
      </List.Item>
      <List.Item>Lucie ne change pas.</List.Item>
    </List.Root>
    <Text>
      La raison pour laquelle on a 2 auteurs, c’est qu’il y a un système de
      relecture. Chacun publie les articles de l’autre.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
