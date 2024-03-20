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

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’idée"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack spacing="2em">
      <StackItem>
        <Text as="span">
          Nouvelle loi (décret promulgué en <strong>sept. 2017</strong>)
        </Text>
        <UnorderedList paddingLeft="1em">
          <ListItem>
            Entre en vigueur le <strong>1er janvier 2018</strong>
          </ListItem>
          <ListItem>
            Impose aux e‑commerces d’avoir des avis de clients vérifiés.
          </ListItem>
        </UnorderedList>
      </StackItem>
      <StackItem>
        <ThumbsUp variant="slide">Ça me parait être une bonne idée !</ThumbsUp>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
