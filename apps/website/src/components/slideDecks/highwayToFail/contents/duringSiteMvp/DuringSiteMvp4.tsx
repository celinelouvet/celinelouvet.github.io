import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { ParetoSite, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mars 2018"
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <ParetoSite />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      2-3 semaines sur une version simplifiée, puis 2 mois sur la version
      complète.
    </Text>
    <Text>
      Je ne sais pas si vous reconnaissez ce graph, mais il est assez proche de
      celui du principe de Pareto ou dit des 80-20.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
