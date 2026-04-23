import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const MvpInfra = React.lazy(() =>
  import('./components/MvpInfra').then((module) => ({
    default: module.MvpInfra,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Infrastructure"
    topRightCorner="MVP"
    alignContent="flex-start"
  >
    <Center height="100%">
      <Suspense fallback={<Loading />}>
        <MvpInfra />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      D’un point de vue technique, nous aurons un monolithe, car on n’a pas de
      besoin spécifique de scalabilité ou autre.
    </Text>

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
