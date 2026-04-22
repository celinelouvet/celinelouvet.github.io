import { Box, Stack, Text } from '@chakra-ui/react';

import { ThumbsUp } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

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
      gap="brand.200"
      alignItems="stretch"
    >
      <Stack width="40%" gap="brand.100">
        <Box>
          <Text fontWeight="bold">Page WEB</Text>
          <Text>Affichage dynamique des données des mois précédents</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Script</Text>
          <Text>Envoi des emails</Text>
        </Box>
      </Stack>
      <Stack width="30%" flexGrow="1" gap="brand.100">
        <ThumbsUp title="Pour le client" variant="slide">
          <Text opacity={0}>Gain de temps énorme, chaque mois</Text>
          <Text opacity={0}>Pas d’erreur dans le rapport</Text>
          <Text opacity={0}>Assurance de l’envoi de l’email</Text>
        </ThumbsUp>
        <ThumbsUp title="Pour les stakeholders" variant="slide" opacity={0}>
          <Text>Des graphes explorables</Text>
        </ThumbsUp>
      </Stack>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote>Les avantages pour le client</SlideNote>;

const slide = { content, note };
export default slide;
