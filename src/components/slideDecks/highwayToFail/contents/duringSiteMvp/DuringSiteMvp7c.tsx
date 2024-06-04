import {
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mars 2018"
  >
    <Stack>
      <StackItem>
        <Text as="span">Ne surtout pas le coder !</Text>
      </StackItem>
      <StackItem>
        <UnorderedList paddingLeft="1em">
          <ListItem>Héberger un PDF</ListItem>
          <ListItem>Utiliser un prototype Figma</ListItem>
        </UnorderedList>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      A la place, on aurait pu héberger un PDF ou utiliser un prototype Figma et
      ils auraient eu la main dessus.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
