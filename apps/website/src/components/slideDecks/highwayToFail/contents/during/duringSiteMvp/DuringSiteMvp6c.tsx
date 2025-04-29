import { List, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';


import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    topRightCorner="Mars 2018"
  >
    <Text>Ne surtout pas le coder !</Text>

    <List.Root variant="slide">
      <List.Item>Héberger un PDF</List.Item>
      <List.Item>Utiliser un prototype Figma</List.Item>
    </List.Root>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      A la place, on aurait pu héberger un PDF ou utiliser un prototype Figma et
      ils auraient eu la main dessus.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
