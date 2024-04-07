import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaFlag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="En conclusion"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Flex height="100%" alignItems="center" gap="3em">
      <Box>
        <Icon as={FaFlag} boxSize="4em" color="brand.500" />
      </Box>
      <Flex
        flex="1"
        color="brand.300"
        fontSize="1.25em"
        lineHeight="2em"
        textAlign="center"
      >
        <Text>Allez-y en connaissance de cause.</Text>
      </Flex>
    </Flex>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      En résumé, le message que j’ai cherché à faire passer, ce n’est pas de ne
      pas y aller, mais d’y aller en connaissance de cause.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
