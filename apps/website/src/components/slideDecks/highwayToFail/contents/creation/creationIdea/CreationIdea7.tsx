import { Box, Center, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

const ReviewAsked2 = React.lazy(() =>
  import('./components/reviewAsked').then((module) => ({
    default: module.ReviewAsked2,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le fonctionnement"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
  >
    <Stack width="100%" height="100%">
      <Box>
        <Text>La demande d’avis</Text>
      </Box>
      <Box width="100%" flexGrow="1">
        <Center width="100%" height="100%">
          <React.Suspense fallback={<Loading />}>
            <ReviewAsked2 />
          </React.Suspense>
        </Center>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    Le consommateur va donc déposer son avis et sélectionner une association
    pour le don.
  </SlideNote>
);

const slide = { content, note };
export default slide;
