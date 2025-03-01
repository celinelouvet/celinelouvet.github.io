import {
  QrCode as ChakraQrCode,
  type SlotRecipeProps,
  useSlotRecipe,
} from '@chakra-ui/react';
import * as React from 'react';

type QrCodeVariantProps = SlotRecipeProps<'qrCode'> & { value?: string };

export interface QrCodeProps
  extends ChakraQrCode.RootProps,
    React.PropsWithChildren<QrCodeVariantProps> {}

export const QrCode = React.forwardRef<HTMLDivElement, QrCodeProps>(
  function QrCode(props, ref) {
    const { value, ...restProps } = props;

    const recipe = useSlotRecipe({ key: 'qrCode' });
    const styles = recipe(restProps);

    return (
      <ChakraQrCode.Root
        value={value}
        encoding={{ ecc: 'Q' }}
        css={styles.root}
        ref={ref}
        {...restProps}
      >
        <ChakraQrCode.Frame css={styles.frame}>
          <ChakraQrCode.Pattern css={styles.pattern} />
        </ChakraQrCode.Frame>
      </ChakraQrCode.Root>
    );
  },
);
