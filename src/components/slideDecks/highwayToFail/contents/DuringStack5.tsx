import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Stack4, VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="En détails"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center height="100%">
      <Box height="100%">
        <Stack4 />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Coté base de données, je pars du PostgreSQL, qui permet de faire beaucoup
      de choses.
    </Text>
    <Text>
      Mon idée est de me concentrer sur les fonctionnalités sans me préoccuper
      de la scalabilité au début.
    </Text>
    <Text>
      En effet, le besoin de scalabilité n’intervient que lorsqu’on on a réussi
      à avoir beaucoup d’utilisateurs.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
