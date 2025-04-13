import { Box, Center, HStack, Stack, Text, chakra } from '@chakra-ui/react';
import { PieChart } from 'react-minimal-pie-chart';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

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
  { title: 'Budget respecté', results: onBudget, hidden: false },
  { title: 'Délai respecté', results: onTime, hidden: false },
  { title: 'Périmètre respecté', results: onTarget, hidden: false },
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
      {data.map(({ title, results, hidden }) => (
        <Center
          key={title}
          width="100%"
          height="100%"
          flexDirection="column"
          opacity={hidden ? 0 : 1}
        >
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

export const note = (
  <SlideNote>
    <Stack gap="1em">
      {data
        .filter(({ hidden }) => !hidden)
        .map(({ title, results }) => (
          <Stack key={title} gap="0.5em">
            <Text>Pour "{title}"</Text>
            <HStack gap="3em">
              {results.map(({ title, value }) => (
                <chakra.span key={title}>
                  {title} : {value}%
                </chakra.span>
              ))}
            </HStack>
          </Stack>
        ))}
    </Stack>
  </SlideNote>
);

const slide = { content, note };
export default slide;
