import { Center, Spinner } from '@chakra-ui/react';

export const Loader = () => (
  <Center width="100vw" height="100vh" backgroundColor="brand.100">
    <Spinner
      color="brand.500"
      animationDuration="0.8s"
      borderWidth="6px"
      css={{ '--spinner-size': 'sizes.20' }}
    />
  </Center>
);
