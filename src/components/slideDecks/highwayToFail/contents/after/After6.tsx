import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="A refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack spacing="1em"></Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Et si c’était à refaire ?</Text>
    <Text>
      Bon, soyons honnête. A la dernière personne qui m’a posé cette question,
      j’ai répondu que je rêve d’aller élever des chèvres dans le Larzac.
    </Text>
    <Text>
      Bon, il parait qu’elles sont bruyantes et sentent très mauvais, mais ça
      vous donne mon état d’esprit.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
