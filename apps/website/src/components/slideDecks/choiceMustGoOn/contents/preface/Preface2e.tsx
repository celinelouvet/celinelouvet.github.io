import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'type d’échecs,' },
  { text: 'principales causes,' },
  { text: 'ingrédients-clé permettant de les réduire.', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="CHAOS report"
    alignContent="flex-start"
    topRightCorner=""
  >
    <Stack gap="1em" width="100%">
      <Text>Produit par le « Standish group ».</Text>
      <Text>Résultat d’une recherche visant à identifier :</Text>

      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>les principales causes d’échecs,</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
