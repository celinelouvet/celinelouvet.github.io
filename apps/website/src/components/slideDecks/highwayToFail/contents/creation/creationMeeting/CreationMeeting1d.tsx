import { Box, List, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="La rencontre"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    column2={
      <Box width="100%" height="100%">
        <Text>Ils ont :</Text>
        <List.Root variant="slide">
          <List.Item>l’idée,</List.Item>
          <List.Item>fait une étude de marché,</List.Item>
          <List.Item>le moyen de se démarquer,</List.Item>
        </List.Root>
      </Box>
    }
    topRightCorner="Mi-Décembre 2017"
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Ils ont :</Text>
    <List.Root variant="slide">
      <List.Item>l’idée,</List.Item>
      <List.Item>fait une étude de marché,</List.Item>
      <List.Item>réfléchi à un moyen de se démarquer,</List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
