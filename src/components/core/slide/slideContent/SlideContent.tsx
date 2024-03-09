import { Box, type BoxProps, forwardRef } from '@chakra-ui/react';
import { useRef } from 'react';

import { useWindowSize } from '@/hooks';

const defaultFontSize = 18;
const defaultContentHeight = 450;
const ratio = 16 / 9;

type SlideContentProps = BoxProps;

export const SlideContent = forwardRef<SlideContentProps, 'div'>(
  ({ children, ...props }, ref) => {
    const elemref = useRef(ref);
    const { width, height } = useWindowSize(elemref);

    const windowRatio = width / height;

    if (windowRatio > ratio) {
      const fontSize = (defaultFontSize * height) / defaultContentHeight;
      const newWidth = height * ratio;

      return (
        <Box
          height={height}
          width={newWidth}
          fontSize={fontSize}
          lineHeight="2em"
          ref={ref}
          {...props}
        >
          {children}
        </Box>
      );
    } else {
      const newHeight = width / ratio;
      const fontSize = (defaultFontSize * newHeight) / defaultContentHeight;

      return (
        <Box
          width={width}
          height={newHeight}
          fontSize={fontSize}
          lineHeight="2em"
          ref={ref}
          {...props}
        >
          {children}
        </Box>
      );
    }
  }
);
