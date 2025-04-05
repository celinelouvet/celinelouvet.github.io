import { type BoxProps, Text } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContentAbstract,
  SlideContentEndTitle,
  SlideContentFullContent,
  SlideContentIntroduction,
  SlideContentMainTitle,
  SlideContentPromotion,
  SlideContentSectionTitle,
  SlideContentSectionTitleWithThinColumn,
  SlideContentTitleWith2Columns,
  SlideContentTitleWithContent,
  SlideContentTitleWithThin2Columns,
  SlideContentTitleWithThinColumn,
  SlideContentWith2Columns,
} from './contents';
import { type Contents, SlideContentTypes } from './types';
import { type Slide } from '../types';

type SlideContentProps = BoxProps & React.PropsWithChildren<Contents>;

export const SlideContent: React.FC<SlideContentProps> = function SlideContent(
  props,
) {
  return getContent(props);
};

const getContent = (props: SlideContentProps): Slide['content'] => {
  switch (props.type) {
    case SlideContentTypes.introduction:
      return <SlideContentIntroduction {...props} />;

    case SlideContentTypes.title:
      return <SlideContentMainTitle {...props} />;

    case SlideContentTypes.fullContent:
      return <SlideContentFullContent {...props} />;

    case SlideContentTypes.content2Columns:
      return <SlideContentWith2Columns {...props} />;

    case SlideContentTypes.sectionTitle:
      return <SlideContentSectionTitle {...props} />;

    case SlideContentTypes.sectionTitleWithThinColumn:
      return <SlideContentSectionTitleWithThinColumn {...props} />;

    case SlideContentTypes.titleWithContent:
      return <SlideContentTitleWithContent {...props} />;

    case SlideContentTypes.titleWith2Columns:
      return <SlideContentTitleWith2Columns {...props} />;

    case SlideContentTypes.titleWithThinColumn:
      return <SlideContentTitleWithThinColumn {...props} />;

    case SlideContentTypes.titleWithThin2Columns:
      return <SlideContentTitleWithThin2Columns {...props} />;

    case SlideContentTypes.endTitle:
      return <SlideContentEndTitle {...props} />;

    case SlideContentTypes.promotion:
      return <SlideContentPromotion {...props} />;

    case SlideContentTypes.abstract:
      return <SlideContentAbstract {...props} />;

    default:
      <Text>Unknown type</Text>;
  }
};
