import { Box, type BoxProps } from '@chakra-ui/react';
import * as React from 'react';

import { HeaderAboveLg } from './headerAboveLg';
import { HeaderBelowLg } from './headerBelowLg';

export type HeaderProps = Omit<BoxProps, 'children'>;

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  function Header(props, ref) {
    return (
      <>
        <Box display={{ base: 'none', lg: 'block' }} ref={ref} {...props}>
          <HeaderAboveLg />
        </Box>
        <Box display={{ base: 'block', lg: 'none' }} ref={ref} {...props}>
          <HeaderBelowLg />
        </Box>
      </>
    );
  },
);
