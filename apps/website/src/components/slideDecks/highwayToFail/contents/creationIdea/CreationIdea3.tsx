import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’idée"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack gap="1em">
      <Text>1 avis laissé = 1 micro-don généré</Text>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      De plus, pour chaque avis laissé par un client, un micro-don est
      enregistré pour une association.
    </Text>
    <Text>Les dons seront reversés régulièrement.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
