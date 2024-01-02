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

export const pictureInPx = 200;

export const pictureStyles = {
  baseStyle: {
    width: `${pictureInPx}px`,
    height: `${pictureInPx}px`,
    border: '3px solid white',
  },
  sizes: {
    md: {
      width: `${pictureInPx / 2}px`,
      height: `${pictureInPx / 2}px`,
    },
    lg: {
      width: `${pictureInPx}px`,
      height: `${pictureInPx}px`,
    },
  },
  defaultProps: {
    size: 'md',
  },
} satisfies StyleConfig;
