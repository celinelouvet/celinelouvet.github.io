import { Box, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { ThumbsDown } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La déclaration"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" height="100%" gap="brand.200">
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

export const note = (
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
