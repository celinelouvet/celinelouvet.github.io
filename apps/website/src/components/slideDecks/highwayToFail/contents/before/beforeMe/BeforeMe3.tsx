import { Box, List, Stack, Text } from '@chakra-ui/react';

import { ThumbsDown } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineBefore } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Mon historique"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
    topRightCorner="Début 2017"
  >
    <Stack width="100%" gap="brand.100">
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

      <Box marginTop="brand.50">
        <ThumbsDown variant="slide">
          Très grande confiance en moi et en mes réalisations.
        </ThumbsDown>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Un point très important :</Text>
    <Text>
      La plupart de mes projets se sont bien passés et j’ai confiance en moi et
      en mes réalisations.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
