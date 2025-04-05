import { List, Text } from '@chakra-ui/react';

import { ThumbsUp } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’idée"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Text>
      Nouvelle loi (décret promulgué en <strong>sept. 2017</strong>)
    </Text>

    <List.Root variant="slide">
      <List.Item>
        Entre en vigueur le <strong>1er janvier 2018</strong>
      </List.Item>
      <List.Item>
        Impose aux e‑commerces d’avoir des avis de clients vérifiés.
      </List.Item>
    </List.Root>

    <ThumbsUp variant="slide">Ça me parait être une bonne idée !</ThumbsUp>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Ça me parait une bonne opportunité de profiter de cette nouvelle loi.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
