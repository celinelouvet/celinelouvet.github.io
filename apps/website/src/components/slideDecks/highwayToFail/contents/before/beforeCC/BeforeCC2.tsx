import { Box, Stack, Text } from '@chakra-ui/react';

import { ThumbsDown } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineBefore } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’occasion"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
    topRightCorner="Juin 2017"
  >
    <Stack width="100%" gap="1em">
      <Box>
        <Text>
          Première occasion en tant que CTO, dans une startup de 30 personnes
          avec 3 devs.
        </Text>
      </Box>

      <Box marginTop="0.5em">
        <ThumbsDown variant="slide">Ça ne me conviendra pas.</ThumbsDown>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Il s’avère rapidement que ça ne me conviendra pas.</Text>
    <Text>Ce n’est pas ce que je recherchais.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
