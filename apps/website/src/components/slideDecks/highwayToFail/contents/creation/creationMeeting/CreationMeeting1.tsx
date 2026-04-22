import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="La rencontre"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    column2={
      <Box width="100%" height="100%">
        <Text>Ils ont :</Text>
      </Box>
    }
    topRightCorner="Mi-Décembre 2017"
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Ils ont :</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
