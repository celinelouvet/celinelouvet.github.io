import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Chaos report"
    alignContent="flex-start"
  >
    <Stack gap="1em" width="100%">
      <Text>Produit par le « Standish group »</Text>
    </Stack>
  </SlideContent>
);

const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
