import { Box, List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineBefore } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Mon historique"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
    topRightCorner="Début 2017"
  >
    <Stack width="100%" gap="1em">
      <Box>
        <List.Root variant="slide">
          <List.Item>En couple, avec un enfant et un crédit bancaire</List.Item>
          <List.Item>Déjà eu un burn‑out</List.Item>
        </List.Root>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>J’avais déjà eu un burn‑out, jamais vraiment guéri.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
