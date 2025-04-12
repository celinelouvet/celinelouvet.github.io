import { Box, HStack, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'Qu’est-ce que cette solution va apporter ?' },
  { text: 'Est-ce que ce sont des avantages ?' },
  { text: 'Est-ce que ce sont des inconvénients ?', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Questions à se poser"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="1em">
      <Text>Pour chaque solution :</Text>
      <HStack
        gap="3em"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <ProgressiveList
          type="numbered"
          items={items}
          flex="3"
          marginBottom="0"
        />

        <Box flex="2" opacity={0}>
          <Text fontWeight="bold">Dépend du contexte</Text>
        </Box>
      </HStack>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
