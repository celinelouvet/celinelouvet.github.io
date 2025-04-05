import { List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Chaos report"
    alignContent="flex-start"
  >
    <Stack gap="1em" width="100%">
      <Text>Produit par le « Standish group »</Text>
      <Text>Résultat d’une recherche visant à identifier</Text>
      <List.Root>
        <List.Item>le périmètre des échecs de projets</List.Item>
        <List.Item>les principaux facteurs</List.Item>
        <List.Item>
          les ingrédients clé permettant de réduire les échecs de projets
        </List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
