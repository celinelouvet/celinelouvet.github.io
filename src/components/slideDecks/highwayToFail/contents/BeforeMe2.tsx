import {
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineBefore } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Mon historique"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <UnorderedList paddingLeft="1em">
          <ListItem>
            ESN toute ma carrière, beaucoup de régie (chez le client)
          </ListItem>
          <ListItem>Marre des gros clients et des cahiers des charges</ListItem>
          <ListItem>Envie de choisir un projet qui me plaît</ListItem>
        </UnorderedList>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      A ce moment-là, j’ai effectué toute ma carrière en ESN et j’ai envie de
      quitter ce monde-là.
    </Text>
    <Text>
      Chez beaucoup de gros clients. Ils ont de l’argent et des cahiers des
      charges parfois monstrueux.
    </Text>
    <Text>
      Je me suis rarement sentie concernée par leurs produits. J’ai envie de
      changer ça en choisissant un produit qui me plait, me motive et me pousse
      à être pleinement impliquée.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
