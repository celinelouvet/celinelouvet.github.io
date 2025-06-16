import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { DateFormatter, RemoteText } from '@/components/core';
import type { Experience } from '@/data';

export type InfosProps = {
  job: Pick<Experience, 'from' | 'to' | 'remote'>;
};

export const Infos: React.FC<InfosProps> = function Infos({ job }) {
  const period = { from: job.from, to: job.to };
  return (
    <Flex
      alignItems="baseline"
      gap="2"
      flexDirection={{ base: 'column', md: 'row', _print: 'row' }}
      color={{ base: 'gray.500', _dark: 'gray.300' }}
      flexWrap="wrap"
    >
      <DateFormatter type="period" period={period} size={{ _print: 'xs' }} />
      <Flex alignItems="baseline">
        (
        <DateFormatter
          type="duration"
          period={period}
          size={{ _print: 'xs' }}
        />
        )
      </Flex>
      <RemoteText remote={job.remote} size={{ _print: 'xs' }} />
    </Flex>
  );
};
