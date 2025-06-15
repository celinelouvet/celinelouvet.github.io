import { useBreakpointValue } from '@chakra-ui/react';

export function useHeadingSize() {
  return useBreakpointValue({ base: 'md', lg: 'lg' }) as
    | 'md'
    | 'lg'
    | undefined;
}
