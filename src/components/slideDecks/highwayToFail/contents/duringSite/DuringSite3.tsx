import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le site vitrine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <Text>Version simplifiée, pour avancer vite :</Text>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Pour avancer vite, je vais suggérer de faire une version simplifiée qu’on
      enrichira ensuite.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
