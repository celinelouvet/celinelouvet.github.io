import {
  Flex,
  Icon,
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack>
      <StackItem>
        <Text as="span">Utiliser un outil no code / low code</Text>
        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
          <Icon as={BsArrowReturnRight} />
          <Text as="span">
            Permettre aux autres de faire les modifications fines
          </Text>
        </Flex>
      </StackItem>
      <StackItem>
        <UnorderedList paddingLeft="1em">
          <ListItem>Webflow,</ListItem>
          <ListItem>Bubble,</ListItem>
          <ListItem>Strapi,</ListItem>
          <ListItem>etc.</ListItem>
        </UnorderedList>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
