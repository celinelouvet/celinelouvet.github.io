import { Box, List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineBefore } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Mon historique"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
    topRightCorner="Début 2017"
  >
    <Stack width="100%" gap="1em">
      <Box>
        <List.Root variant="slide">
          <List.Item>
            ESN toute ma carrière, beaucoup de régie (chez le client)
          </List.Item>
          <List.Item>
            Marre des gros clients et des cahiers des charges
          </List.Item>
          <List.Item>Envie de choisir un projet qui me plaît</List.Item>
        </List.Root>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Je me suis rarement sentie concernée par leurs produits. J’ai envie de
      changer ça en choisissant un produit qui me plait, me motive et me pousse
      à être pleinement impliquée.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
