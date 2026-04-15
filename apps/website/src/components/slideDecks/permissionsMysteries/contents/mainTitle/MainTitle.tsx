import { Box, HStack, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  colorMode,
} from 'src/components/slide';
import { choiceMustGoOnTalkFr as talk } from 'src/data/talks';
import { socialIcon } from 'src/lib';

import { Loading } from '../../../components/loading';

const Title = React.lazy(() =>
  import('./Title.component').then((module) => ({
    default: module.Title,
  })),
);

export const content = (
  <SlideContent colormode={colorMode.dark} type={SlideContentTypes.fullContent}>
    <Stack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      gap="brand.300"
    >
      <Box width="70%">
        <React.Suspense fallback={<Loading />}>
          <Title />
        </React.Suspense>
      </Box>
      <Box marginBottom={'auto'}>
        <H2Heading variant="slide">{talk.author}</H2Heading>
      </Box>

      <Box alignSelf="start">
        <HStack gap="brand.200">
          {talk.socials.map(({ name, handle, onMain }, index) => {
            if (!onMain) return null;
            return (
              <Box key={index}>
                <chakra.span fontSize="0.8em">
                  <Icon
                    as={socialIcon(name)}
                    marginTop="-1"
                    marginRight="2"
                    verticalAlign="middle"
                  />
                  {handle}
                </chakra.span>
              </Box>
            );
          })}
        </HStack>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Bonjour à tous et à toutes,</Text>
    <Text>
      Avant toute chose, je voulais vous remercier d’être venues m’écouter.
    </Text>
    <Text>
      Votre product manager vous a demandé d’ajouter une gestion des permissions
      dans l’application. Ça a été complexe ou pas forcément bien implémenté. On
      est presque tous passés par là: on sait qu’on doit le faire, mais on ne
      sait pas trop comment.
    </Text>

    <Text>
      Aujourd’hui, on va voir comment le faire et ce que chaque choix va nous
      apporter.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
