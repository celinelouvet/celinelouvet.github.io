import {
  Avatar as ChakraAvatar,
  type AvatarProps as ChakraAvatarProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type PictureProps = Omit<ChakraAvatarProps, 'src'>;

export const Picture = forwardRef<PictureProps, 'img'>(
  ({ size, ...props }, ref) => {
    const styles = useStyleConfig('Picture', { size });

    return (
      <ChakraAvatar src="./square-gray.png" sx={styles} {...props} ref={ref} />
    );
  }
);

export const pictureStyles = {
  baseStyle: {
    width: 'picture.size',
    height: 'picture.size',
    border: '3px solid white',
  },
  sizes: {
    md: {
      width: 'picture.size.half',
      height: 'picture.size.half',
    },
    lg: {
      width: 'picture.size',
      height: 'picture.size',
    },
  },
  defaultProps: {
    size: 'md',
  },
} satisfies StyleConfig;
