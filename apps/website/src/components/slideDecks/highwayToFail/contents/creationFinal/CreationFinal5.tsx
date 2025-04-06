import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaFlag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La répartition des parts"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
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
        <Text>
          Une répartition inégale amènera souvent un rapport de force inégal.
        </Text>
      </Flex>
    </Flex>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>En y repensant, je suis persuadée que</Text>
    <Text>
      Une répartition inégale amènera souvent un rapport de force inégal.
    </Text>
    <Text>Pensez-y en vous associant.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
