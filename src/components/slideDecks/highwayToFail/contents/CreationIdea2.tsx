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

const note = (
  <SlideNote>
    <Text>
      L’objectif est de profiter de la mise en place d’une nouvelle loi. Jusqu’à
      cette loi, les faux avis pullulaient sur les plateformes.
    </Text>
    <Text>
      Nous sommes en décembre 2017 et cette loi entre en vigueur le 1er janvier
      2018.
    </Text>
    <Text>
      Elle va imposer à tous les e-commerces d’avoir des avis de clients
      vérifiés.
    </Text>
    <Text>
      Par « vérifié », on entend un client ayant vraiment acheté un produit chez
      ce commerçant.
    </Text>
    <Text>
      Ça me parait une bonne opportunité de profiter de cette nouvelle loi.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
