import { Flex, Icon, Stack, StackItem, Text } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Incubateur ESSEC Ventures"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <Text>Ancien de l’ESSEC.</Text>
        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
          <Icon as={BsArrowReturnRight} />
          <Text as="span">Inscription au programme de l’incubateur</Text>
        </Flex>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Ce qui a permi de nous inscrire pour bénéficier de l’accompagnement de
      l’incubateur.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
