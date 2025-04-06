import { List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Cadrer le besoin"
    alignContent="flex-start"
  >
    <Stack gap="1em" width="100%">
      <Text>Le besoin s’éclaricit:</Text>
      <List.Root variant="slide">
        <List.Item>Gestion de l’accès à des pages.</List.Item>
        <List.Item>Les utilisateurs sont organisés en équipes.</List.Item>
        <List.Item>
          Des permissions temporaires seront données pour des besoins de
          support.
        </List.Item>
        <List.Item>
          Des permissions supplémentaires seront données à des utilisateurs qui
          appartiennent à plusieurs équipes.
        </List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
