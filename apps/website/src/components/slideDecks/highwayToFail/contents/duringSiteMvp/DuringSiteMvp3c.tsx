import { Box, List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mars 2018"
  >
    <Stack gap="1em">
      <Box>
        <Text>Version simplifiée ne suffira pas</Text>
      </Box>
      <Box>
        <List.Root paddingLeft="1em">
          <List.Item>CSS plus poussé,</List.Item>
          <List.Item>Ajout progressif de fonctionnalités</List.Item>
        </List.Root>
        <Text paddingLeft="3em">
          Google Analytics, SEO, prerendering, événements Facebook, événements
          LinkedIn, événements Segment, Zapier, Prefinery, Draft, etc.
        </Text>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Et ça va nous amener à mi-mars 2018.</Text>
    <Text>Je ne vous fais pas la liste détaillée.</Text>
    <Text>
      Si on essayait de représenter le temps que j’ai passé sur ces
      fonctionnalités, ça ressemblerait à ça.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
