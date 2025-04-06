import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Acquisition2, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center height="100%">
      <Box height="100%">
        <Acquisition2 />
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Pour générer du chiffre, il faut avoir des clients (des commerçants, chez
      nous), qui paient.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
