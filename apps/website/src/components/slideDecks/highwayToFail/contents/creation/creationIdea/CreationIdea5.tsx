import { Box, Center, Stack, Text } from '@chakra-ui/react';
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
const OrderConfirmation2 = React.lazy(() =>
  import('./components/OrderConfirmation2').then((module) => ({
    default: module.OrderConfirmation2,
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
        <Text>La confirmation d’achat</Text>
      </Box>
      <Box width="100%" flexGrow="1">
        <Center width="100%" height="100%">
          <React.Suspense fallback={<Loading />}>
            <OrderConfirmation2 />
          </React.Suspense>
        </Center>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    Lorsque le consommateur achète un article chez un commerçant
  </SlideNote>
);

const slide = { content, note };
export default slide;
