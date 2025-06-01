import { Center } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../components/loading';

const IsOk = React.lazy(() =>
  import('./components/IsOk').then((module) => ({
    default: module.default,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Conclusion"
    alignContent="flex-start"
  >
    <Center height="100%" width="100%">
      <React.Suspense fallback={<Loading />}>
        <IsOk />
      </React.Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    C’est Ok de se tromper, ce qui est important c’est de revenir dessus.
  </SlideNote>
);

const slide = { content, note };
export default slide;
