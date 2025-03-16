import { List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Contenu du MVP"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="1em">
      <Text>
        <Text as="b">MVP : </Text>
        <Text as="span">Minimum Viable Product</Text>
      </Text>

      <List.Root>
        <List.Item>Nombreuses fonctionnalités,</List.Item>
        <List.Item>Plugins Shopify, Prestashop, etc.</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Comme on veut toucher les TPE et PME, le plus simple est de s’intégrer
      directement à leur site, via un plugin de leur plateforme d’e-commerce.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
