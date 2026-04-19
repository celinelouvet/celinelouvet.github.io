import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { List } from 'src/components/core';
import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const IdVsAuthnVsAuthz1 = React.lazy(() =>
  import('./components/IdVsAuthnVsAuthz1').then((module) => ({
    default: module.IdVsAuthnVsAuthz1,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    title="À ne pas confondre"
    column1={
      <Suspense fallback={<Loading />}>
        <IdVsAuthnVsAuthz1 />
      </Suspense>
    }
    alignContent="flex-start"
  >
    <Center height="100%" width="100%">
      <Text>3 notions différentes</Text>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Il y a 3 notions séparées.</Text>
    <List.Root>
      <List.Item>Identification</List.Item>
      <List.Item>Authentification</List.Item>
      <List.Item>Autorisation</List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
