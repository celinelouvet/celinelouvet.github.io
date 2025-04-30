import { createToaster } from '@chakra-ui/react';

export const useToaster = () =>
  createToaster({
    placement: 'top-end',
  });
