import { Stack, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { ProgressiveList } from 'src/components/slideDecks/components';

const IdVsAuthnVsAuthz1 = React.lazy(() =>
  import('./components/IdVsAuthnVsAuthz1').then((module) => ({
    default: module.IdVsAuthnVsAuthz1,
  })),
);

const items = [
  { text: 'Identification par email', shown: true },
  { text: 'Authentification par mot de passe', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    title="Exemple"
    column1={
      <Suspense fallback={<Loading />}>
        <IdVsAuthnVsAuthz1 />
      </Suspense>
    }
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" justifyContent="center">
      <ProgressiveList items={items} type="numbered" gap="brand.100" />
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>On pourrait avoir une identification par email</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
