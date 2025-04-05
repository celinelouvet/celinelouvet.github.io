import { Stack, Text } from '@chakra-ui/react';

import { List } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="CHAOS report"
    alignContent="flex-start"
    topRightCorner="2015"
  >
    <Stack gap="1em" width="100%">
      <Text>Produit par le « Standish group ».</Text>
      <Text>Résultat d’une recherche visant à identifier:</Text>
      <List.Root variant="slide">
        <List.Item>type d’échecs,</List.Item>
        <List.Item>principales causes,</List.Item>
        <List.Item>ingrédients-clé permettant de les réduire.</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      En préparant ce talk, j’ai voulu trouver des chiffres sur les échecs.
    </Text>
    <Text>C’est là que je suis tombée sur le CHAOS report.</Text>
    <Text>Il est produit par le « Standish group ».</Text>
    <Text>
      C’est le résultat d’une recherche visant à identifier, en autres:
    </Text>
    <List.Root variant="slide">
      <List.Item>les types d’echecs,</List.Item>
      <List.Item>les principales causes d’échecs,</List.Item>
      <List.Item>les ingrédients-clé permettant de les réduire.</List.Item>
    </List.Root>
    <Text>
      Malheureusement, les dernières versions sont payantes. Hum 400€... Donc
      j’ai utilisé une version plus ancienne qui date de 2015.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
