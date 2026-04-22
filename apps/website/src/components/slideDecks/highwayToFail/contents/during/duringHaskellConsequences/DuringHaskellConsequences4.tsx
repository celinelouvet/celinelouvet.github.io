import { Text } from '@chakra-ui/react';
import * as React from 'react';

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
    title="Ce que j’aurais dû faire ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    topRightCorner="Eté 2018"
  >
    <Text>Changer la stack dès que possible</Text>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Ce que j’aurais dû faire ?</Text>
    <Text>
      La réponse est très simple : changer la stack dès que j’ai vu les
      difficultés que j’avais.
    </Text>
    <Text>
      J’ai voulu mettre la charrue avant les bœufs, et j’ai ignoré le besoin de
      productivité et les signaux de mes collègues.
    </Text>
    <Text>On a tous le droit de se planter.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
