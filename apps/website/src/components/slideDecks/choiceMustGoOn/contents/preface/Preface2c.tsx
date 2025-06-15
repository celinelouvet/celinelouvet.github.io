import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'type d’échecs,', shown: false },
  { text: 'principales causes,', shown: false },
  { text: 'ingrédients-clé permettant de les réduire.', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="CHAOS report"
    alignContent="flex-start"
    topRightCorner=""
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
      C’est le résultat d’une recherche visant à identifier, en autres:
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
