import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineAfter = React.lazy(() =>
  import('../components/VerticalTimelineAfter').then((module) => ({
    default: module.VerticalTimelineAfter,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineAfter />
      </React.Suspense>
    }
    topRightCorner="Mars 2019"
  >
    <Stack gap="brand.100">
      <Text>Freelance</Text>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      On est en mars 2019. Je me suis un peu reposée et je retourne à la vie
      réelle, en freelance chez un client.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
