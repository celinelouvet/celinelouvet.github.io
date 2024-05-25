import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { LearnHaskell, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Courbe d’apprentissage"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center height="100%">
      <Box height="100%">
        <LearnHaskell />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>En fait, ce que j’ai vécu, c’est exactement ça.</Text>
    <Text>
      Au début, tous les soirs, j’avais l’impression d’avoir tellement réfléchi
      que mon cerveau allait imploser.
    </Text>
    <Text>
      Puis j’ai compris les principes de base et j’ai pu avancer sérieusement.
    </Text>
    <Text>Puis après, bam les monades, nouveau mur à passer.</Text>
    <Text>
      Je pense que je me suis arrêtée avant de vraiment m’attaquer au mur
      suivant…
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
