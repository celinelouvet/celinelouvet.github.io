import { Box, Center, Grid, HStack, Stack, Text } from '@chakra-ui/react';
import { PieChart } from 'react-minimal-pie-chart';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Breakdown } from './Breakdown';

const data = [
  { title: 'Réussi', value: 36, color: '#4990bf', labelColor: '#f3f8fb' },
  {
    title: 'En difficulté',
    value: 45,
    color: '#2a5978',
    labelColor: '#f3f8fb',
  },
  { title: 'Arrêté', value: 19, color: '#1f435a', labelColor: '#f3f8fb' },
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
      <Box height="100%">
        <Center width="100%" height="100%">
          <PieChart
            data={data}
            label={({ dataEntry }) => `${dataEntry.title}`}
            labelStyle={(dataIndex) => {
              const dataEntry = data[dataIndex];
              return {
                fontSize: '0.14em',
                fill: dataEntry.labelColor,
                fontFamily: 'nunito',
                fontWeight: '600',
              };
            }}
            startAngle={180}
            radius={42}
          />
        </Center>
      </Box>
      <Box>
        <Grid
          templateColumns="auto auto"
          columnGap="1em"
          rowGap="0.5em"
          alignItems="center"
          justifyItems="start"
        >
          {data.map((result) => (
            <Breakdown result={result} key={result.title} />
          ))}
        </Grid>
      </Box>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Stack gap="1em">
      <Text>Autres chiffres: on a </Text>
      {data.map(({ title, value }) => (
        <Text key={title}>
          {title} : {value}%
        </Text>
      ))}
    </Stack>
  </SlideNote>
);

const slide = { content, note };
export default slide;
