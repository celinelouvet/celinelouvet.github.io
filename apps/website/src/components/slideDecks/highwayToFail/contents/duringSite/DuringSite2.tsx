import { Box, Flex, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

const Design1 = React.lazy(() =>
  import('./components/Design1').then((module) => ({
    default: module.Design1,
  })),
);

const Design2 = React.lazy(() =>
  import('./components/Design2').then((module) => ({
    default: module.Design2,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le site vitrine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Flex
      width="100%"
      height="100%"
      gap="1em"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Box width="60%">
        <Design1 />
      </Box>
      <Box width="20%">
        <Design2 />
      </Box>
    </Flex>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Les maquettes sont déjà prêtes. Elles ont servi à faire le prototype.
    </Text>
    <Text>
      On ne voit pas bien sur les screenshots, mais le design est complexe et
      ultra responsive.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
