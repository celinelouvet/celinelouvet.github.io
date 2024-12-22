import { useBreakpointValue } from '@chakra-ui/react';

export const useHeadingSize = () =>
  useBreakpointValue({ base: 'md', lg: 'lg' }, { fallback: 'lg' }) as
    | 'md'
    | 'lg'
    | undefined;
