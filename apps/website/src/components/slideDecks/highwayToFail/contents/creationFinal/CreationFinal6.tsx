import { Box, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La déclaration"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" height="100%" gap="2em">
      <Box>
        <Text>
          Signature d’une lettre d’intention, avec attribution par vesting.
        </Text>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Je signe donc une lettre d’intention pour avoir les 20% par vesting, par
      attribution progressive.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
