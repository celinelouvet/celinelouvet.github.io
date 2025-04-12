import { Stack, Text } from '@chakra-ui/react';

import { Quote } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Besoins flous"
    alignContent="flex-start"
  >
    <Stack gap="1em" width="100%">
      <Quote title="Le client" variant="slide">
        <Text>
          L’Excel appelle une API pour faire les calculs. Il faudra voir avec
          Martin de l’équipe Core.
        </Text>
      </Quote>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    S'il m'avait dit :
    <Text>
      L’Excel appelle une API pour faire les calculs. Il faudra voir avec Martin
      de l’équipe Core.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
