import {
  Center,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';

import { H3Heading, List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const Brace = React.lazy(() =>
  import('./components/Brace').then((module) => ({
    default: module.Brace,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Marc veut lister les brouillons"
    topRightCorner="Exemple"
    alignContent="flex-start"
  >
    <HStack gap="brand.200" width="100%" height="100%" alignItems="center">
      <Stack flex="1">
        <List.Root gap="brand.200">
          <List.Item>
            <Text>Liste de règles</Text>
            <Flex alignItems="center" gap="brand.50" marginLeft="brand.100">
              <Icon as={BsArrowReturnRight} />
              <chakra.span>
                <strong>Logique</strong> d’autorisation
              </chakra.span>
            </Flex>
          </List.Item>
          <List.Item>
            <Text>Tuple (acteur, action, ressource)</Text>
            <Flex alignItems="center" gap="brand.50" marginLeft="brand.100">
              <Icon as={BsArrowReturnRight} />
              <chakra.span>
                <strong>Données</strong> d’autorisation
              </chakra.span>
            </Flex>
          </List.Item>
        </List.Root>
      </Stack>
      <Center height="100%" opacity={0}>
        <Suspense fallback={<Loading />}>
          <Brace />
        </Suspense>
      </Center>
      <Stack flex="1" gap="brand.100" opacity={0}>
        <H3Heading variant="slide">Décision</H3Heading>
        <Flex alignItems="baseline" gap="brand.50" marginLeft="brand.100">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>Marc est autorisé à lister les brouillons</chakra.span>
        </Flex>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Ce qu’on va appeler les données d’autorisation.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
