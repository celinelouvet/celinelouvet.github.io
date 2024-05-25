import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { ParetoSite, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
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
      C’est comme ça, que je vais me retrouver à passer plus de temps sur les
      autres fonctionnalités que sur la version simplifiée, initialement prévue.
    </Text>
    <Text>
      J’ai mis en gros 2 semaines pour la version simplifiée et ensuite plus de
      2 mois pour le reste.
    </Text>
    <Text>
      Je ne sais pas si vous reconnaissez ce graph, mais il est assez proche de
      celui du principe de Pareto ou dit des 80-20.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
