import { Box } from '@chakra-ui/react';
import * as React from 'react';

import { HeaderAboveLg } from './headerAboveLg';
import { HeaderBelowLg } from './headerBelowLg';

export const Header: React.FC = function Header() {
  return (
    <>
      <Box display={{ base: 'none', lg: 'block' }}>
        <HeaderAboveLg />
      </Box>
      <Box display={{ base: 'block', lg: 'none' }}>
        <HeaderBelowLg />
      </Box>
    </>
  );
};
