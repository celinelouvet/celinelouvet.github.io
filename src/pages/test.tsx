import { Text } from '@chakra-ui/react';

import { useResume } from '@/hooks';

export default function Page() {
  const { firstname, lastname } = useResume();

  return (
    <Text>
      {firstname} {lastname}
    </Text>
  );
}
