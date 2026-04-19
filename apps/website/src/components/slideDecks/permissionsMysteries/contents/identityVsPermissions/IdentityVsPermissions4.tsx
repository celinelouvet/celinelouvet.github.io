import { HStack, Icon, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { TbArrowBigRightFilled } from 'react-icons/tb';

import { H3Heading } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { PostIt } from 'src/components/slideDecks/components';

const IdVsAuthnVsAuthz2 = React.lazy(() =>
  import('./components/IdVsAuthnVsAuthz2').then((module) => ({
    default: module.IdVsAuthnVsAuthz2,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    title="À ne pas confondre"
    column1={
      <Suspense fallback={<Loading />}>
        <IdVsAuthnVsAuthz2 />
      </Suspense>
    }
    alignContent="flex-start"
    position="relative"
  >
    <PostIt
      color="light"
      gap="brand.50"
      position="absolute"
      bottom="brand.300"
      right="brand.300"
      width="50%"
    >
      <H3Heading variant="slide">Identification</H3Heading>
      <Text>Etablir l'identité de l'utilisateur.</Text>
      <HStack gap="brand.50" alignItems="flex-start">
        <Text>
          <Icon as={TbArrowBigRightFilled} />
        </Text>
        <Text fontWeight="bold">Qui êtes-vous ?</Text>
      </HStack>

      <Text>Adresse email, numéro de téléphone.</Text>
    </PostIt>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      En premier, on va avoir l’identification. Il s’agira d’établir l’identité
      de l’utilisateur.
    </Text>
    <Text>On va chercher à répondre à la question “Qui êtes-vous ?”</Text>
    <Text>
      Fréquemment, ça sera fait avec une adresse email, un numéro de téléphone,
      un login transmis pour l’utilisateur.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
