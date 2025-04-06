import { Box, Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

const Couch = React.lazy(() =>
  import('./components/Couch').then((module) => ({
    default: module.Couch,
  })),
);

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

export const note = (
  <SlideNote>
    <Text>Le canapé !</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
