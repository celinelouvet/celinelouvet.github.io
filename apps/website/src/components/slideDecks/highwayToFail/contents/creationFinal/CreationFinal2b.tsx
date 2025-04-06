import { Box, Center, Text } from '@chakra-ui/react';
import { PieChart } from 'react-minimal-pie-chart';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

const data = [
  { title: `20%`, value: 20, color: '#1f435a', labelColor: '#f3f8fb' },
  { title: `40%`, value: 40, color: '#4990bf', labelColor: '#f3f8fb' },
  { title: `40%`, value: 40, color: '#94beda', labelColor: '#f3f8fb' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La répartition des parts"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <PieChart
          data={data}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={(dataIndex) => {
            const dataEntry = data[dataIndex];
            return {
              fontSize: '0.25em',
              fill: dataEntry.labelColor,
              fontFamily: 'nunito',
              fontWeight: 'bold',
            };
          }}
          startAngle={189}
          radius={42}
        />
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Chacun d’eux me cède 10% de ses parts. Je dis bien « céder », le mot est
      important.
    </Text>
    <Text>Ce qui m’amène à 20% et eux à 40%.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
