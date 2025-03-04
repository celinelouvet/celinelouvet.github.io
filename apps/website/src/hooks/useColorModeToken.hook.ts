import { useToken } from '@chakra-ui/react';

import { useColorModeValue } from '@/components/ui';

export const useColorModeToken = (light: string, dark: string) => {
  const [token] = useToken('colors', useColorModeValue(light, dark));
  return token;
};
