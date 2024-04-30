import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    column2={
      <UnorderedList paddingLeft="1em">
        <ListItem>Google analytics,</ListItem>
        <ListItem>du SEO,</ListItem>
        <ListItem>du Prerendering,</ListItem>
      </UnorderedList>
    }
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Ça va déraper assez vite, car je vais commencer à ajouter de plus en plus
      de choses.
    </Text>
    <Text>
      Et comme il faut quelqu’un qui s’y connaisse en développement, il n’y a
      que moi qui peut le faire.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
