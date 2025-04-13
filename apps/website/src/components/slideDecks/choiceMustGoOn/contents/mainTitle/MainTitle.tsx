import { Box, HStack, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading } from '@/components/core';
import {
  ColorMode,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/slide';
import { choiceMustGoOnTalkFr as talk } from '@/data/talks';
import { socialIcon } from '@/lib';

import { Loading } from '../../components/loading';
import { Title } from '../Title.component';

const Subtitle = React.lazy(() =>
  import('./Subtitle.component').then((module) => ({
    default: module.Subtitle,
  })),
);

export const content = (
  <SlideContent colormode={ColorMode.dark} type={SlideContentTypes.fullContent}>
    <Stack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      gap="3em"
    >
      <Stack gap="0" alignItems="center" justifyContent="center">
        <Title title={talk.title} />
        <Box width="70%">
          <React.Suspense fallback={<Loading />}>
            <Subtitle />
          </React.Suspense>
        </Box>
      </Stack>
      <Box marginBottom={'auto'}>
        <H2Heading variant="slide">{talk.author}</H2Heading>
      </Box>

      <Box alignSelf="start">
        <HStack gap="2em">
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
      Pour ce qui va suivre, je vais vous présenter mon approche pour faire un
      choix. Ça découle de mon expérience personnelle, donc n’hésitez pas à
      venir me voir ensuite pour en discuter.
    </Text>

    <Text>
      Avant de se jeter dans le vif du sujet, j’aimerais qu’on se pose une
      question.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
