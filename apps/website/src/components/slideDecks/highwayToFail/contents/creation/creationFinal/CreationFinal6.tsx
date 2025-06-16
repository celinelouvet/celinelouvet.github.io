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
    title="La déclaration"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" height="100%" gap="brand.200">
      <Box>
        <Text>
          Signature d’une lettre d’intention, avec attribution par vesting.
        </Text>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Je signe donc une lettre d’intention pour avoir les 20% par vesting, par
      attribution progressive.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
