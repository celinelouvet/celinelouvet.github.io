import { Center } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const AwsCosts = React.lazy(() =>
  import('./components/awsCosts').then((module) => ({
    default: module.AwsCosts,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="« Pay as you go »"
    alignContent="flex-start"
  >
    <Center height="100%" width="100%">
      <React.Suspense fallback={<Loading />}>
        <AwsCosts />
      </React.Suspense>
    </Center>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
