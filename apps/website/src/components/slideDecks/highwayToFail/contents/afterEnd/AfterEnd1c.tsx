import { List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
    topRightCorner="Octobre 2018"
  >
    <Stack gap="1em">
      <List.Root variant="slide">
        <List.Item>Pas de levée</List.Item>
        <List.Item>Pas de chiffre d’affaires</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>On n’a pas encore de chiffre d’affaires.</Text>
    <Text>Et c’est la dégringolade.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
