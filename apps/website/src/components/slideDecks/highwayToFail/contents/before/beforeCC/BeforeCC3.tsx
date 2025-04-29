import { Box, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineBefore } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’occasion"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
    topRightCorner="Novembre 2017"
  >
    <Stack width="100%" gap="1em">
      <Box>
        <Text>Rupture de la période d’essai.</Text>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    Après discussion, ils vont me proposer une rupture de la période d’essai. Il
    s’agit de me permettre de bénéficier des allocations chômage.
  </SlideNote>
);

const slide = { content, note };
export default slide;
