import { Flex, Icon, Stack, StackItem, Text } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Incubateur Paris-Dauphine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <Text>Anciens de Paris-Dauphine PSL.</Text>
        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
          <Icon as={BsArrowReturnRight} />
          <Text as="span">Inscription au programme de l’incubateur</Text>
        </Flex>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Courant Janvier 2018, on effectuera une présentation devant le jury de
      sélection.
    </Text>
    <Text>
      Si vous vous lancez, vous le remarquerez surement. Dans ces présentations,
      on est surtout présentés en tant que faire-valoir technique.
    </Text>
    <Text>
      On est acceptés par l’incubateur. On va pouvoir s’installer à partir
      d’avril 2018 à la FAC de Dauphine.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
