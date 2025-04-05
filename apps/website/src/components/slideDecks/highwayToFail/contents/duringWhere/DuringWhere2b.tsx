import { Box, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Où ça se passe ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <Box>
        <Text>Canapé & espace de coworking</Text>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Dans les faits, on va commencer par un canapé chez l’un d’eux et on ira
      parfois en espace de coworking, notamment quand ce canapé ne sera pas
      accessible.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
