import { Box, List, Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’idée"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack gap="2em">
      <Box>
        <Text as="span">
          Nouvelle loi (décret promulgué en <strong>sept. 2017</strong>)
        </Text>
        <List.Root paddingLeft="1em">
          <List.Item>
            Entre en vigueur le <strong>1er janvier 2018</strong>
          </List.Item>
          <List.Item>
            Impose aux e‑commerces d’avoir des avis de clients vérifiés.
          </List.Item>
        </List.Root>
      </Box>
      <Box>
        <ThumbsUp variant="slide">Ça me parait être une bonne idée !</ThumbsUp>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Ça me parait une bonne opportunité de profiter de cette nouvelle loi.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
