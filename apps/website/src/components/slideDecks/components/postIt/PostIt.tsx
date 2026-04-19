import { Box, type BoxProps } from '@chakra-ui/react';
import * as React from 'react';

type PostItProps = Omit<BoxProps, 'color'> & {
  color: 'light' | 'mid' | 'dark';
};

const styles: Record<PostItProps['color'], BoxProps> = {
  light: {
    backgroundColor: 'brand.800',
    borderColor: 'brand.700',
    color: 'brand.100',
  },
  mid: {
    backgroundColor: 'brand.500',
    borderColor: 'brand.400',
    color: 'brand.900',
  },
  dark: {
    backgroundColor: 'brand.400',
    borderColor: 'brand.300',
    color: 'brand.900',
  },
};

export const PostIt: React.FC<PostItProps> = function PostIt(
  props: PostItProps,
) {
  const { children, color, ...style } = props;

  const colorStyles = styles[color];

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      marginLeft="10%"
      padding="brand.100"
      shadow="0.25em 0.25em 0.5em 0 rgba(0, 0, 0, 0.3)"
      display="flex"
      flexDirection="column"
      {...colorStyles}
      {...style}
    >
      {children}
    </Box>
  );
};
