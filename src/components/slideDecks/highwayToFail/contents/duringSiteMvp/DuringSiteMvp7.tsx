import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaFlag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
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
        <Text>Se concentrer sur ce qui apporte de la valeur métier.</Text>
      </Box>
    </Flex>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Concentrez-vous sur ce qui apporte de la valeur métier.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
