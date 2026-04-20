import { HStack, Icon, List, Stack, Text, chakra } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="3 questions importantes"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%">
      <List.Root variant="slide" as="ol" gap="brand.150">
        <List.Item>
          <Stack gap="0">
            <chakra.span>
              <strong>Qui</strong> fait la demande ?
            </chakra.span>
            <HStack gap="brand.50">
              <chakra.span>
                <Icon as={BsArrowReturnRight} />
              </chakra.span>
              <chakra.span>Acteur / Actrice</chakra.span>
            </HStack>
          </Stack>
        </List.Item>

        <List.Item>
          <Stack gap="0">
            <chakra.span>
              <strong>Qu’est-ce que</strong> cette personne essaie de faire ?
            </chakra.span>
            <HStack gap="brand.50">
              <chakra.span>
                <Icon as={BsArrowReturnRight} />
              </chakra.span>
              <chakra.span>Action</chakra.span>
            </HStack>
          </Stack>
        </List.Item>

        <List.Item>
          <Stack gap="0">
            <chakra.span>
              <strong>À quoi</strong> cette personne essaie-t-elle de le faire ?
            </chakra.span>
            <HStack gap="brand.50">
              <chakra.span>
                <Icon as={BsArrowReturnRight} />
              </chakra.span>
              <chakra.span>Ressource</chakra.span>
            </HStack>
          </Stack>
        </List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>La réponse définira la ressource.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
