import { type BoxProps, Text, forwardRef } from '@chakra-ui/react';
import { type ForwardedRef } from 'react';

import {
  SlideContentEndTitle,
  SlideContentIntroduction,
  SlideContentMainTitle,
  SlideContentWith2Columns,
} from './contents';
import { type Contents, SlideContentTypes } from './types';
import { type Slide } from '../types';

type SlideContentProps = BoxProps & Contents;

export const SlideContent = forwardRef<SlideContentProps, 'div'>(
  (props, ref) => {
    return getContent(props, ref);
  }
);

const getContent = (
  props: SlideContentProps,
  ref: ForwardedRef<'div'>
): Slide['content'] => {
  switch (props.type) {
    case SlideContentTypes.title:
      return <SlideContentMainTitle {...props} ref={ref} />;

    case SlideContentTypes.content2Columns:
      return <SlideContentWith2Columns {...props} ref={ref} />;

    case SlideContentTypes.introduction:
      return <SlideContentIntroduction {...props} ref={ref} />;

    case SlideContentTypes.endTitle:
      return <SlideContentEndTitle {...props} ref={ref} />;

    default:
      <Text>Unknown type</Text>;
  }
};
