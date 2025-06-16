import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'Gestion de l’accès aux pages,' },
  { text: 'Les utilisateurs sont organisés en équipes,' },
  {
    text: 'Des permissions temporaires seront données pour des besoins de support,',
    shown: false,
  },
  {
    text: 'Des permissions supplémentaires seront données à des utilisateurs qui appartiennent à plusieurs équipes.',
    shown: false,
  },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Cadrer le besoin"
    alignContent="flex-start"
  >
    <Stack gap="brand.100" width="100%">
      <Text>Le besoin s’éclaircit :</Text>

      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
