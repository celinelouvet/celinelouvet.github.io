import { Box, Center, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Pareto1, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le principe de Pareto (80 — 20)"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack height="100%" gap="1em">
      <Text>
        Les premiers 80% sont les plus faciles à atteindre, car ils ne demandent
        que 20% d’effort.
      </Text>
      <Center width="100%" flex="1">
        <Box height="100%">
          <Pareto1 />
        </Box>
      </Center>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Quand on applique ce principe au développement, il dit que 80% des
      fonctionnalités vont demander 20% des efforts, car ils sont faciles à
      atteindre.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
