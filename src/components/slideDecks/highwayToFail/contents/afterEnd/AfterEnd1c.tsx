import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
    topRightCorner="Octobre 2018"
  >
    <Stack spacing="1em">
      <UnorderedList paddingLeft="1em">
        <ListItem>Pas de levée</ListItem>
        <ListItem>Pas de chiffre d’affaires</ListItem>
      </UnorderedList>
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
