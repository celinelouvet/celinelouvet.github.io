import { Center, CircularProgress } from '@chakra-ui/react';

export const Loader = () => (
  <Center width="100vw" height="100vh" backgroundColor="brand.100">
    <CircularProgress
      isIndeterminate
      capIsRound
      trackColor="brand.800"
      color="brand.400"
      size="4em"
      thickness="4px"
    />
  </Center>
);
