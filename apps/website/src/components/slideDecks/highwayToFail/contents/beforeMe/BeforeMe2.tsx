import { Box, List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

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
        </List.Root>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      A ce moment-là, j’ai effectué toute ma carrière en ESN et j’ai envie de
      quitter ce monde-là.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
