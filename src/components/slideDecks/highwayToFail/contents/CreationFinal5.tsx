import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaFlag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La répartition des parts"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Flex height="100%" alignItems="center" gap="3em">
      <Box>
        <Icon as={FaFlag} boxSize="4em" color="brand.500" />
      </Box>
      <Box flex="1" color="brand.300" fontSize="1.25em" textAlign="center">
        <Text>Une répartition inégale amènera</Text>
        <Text>pratiquement toujours un rapport</Text>
        <Text>de force inégal.</Text>
      </Box>
    </Flex>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
