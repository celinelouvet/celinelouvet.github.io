import { useBreakpointValue } from '@chakra-ui/react';

import { useIsPrint } from './useIsPrint.hook';

export function useHeadingSize() {
  const isPrint = useIsPrint();

  const result = useBreakpointValue(
    { base: 'md', lg: 'lg' },
    { fallback: 'lg' },
  ) as 'md' | 'lg' | undefined;

  return isPrint ? 'md' : result;
}
