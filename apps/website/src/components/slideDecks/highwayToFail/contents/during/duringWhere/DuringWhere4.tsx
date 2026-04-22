import { Box, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { ThumbsDown } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Où ça se passe ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Stack width="100%" gap="brand.100">
      <Box>
        <Text>Canapé & espace de coworking</Text>
      </Box>
      <Box>
        <ThumbsDown variant="slide">Passer son temps chez quelqu’un</ThumbsDown>
      </Box>
      <Box>
        <ThumbsDown variant="slide">Les coworkings coûtent cher</ThumbsDown>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Malheureusement les espaces de coworking coûtent cher, donc ça sera
      ponctuel.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
