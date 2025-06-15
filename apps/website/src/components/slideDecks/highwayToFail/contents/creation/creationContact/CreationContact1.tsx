import { Box, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La mise en contact"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="brand.100">
      <Box>
        <Text>Discussion lors d’un meetup avec une connaissance.</Text>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    En discutant lors d’un meetup, au-dessus d’une part de pizza, un ami me dit
    connaître 2 personnes recherchant quelqu’un pour le développement
  </SlideNote>
);

const slide = { content, note };
export default slide;
