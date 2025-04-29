import { List, Stack, Text, chakra } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Contenu du MVP"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="1em">
      <Text>
        <Text as="b">MVP : </Text>
        <chakra.span>Minimum Viable Product</chakra.span>
      </Text>

      <List.Root variant="slide">
        <List.Item>Nombreuses fonctionnalités,</List.Item>
        <List.Item>Plugins Shopify, Prestashop, etc.</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Comme on veut toucher les TPE et PME, le plus simple est de s’intégrer
      directement à leur site, via un plugin de leur plateforme d’e-commerce.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
