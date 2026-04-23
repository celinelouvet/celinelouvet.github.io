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

const IdVsAuthnVsAuthz4 = React.lazy(() =>
  import('./components/IdVsAuthnVsAuthz4').then((module) => ({
    default: module.IdVsAuthnVsAuthz4,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    title="À ne pas confondre"
    column1={
      <Suspense fallback={<Loading />}>
        <IdVsAuthnVsAuthz4 />
      </Suspense>
    }
    alignContent="flex-start"
    position="relative"
  >
    <PostIt
      color="dark"
      gap="brand.50"
      position="absolute"
      bottom="brand.300"
      right="brand.300"
      width="50%"
    >
      <H3Heading variant="slide">Autorisation (authz)</H3Heading>
      <Text>Contrôler ce que l’utilisateur peut faire.</Text>
      <HStack gap="brand.50" alignItems="flex-start">
        <Text>
          <Icon as={TbArrowBigRightFilled} />
        </Text>
        <Text fontWeight="bold">
          Est-ce qu’il a le droit de faire l’action demandée ?
        </Text>
      </HStack>
      <HStack gap="brand.50" alignItems="flex-start">
        <Text>
          <Icon as={TbArrowBigRightFilled} />
        </Text>
        <Text>Erreur 403</Text>
      </HStack>
    </PostIt>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Puis, il y aura l’autorisation, Authz. Il s’agira de contrôler ce que
      l’utilisateur peut faire.
    </Text>
    <Text>
      On va répondre à la question “Est-ce qu’il a le droit de faire l’action
      demandée ?”
    </Text>
    <Text>On reviendra sur la notion d’action après.</Text>
    <Text>
      Si la réponse à la question est “non”, ça sera l’occasion de retourner une
      erreur 403.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
