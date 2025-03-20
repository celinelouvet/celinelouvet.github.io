import { Box, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Incubateur ESSEC Ventures"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <Box>
        <Text>Ancien de l’ESSEC.</Text>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Comme je le disais en préambule, l’un des deux avait fait l’ESSEC.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
