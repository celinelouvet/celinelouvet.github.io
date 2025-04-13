import { Box, Stack, Text } from '@chakra-ui/react';

import { ThumbsUp } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Réponse au besoin"
    alignContent="flex-start"
  >
    <Stack
      width="100%"
      height="100%"
      direction="row"
      gap="2em"
      alignItems="stretch"
    >
      <Stack width="40%" gap="1em">
        <Box>
          <Text fontWeight="bold">Page WEB</Text>
          <Text>Affichage dynamique des données des mois précédents</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Script</Text>
          <Text>Envoi des emails</Text>
        </Box>
      </Stack>
      <Stack width="30%" flexGrow="1" gap="1em">
        <ThumbsUp title="Pour le client" variant="slide">
          <Text>Gain de temps énorme, chaque mois</Text>
          <Text>Pas d’erreur dans le rapport</Text>
          <Text>Assurance de l’envoi de l’email</Text>
        </ThumbsUp>
        <ThumbsUp title="Pour les stakeholders" variant="slide">
          <Text>Des graphes explorables</Text>
        </ThumbsUp>
      </Stack>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Des graphes explorables</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
