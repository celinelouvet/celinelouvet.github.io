import { Box, Center, Text } from '@chakra-ui/react';
import { PieChart } from 'react-minimal-pie-chart';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

const data = [
  { title: `50%`, value: 50, color: '#4990bf' },
  { title: `50%`, value: 50, color: '#94beda' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La répartition des parts"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Dec. 2017"
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <PieChart
          data={data}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{
            fontSize: '0.25em',
            fill: '#f3f8fb',
            fontFamily: 'nunito',
            fontWeight: 'bold',
          }}
          startAngle={225}
          radius={42}
        />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Ils vont me proposer la répartition suivante</Text>
    <Text>Chacun d’eux me cède 10% de ses parts</Text>
    <Text>Ce qui m’amène à 20% et eux à 40%.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
