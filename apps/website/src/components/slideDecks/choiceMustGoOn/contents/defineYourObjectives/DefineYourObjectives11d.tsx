import { Flex, HStack, Icon, Stack, chakra } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Budget / Temps"
    alignContent="flex-start"
  >
    <HStack
      gap="brand.100"
      height="100%"
      width="100%"
      justifyContent="space-between"
    >
      <Stack gap="brand.50" height="100%">
        <chakra.span>Un jour de développement</chakra.span>

        <Flex alignItems="center" gap="brand.50" marginLeft="brand.100">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>~ 500 €</chakra.span>
        </Flex>
      </Stack>

      <Stack gap="brand.50" height="100%">
        <chakra.span>2 personnes pendant un trimestre</chakra.span>

        <Flex alignItems="center" gap="brand.50" marginLeft="brand.100">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>500 €</chakra.span>
          <chakra.span>x 2 personnes</chakra.span>
          <chakra.span opacity={0}>x 20 jours</chakra.span>
          <chakra.span opacity={0}>x 3 mois</chakra.span>
        </Flex>
        <Flex
          alignItems="center"
          gap="brand.50"
          marginLeft="brand.100"
          opacity={0}
        >
          <Icon as={BsArrowReturnRight} />
          <chakra.span>~ 60 k€</chakra.span>
        </Flex>
        <Flex
          alignItems="center"
          gap="brand.50"
          marginLeft="brand.100"
          opacity={0}
        >
          <Icon as={BsArrowReturnRight} />
          <chakra.span>+ la maintenance</chakra.span>
        </Flex>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
