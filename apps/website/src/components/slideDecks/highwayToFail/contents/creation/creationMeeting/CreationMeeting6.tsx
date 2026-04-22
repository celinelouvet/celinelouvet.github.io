import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { ThumbsDown } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Des points d’alerte ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack height="100%" gap="brand.100">
      <ThumbsDown variant="slide">
        Manque de volonté de les challenger sur leur vision
      </ThumbsDown>
      <ThumbsDown variant="slide">
        Je ne me suis pas demandée si je voulais travailler avec eux.
      </ThumbsDown>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Je voulais travailler sur l’idée, mais je ne me suis pas posée la question
      de si je voulais travailler avec eux.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
