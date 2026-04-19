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

const IdVsAuthnVsAuthz3 = React.lazy(() =>
  import('./components/IdVsAuthnVsAuthz3').then((module) => ({
    default: module.IdVsAuthnVsAuthz3,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    title="À ne pas confondre"
    column1={
      <Suspense fallback={<Loading />}>
        <IdVsAuthnVsAuthz3 />
      </Suspense>
    }
    alignContent="flex-start"
    position="relative"
  >
    <PostIt
      color="mid"
      gap="brand.50"
      position="absolute"
      bottom="brand.300"
      right="brand.300"
      width="50%"
    >
      <H3Heading variant="slide">Authentification (authn)</H3Heading>
      <Text>Apporter la preuve de son identité.</Text>
      <HStack gap="brand.50" alignItems="flex-start">
        <Text>
          <Icon as={TbArrowBigRightFilled} />
        </Text>
        <Text fontWeight="bold">Êtes-vous réellement cette personne ?</Text>
      </HStack>
      <Text>Mot de passe, code OTP, empreinte biométrique, 2FA.</Text>
    </PostIt>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Puis, il y aura l’authentification, que vous pourrez trouver sous
      l’abréviation Authn.
    </Text>
    <Text>
      Il s’agira de permettre à l’utilisateur d’apporter la preuve de son
      identité.
    </Text>
    <Text>
      On va chercher à répondre à la question “Êtes-vous réellement cette
      personne ?”
    </Text>
    <Text>
      Fréquemment, ça sera fait avec un mot de passe, un code OTP (one time
      password), une empreinte biométrique.
    </Text>
    <Text>
      Si la réponse à la question est “non”, ça sera l’occasion de retourner une
      erreur 401.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
