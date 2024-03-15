import { type BoxProps, Text, forwardRef } from '@chakra-ui/react';
import { type ForwardedRef } from 'react';

import { SlideContentMainTitle } from './contents';
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
  if (props.type === SlideContentTypes.title) {
    return <SlideContentMainTitle {...props} ref={ref} />;
  }

  return <Text>Unknown content type</Text>;
};
