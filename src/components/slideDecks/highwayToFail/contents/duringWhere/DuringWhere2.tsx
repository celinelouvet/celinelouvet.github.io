import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Couch, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Où ça se passe ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <Couch />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      On va donc commencer par un canapé chez l’un d’eux et on ira parfois en
      espace de coworking, quand ce canapé ne sera pas accessible.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
