import {
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le site vitrine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <Text>Version simplifiée, pour avancer vite :</Text>
      <UnorderedList paddingLeft="1em">
        <ListItem>un design allégé,</ListItem>
        <ListItem>un email pré-rempli pour le formulaire de contact.</ListItem>
      </UnorderedList>
      <StackItem marginTop="0.5em">
        <ThumbsUp variant="slide">Ils sont d’accord.</ThumbsUp>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Pour avancer vite, je vais suggérer de faire une version simplifiée qu’on
      enrichira ensuite.
    </Text>
    <Text>
      Donc je prévois un design allégé et le formulaire de contact est remplacé
      par un email pré-rempli.
    </Text>
    <Text>Ils sont d’accord.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
