import { Box, Center, HStack, Text } from '@chakra-ui/react';
import { PieChart } from 'react-minimal-pie-chart';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

const onBudget = [
  { title: 'Oui', value: 44, color: '#4990bf', labelColor: '#f3f8fb' },
  { title: 'Non', value: 56, color: '#1f435a', labelColor: '#f3f8fb' },
];

const onTime = [
  { title: 'Oui', value: 40, color: '#4990bf', labelColor: '#f3f8fb' },
  { title: 'Non', value: 60, color: '#1f435a', labelColor: '#f3f8fb' },
];

const onTarget = [
  { title: 'Oui', value: 56, color: '#4990bf', labelColor: '#f3f8fb' },
  { title: 'Non', value: 44, color: '#1f435a', labelColor: '#f3f8fb' },
];

const data = [
  { title: 'Budget respecté', results: onBudget },
  { title: 'Délai respecté', results: onTime },
  { title: 'Périmètre respecté', results: onTarget },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="CHAOS report"
    alignContent="flex-start"
    topRightCorner="2015"
  >
    <HStack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="space-evenly"
    >
      {data.map(({ title, results }) => (
        <Center key={title} width="100%" height="100%" flexDirection="column">
          <Text>{title}</Text>
          <Box width="90%">
            <PieChart
              data={results}
              label={({ dataEntry }) =>
                `${dataEntry.title} (${dataEntry.value}%)`
              }
              labelStyle={(dataIndex) => {
                const dataEntry = results[dataIndex];
                return {
                  fontSize: '0.17em',
                  fill: dataEntry.labelColor,
                  fontFamily: 'nunito',
                  fontWeight: '600',
                };
              }}
              startAngle={180}
              radius={42}
            />
          </Box>
        </Center>
      ))}
    </HStack>
  </SlideContent>
);

const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
