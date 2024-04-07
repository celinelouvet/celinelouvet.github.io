import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack spacing="1em">
      <Text>Mars 2019 : Freelance</Text>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      On est en mars 2019. Je me suis un peu reposée et je retourne à la vie
      réelle, en freelance chez un client.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
