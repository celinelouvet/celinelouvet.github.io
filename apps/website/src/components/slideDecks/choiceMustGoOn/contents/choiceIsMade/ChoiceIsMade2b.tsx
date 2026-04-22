import { Center, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Suspense } from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const Back1 = React.lazy(() =>
  import('./components/Back').then((module) => ({
    default: module.Back1,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Décision prise"
    alignContent="flex-start"
  >
    <Stack
      gap="brand.100"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Center width="80%">
        <Suspense fallback={<Loading />}>
          <Back1 />
        </Suspense>
      </Center>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
