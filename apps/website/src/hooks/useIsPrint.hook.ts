import { useMediaQuery } from '@chakra-ui/react';

export function useIsPrint() {
  const [isPrint] = useMediaQuery(['print']);

  return isPrint;
}
