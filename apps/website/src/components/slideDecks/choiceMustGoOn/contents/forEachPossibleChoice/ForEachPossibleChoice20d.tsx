import { Box, HStack, Stack, Text, chakra } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../../components/progressiveList';

const items = [
  { text: 'Répondent au besoin et aux contraintes' },
  { text: 'Ont des inconvénients' },
  { text: 'Avec des méthodes d’évaluation' },
  { text: 'Avec des méthodes de mise en place', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="En résumé"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100">
      <chakra.span>Liste de solutions</chakra.span>
      <HStack width="100%" gap="brand.300">
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
            <Text marginBottom="0">
              La <chakra.strong>moins</chakra.strong> pire
            </Text>
          </Stack>
        </Box>
      </HStack>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
