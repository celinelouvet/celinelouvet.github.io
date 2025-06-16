import { Box, Center, Icon, Stack, Text } from '@chakra-ui/react';
import { FaHashtag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    title="Des chiffres ?"
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
          90%
        </Text>
      </Box>
      <Box marginBottom="brand.100">
        <Text>des start‑ups échouent</Text>
      </Box>
      <Box>
        <Text as="em">Étude de Startup Genome</Text>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Dans l’abstract, j’annonce 90% d’échecs dont 10% la premère année.
    </Text>
    <Text>
      Ce chiffre vient d’une étude de Startup Genome, mais je n’ai pas réussi à
      trouver plus de détails.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
