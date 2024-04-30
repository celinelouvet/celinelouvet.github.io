import {
  Box as ChakraBox,
  type BoxProps as ChakraBoxProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
  useToken,
} from '@chakra-ui/react';
import QRCode from 'react-qr-code';

export type QrCodeProps = ChakraBoxProps & {
  value: string;
  size?: number;
  variant?: string;
};

export const QrCode = forwardRef<QrCodeProps, 'img'>(
  ({ value, size = 256, variant, ...props }, ref) => {
    const styles = useStyleConfig('QrCode', { variant });

    const brand300 = useToken('colors', 'brand.300');
    const brand900 = useToken('colors', 'brand.900');

    const fgColor = variant === 'dark' ? brand300 : brand900;

    return (
      <ChakraBox sx={styles} {...props} ref={ref}>
        <QRCode
          value={value}
          size={size}
          fgColor={fgColor}
          bgColor="transparent"
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          level="M"
        />
      </ChakraBox>
    );
  }
);

export const qrCodeStyles = {
  baseStyle: {
    width: '100%',
    height: '100%',
  },
  variants: {
    light: {},
    dark: {},
  },
  defaultProps: {
    variant: 'dark',
  },
} satisfies StyleConfig;
