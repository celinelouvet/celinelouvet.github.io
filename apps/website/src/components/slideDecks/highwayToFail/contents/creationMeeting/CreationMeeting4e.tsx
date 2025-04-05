import { Box, List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Qui sont-ils ?"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Box width="100%" height="100%">
      <List.Root variant="slide">
        <List.Item>2 hommes (~25 ans),</List.Item>
        <List.Item>se connaissent très bien,</List.Item>
        <List.Item>XP dans des grands groupes,</List.Item>
        <List.Item>au chômage et au RSA,</List.Item>
        <List.Item>Alumni de Paris Dauphine.</List.Item>
      </List.Root>
    </Box>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Ce sont 2 anciens de la fac de Paris Dauphine, sur des formations
      orientées business et marketing.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
