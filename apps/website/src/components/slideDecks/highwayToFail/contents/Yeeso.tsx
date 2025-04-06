import { Center, Grid, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import { BsLink45Deg } from 'react-icons/bs';

import { H2Heading, H3Heading } from '@/components/core';
import {
  ColorMode,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/slide';

import { YeesoLight } from '../components';

export const content = (
  <SlideContent type={SlideContentTypes.fullContent} colormode={ColorMode.dark}>
    <Stack height="100%" width="100%" textAlign="center" gap="1em">
      <Stack height="40%" gap="2em" marginBottom="3em">
        <Center height="45%">
          <YeesoLight />
        </Center>

        <H2Heading variant="slide">
          L’avenir de l’IT avec les femmes !
        </H2Heading>
      </Stack>

      <Grid
        templateColumns="1fr 1fr"
        templateRows="1fr 1fr"
        columnGap="10%"
        color="brand.800"
      >
        <H3Heading variant="slide">Réseau IT WOMEN</H3Heading>
        <H3Heading variant="slide">Sensibilisation, accompagnement</H3Heading>
        <chakra.span>Rôle modèles, mentorat, meetups, etc.</chakra.span>
        <chakra.span>Ecoles, entreprises, etc.</chakra.span>
      </Grid>
      <chakra.span>
        <Icon
          as={BsLink45Deg}
          marginRight="2"
          marginTop="-1"
          verticalAlign="middle"
        />
        <chakra.span>yeeso.fr</chakra.span>
      </chakra.span>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Je fais partie de l’association Yeeso.</Text>
    <Text>
      Notre objectif est d’accélérer la féminisation des équipes informatiques à
      travers des initiatives concrètes.
    </Text>
    <Text>
      Ça va notamment passer par le réseau IT Women et par des ateliers de
      sensibilisation, mais pas uniquement.
    </Text>
    <Text>Je vous laisse faire un tour sur notre site.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
