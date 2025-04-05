import { Box, Flex, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import { ThumbsUp } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Incubateur ESSEC Ventures"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <Box>
        <Text>Ancien de l’ESSEC.</Text>
        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
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

const note = (
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
