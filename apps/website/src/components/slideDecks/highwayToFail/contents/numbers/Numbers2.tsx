import { Box, Center, Icon, Stack, Text } from '@chakra-ui/react';
import { FaHashtag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    title="Des chiffres ?"
    column1={
      <Center width="100%" height="70%">
        <Icon as={FaHashtag} boxSize="5em" color="brand.500" />
      </Center>
    }
  >
    <Stack
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      gap="1em"
    >
      <Box>
        <Text fontSize="2.5em" color="brand.400" fontWeight="900">
          Entre 60% et 75%
        </Text>
      </Box>
      <Box marginBottom="1em">
        <Text>des start‑ups échouent</Text>
      </Box>
      <Box>
        <Text as="em">Wydden (https://wydden.com)</Text>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Wydden qui est spécialisé dans l’accompagnement de startups, annonce un
      taux entre 60% et 75% d’échecs.
    </Text>
    <Text>Par contre, on ne sait pas d’où ces chiffres proviennent.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
