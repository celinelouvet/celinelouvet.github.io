import { Box, HStack, Stack, chakra } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'Est-ce que ça répond au besoin ?' },
  { text: 'Est-ce que ça respecte les contraintes ?' },
  { text: 'Est-ce que les inconvénients sont acceptables ?', shown: false },
  { text: 'Comment confirmer ?', shown: false },
  { text: 'Comment mettre en place ?', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="En résumé"
    alignContent="flex-start"
  >
    <HStack width="100%" height="100%" gap="brand.300">
      <ProgressiveList
        items={items}
        type="numbered"
        flex="2"
        marginBottom="0"
      />

      <Box flex="1" opacity="0">
        <Stack
          textAlign="center"
          backgroundColor="brand.800"
          padding="brand.100"
          borderRadius="md"
        >
          <chakra.span>Dépendra</chakra.span>
          <chakra.strong>toujours</chakra.strong>
          <chakra.span>du contexte</chakra.span>
        </Stack>
      </Box>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote>Scopes progressifs: podcast sylvain</SlideNote>;

const slide = { content, note };
export default slide;
