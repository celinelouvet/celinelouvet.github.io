import { Center, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Suspense } from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../components/loading';


const Back3 = React.lazy(() =>
  import('./components/Back').then((module) => ({
    default: module.Back3,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Décision prise"
    alignContent="flex-start"
  >
    <Stack
      gap="1em"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Center width="80%">
        <Suspense fallback={<Loading />}>
          <Back3 />
        </Suspense>
      </Center>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
