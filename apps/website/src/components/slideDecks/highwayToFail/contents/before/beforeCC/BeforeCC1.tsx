import { Box, Stack, Text } from '@chakra-ui/react';

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
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    J’ai une opportunité en tant que CTO dans une première société. Il y a une
    trentaine de personnes, dont 3 personnes au développement.
  </SlideNote>
);

const slide = { content, note };
export default slide;
