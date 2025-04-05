import { Box, HStack, Icon, Stack, Text, chakra } from '@chakra-ui/react';

import { H2Heading } from '@/components/core';
import {
  ColorMode,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/slide';
import { choiceMustGoOnTalkFr as talk } from '@/data/talks';
import { socialIcon } from '@/lib';

import { Subtitle } from './Subtitle.component';
import { Title } from '../Title.component';

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
          <Subtitle />
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

const note = (
  <SlideNote>
    <Text>Bonjour à tous et à toutes,</Text>
    <Text>
      Avant toutes choses, je voulais vous remercier d’être venus m’écouter.
    </Text>
    <Text>
      Je vais vous présenter mon approche d’un choix. Ca découle de mon
      expérience personnelle, donc n’hésitez pas à venir me voir ensuite pour en
      discuter.
    </Text>

    <Text>
      Avant de se jeter dans le vif du sujet, j’aimerais qu’on revienne sur la
      raison de l’importance d'un choix.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
