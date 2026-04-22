import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { TbArrowBigRightFilled } from 'react-icons/tb';

import { H3Heading } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { ProgressiveList } from 'src/components/slideDecks/components';

const decisions = [
  { text: 'Autorisé', shown: true },
  { text: 'Refusé', shown: true },
];
const executions = [
  { text: 'Erreur 403', shown: true },
  { text: 'Redirection', shown: false },
  { text: 'etc.', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Décision & Exécution"
    alignContent="flex-start"
  >
    <HStack gap="brand.200" width="100%" height="100%" alignItems="flex-start">
      <Stack flex="2" gap="brand.100">
        <H3Heading variant="slide">Décision</H3Heading>
        <Stack gap="brand.100" marginLeft="brand.100">
          <Text>Réponse binaire</Text>
          <ProgressiveList items={decisions} marginBottom={0} />
        </Stack>
      </Stack>
      <Box flex="1" alignSelf="center" textAlign="center">
        <Icon as={TbArrowBigRightFilled} />
      </Box>

      <Stack flex="2" gap="brand.100">
        <H3Heading variant="slide">Exécution</H3Heading>
        <Stack gap="brand.100" marginLeft="brand.100">
          <Text>Enforcer</Text>
          <ProgressiveList items={executions} marginBottom={0} />
        </Stack>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>En cas de refus, alors on pourra retourner une erreur 403</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
