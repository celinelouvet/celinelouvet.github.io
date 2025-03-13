import { Box, type StackProps as ChakraStackProps } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';

import { SummaryAboveLg } from './SummaryAboveLg';
import { SummaryBelowMd } from './SummaryBelowMd';
import { SummaryBetweenMdAndLg } from './SummaryBetweenMdAndLg';

export type SummaryProps = Omit<ChakraStackProps, 'children'> & {
  resume: Resume;
};

export const Summary: React.FC<SummaryProps> = ({ resume }) => {
  return (
    <>
      <Box display={{ base: 'block', md: 'none' }}>
        <SummaryBelowMd resume={resume} />
      </Box>
      <Box display={{ base: 'none', md: 'block', lg: 'none' }}>
        <SummaryBetweenMdAndLg resume={resume} />
      </Box>
      <Box display={{ base: 'none', lg: 'block' }}>
        <SummaryAboveLg resume={resume} />
      </Box>
    </>
  );
};
