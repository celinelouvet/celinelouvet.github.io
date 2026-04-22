import { List, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineAfter = React.lazy(() =>
  import('../components/VerticalTimelineAfter').then((module) => ({
    default: module.VerticalTimelineAfter,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineAfter />
      </React.Suspense>
    }
    topRightCorner="Octobre 2018"
  >
    <Stack gap="brand.100">
      <List.Root variant="slide">
        <List.Item>Pas de levée</List.Item>
        <List.Item>Pas de chiffre d’affaires</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>On n’a pas encore de chiffre d’affaires.</Text>
    <Text>Et c’est la dégringolade.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
