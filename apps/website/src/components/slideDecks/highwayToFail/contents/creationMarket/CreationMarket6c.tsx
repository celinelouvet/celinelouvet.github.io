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
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Par contre, c’est difficile de prévoir un contenu plus réduit que le dépot
      d’avis et la consultation des avis, donc on va devoir fournir de
      nombreuses fonctionnalités.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
