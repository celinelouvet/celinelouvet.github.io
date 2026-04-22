import { Text } from '@chakra-ui/react';
import * as React from 'react';

import { Failure } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Failure variant="slide" title="Les investisseurs">
      Revenez après avoir généré du chiffre d’affaires
    </Failure>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Et là, le couperet : Les investisseurs nous disent de revenir après avoir
      généré du chiffre d’affaires
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
