import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaFlag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La déclaration"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Flex height="100%" alignItems="center" gap="3em">
      <Box>
        <Icon as={FaFlag} boxSize="4em" color="brand.500" />
      </Box>
      <Box
        flex="1"
        color="brand.300"
        fontSize="1.25em"
        lineHeight="2em"
        textAlign="center"
      >
        <Text>Renseignez-vous de votre côté sur la procédure.</Text>
      </Box>
    </Flex>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Donc un conseil important, renseignez-vous de votre côté sur la procédure.
    </Text>
    <Text>Peut-être que c’est le moment de faire intervenir un avocat ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
