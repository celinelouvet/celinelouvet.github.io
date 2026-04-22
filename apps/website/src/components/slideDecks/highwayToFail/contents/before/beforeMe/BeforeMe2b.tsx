import { Box, List, Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

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
        </List.Root>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Chez beaucoup de gros clients. Ils ont de l’argent et des cahiers des
      charges parfois monstrueux.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
