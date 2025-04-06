import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ThatsAllFolks, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center height="100%">
      <Box height="100%">
        <ThatsAllFolks />
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Ça marquera la fin de l’aventure.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
