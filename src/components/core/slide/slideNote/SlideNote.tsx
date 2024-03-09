import {
  Box as ChakraBox,
  type BoxProps as ChakraBoxProps,
  forwardRef,
} from '@chakra-ui/react';

type Omitted = 'size' | 'boxSize' | 'width' | 'height' | 'w' | 'h';
type SlideNoteProps = Omit<ChakraBoxProps, Omitted>;

export const SlideNote = forwardRef<SlideNoteProps, 'div'>(
  ({ children, ...props }, ref) => {
    return (
      <ChakraBox
        w="100%"
        h="100%"
        padding="4"
        fontSize="2xl"
        lineHeight="2"
        ref={ref}
        {...props}
      >
        {children}
      </ChakraBox>
    );
  }
);
