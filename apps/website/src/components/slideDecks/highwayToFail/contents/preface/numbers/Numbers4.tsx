import { Box, Center, Icon, Stack, Text } from '@chakra-ui/react';
import { FaHashtag } from 'react-icons/fa';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    title="Consensus"
    column1={
      <Center width="100%" height="70%">
        <Icon as={FaHashtag} boxSize="brand.500" color="brand.500" />
      </Center>
    }
  >
    <Stack
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      gap="brand.100"
    >
      <Box>
        <Text fontSize="brand.250" color="brand.400" fontWeight="900">
          Entre 60% et 90%
        </Text>
      </Box>
      <Box marginBottom="brand.100">
        <Text>des start‑ups échouent</Text>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Bref, ça reste assez flou, mais il y a un consensus qui s’est formé autour
      d’un taux d’échecs entre 60% et 90%.
    </Text>
    <Text>Ça reste plus d’une startup sur deux.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
