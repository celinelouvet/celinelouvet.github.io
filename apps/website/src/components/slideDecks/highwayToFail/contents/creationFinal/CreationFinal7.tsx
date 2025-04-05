import { Box, Stack, Text } from '@chakra-ui/react';

import { ThumbsDown } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La déclaration"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" height="100%" gap="2em">
      <Box>
        <Text>
          Signature d’une lettre d’intention, avec attribution par vesting.
        </Text>
      </Box>
      <Box>
        <ThumbsDown variant="slide">
          Ce n’est pas un pacte d’associés.
        </ThumbsDown>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      C’est une lettre d’intention, pas un pacte d’associés. Ça n’a aucune
      valeur administrativement, voire juridiquement.
    </Text>
    <Text>
      Fun fact: si vous regardez sur Pappers la déclaration de Fairvioo, vous ne
      verrez mon nom nulle part.
    </Text>
    <Text>
      L’avantage, c’est que je n’ai pas eu à m’occuper de la liquidation 😶
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
