import { Box, Flex, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import * as React from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';

import { ThumbsUp } from 'src/components/core';
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
    title="Incubateur ESSEC Ventures"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Stack width="100%" gap="brand.100">
      <Box>
        <Text>Ancien de l’ESSEC.</Text>
        <Flex alignItems="center" gap="brand.50" marginLeft="brand.100">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>Inscription au programme de l’incubateur</chakra.span>
        </Flex>
      </Box>
      <Box>
        <ThumbsUp variant="slide">
          Accès à des formations entreprenariat
        </ThumbsUp>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>J’aime beaucoup.</Text>
    <Text>
      Je ne connais rien à l’entreprenariat, au marketing, aux levées de fonds.
    </Text>
    <Text>
      Ces formations vont être l’occasion pour moi d’apprendre énormément sur
      ces sujets.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
