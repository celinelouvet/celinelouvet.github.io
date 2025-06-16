import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Golden path"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100">
      <Text>Aussi appelé « Paved Road »</Text>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Golden path, utilisé par Spotify</Text>
    <Text>Paved Road, chez Netflix</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
