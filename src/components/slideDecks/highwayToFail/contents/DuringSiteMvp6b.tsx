import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le principe de Pareto (80 — 20)"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack gap="1em">
      <Text>
        Les premiers 80% sont les plus faciles à atteindre, car ils demandent
        20% d’effort.
      </Text>
      <Text>
        Les 20% restants vont être les plus difficiles, et demanderont 80%
        d’effort.
      </Text>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Par contre, les 20% restantes demanderont, elles, 80% des efforts.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
