import { ListItem, UnorderedList } from '@chakra-ui/react';

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
        <ListItem>des évènements Facebook,</ListItem>
        <ListItem>des évènements LinkedIn,</ListItem>
        <ListItem>des évènements Segment,</ListItem>
      </UnorderedList>
    }
  >
    <UnorderedList paddingLeft="1em">
      <ListItem>Zapier pour le formulaire de contact,</ListItem>
      <ListItem>Prefinery (gestion de referrals),</ListItem>
      <ListItem>Drift (chats).</ListItem>
    </UnorderedList>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
