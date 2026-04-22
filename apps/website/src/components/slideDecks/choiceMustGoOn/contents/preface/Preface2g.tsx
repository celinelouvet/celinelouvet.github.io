import { Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../../components/progressiveList';

const items = [
  { text: 'type d’échecs,' },
  { text: 'principales causes,' },
  { text: 'ingrédients-clé permettant de les réduire.' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="CHAOS report"
    alignContent="flex-start"
    topRightCorner="2015"
  >
    <Stack gap="brand.100" width="100%">
      <Text>Produit par le « Standish group ».</Text>
      <Text>Résultat d’une recherche visant à identifier :</Text>

      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Je me suis rabattue sur une version plus ancienne qui date de 2015.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
