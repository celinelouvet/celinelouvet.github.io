import { Box, Center, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Pareto2, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le principe de Pareto (80 — 20)"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack height="100%" gap="1em">
      <Text>
        Les 20% restants vont être les plus difficiles, et demanderont 80%
        d’effort.
      </Text>
      <Center width="100%" flex="1">
        <Box height="100%">
          <Pareto2 />
        </Box>
      </Center>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Par contre, les 20% restantes demanderont, elles, 80% des efforts.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
