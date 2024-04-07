import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Acquisition3, VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center height="100%">
      <Box height="100%">
        <Acquisition3 />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Comme on vise des TPE et PME, on ne peut acquérir de commerçants que via
      les plateformes d’e-commerce.
    </Text>
    <Text>
      D’ailleurs le principe de Pareto s’applique aussi là. C’est les 20% de
      clients restants et donc les plus difficiles.
    </Text>
    <Text>Donc il faut avoir publié le plugin dessus.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
