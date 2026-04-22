import { Box, Flex, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import * as React from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';

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
    title="Incubateur Paris-Dauphine"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Stack width="100%" gap="brand.100">
      <Box>
        <Text>Anciens de Paris-Dauphine PSL.</Text>
        <Flex alignItems="center" gap="brand.50" marginLeft="brand.100">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>Inscription au programme de l’incubateur</chakra.span>
        </Flex>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      On va donc pouvoir s’inscrire au programme de l’incubateur Paris-Dauphine.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
