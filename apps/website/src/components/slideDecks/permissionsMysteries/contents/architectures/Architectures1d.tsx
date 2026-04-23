import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { H3Heading, Link } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { PostIt } from 'src/components/slideDecks/components';

const Monolith3 = React.lazy(() =>
  import('./components/Monolith3').then((module) => ({
    default: module.Monolith3,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Monolithe"
    topRightCorner="MVP"
    alignContent="flex-start"
    position="relative"
  >
    <Center height="100%">
      <Suspense fallback={<Loading />}>
        <Monolith3 />
      </Suspense>
    </Center>

    <PostIt
      opacity={0}
      color="light"
      gap="brand.100"
      position="absolute"
      left="0"
      bottom="brand.300"
      transform="translate(0, -25%)"
    >
      <H3Heading variant="slide">Monolithe modulaire</H3Heading>

      <Link.External
        variant="slideLight"
        target="_blank"
        href="https://medium.com/@tpierrain/monolithes-modulaires-activez-la-couche-r%C3%A9seau-d%C3%A8s-le-d%C3%A9but-45285eb84000"
      >
        Article par Thomas Pierrain
      </Link.External>
    </PostIt>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>En parlant de la couche de décision</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
