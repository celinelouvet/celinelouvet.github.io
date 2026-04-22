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
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Par contre, je ne sais pas pour vous, mais moi, je suis mal à l’aise de
      squater chez un inconnu.
    </Text>
    <Text>
      Nous sommes collègues, je n’ai pas besoin de connaître sa vie privée ou ce
      que sa copine utilise comme produit hygiénique.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
