import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Contenu du MVP"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack width="100%" gap="1em">
      <Text>
        <Text as="b">MVP : </Text>
        <Text as="span">Minimum Viable Product</Text>
      </Text>

      <UnorderedList>
        <ListItem>Nombreuses fonctionnalités,</ListItem>
        <ListItem>Plugins Shopify, Prestashop, etc.</ListItem>
      </UnorderedList>
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
