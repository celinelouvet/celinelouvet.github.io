import { Box, type BoxProps, Text, forwardRef } from '@chakra-ui/react';
import { useRef } from 'react';

import { useWindowSize } from '@/hooks';

import {
  SlideContentEndTitle,
  SlideContentIntroduction,
  SlideContentMainTitle,
  SlideContentPromotion,
  SlideContentWith2Columns,
} from './contents';
import { type Contents, SlideContentTypes } from './types';

const defaultFontSize = 18;
const defaultContentHeight = 450;
const ratio = 16 / 9;

type SlideContentProps = BoxProps & Contents;

export const SlideContent = forwardRef<SlideContentProps, 'div'>(
  ({ children, ...props }, ref) => {
    const elemref = useRef(ref);
    const { width, height } = useWindowSize(elemref);

    const windowRatio = width / height;

    const content = getContent({ children, ...props });

    if (windowRatio > ratio) {
      const fontSize = (defaultFontSize * height) / defaultContentHeight;
      const newWidth = height * ratio;
      const marginLeft = (width - newWidth) / 2;

      return (
        <Box
          height={height}
          width={newWidth}
          marginLeft={marginLeft}
          fontSize={fontSize}
          lineHeight="2em"
          ref={ref}
          {...props}
        >
          {content}
        </Box>
      );
    } else {
      const newHeight = width / ratio;
      const fontSize = (defaultFontSize * newHeight) / defaultContentHeight;
      const marginTop = (height - newHeight) / 2;

      return (
        <Box
          width={width}
          height={newHeight}
          marginTop={marginTop}
          fontSize={fontSize}
          lineHeight="2em"
          ref={ref}
          {...props}
        >
          {content}
        </Box>
      );
    }
  }
);

const getContent = (props: SlideContentProps): React.ReactNode => {
  switch (props.type) {
    case SlideContentTypes.title:
      return <SlideContentMainTitle {...props} />;

    case SlideContentTypes.content2Columns:
      return <SlideContentWith2Columns {...props} />;

    case SlideContentTypes.introduction:
      return <SlideContentIntroduction {...props} />;

    case SlideContentTypes.endTitle:
      return <SlideContentEndTitle {...props} />;

    case SlideContentTypes.promotion:
      return <SlideContentPromotion {...props} />;

    default:
      <Text>Unknown type</Text>;
  }
};
