import { createToaster } from '@chakra-ui/react';

export const useToaster = () => {
  return createToaster({
    placement: 'top-end',
    pauseOnPageIdle: true,
  });
};
