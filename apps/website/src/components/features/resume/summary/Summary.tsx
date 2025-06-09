import {
  type StackProps as ChakraStackProps,
  useMediaQuery,
  useToken,
} from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';
import { useIsPrint } from '@/hooks';

import { SummaryAboveLg } from './SummaryAboveLg';
import { SummaryBelowMd } from './SummaryBelowMd';
import { SummaryBetweenMdAndLg } from './SummaryBetweenMdAndLg';
import { SummaryPrint } from './SummaryPrint';

export type SummaryProps = Omit<ChakraStackProps, 'children'> & {
  resume: Resume;
};

export const Summary: React.FC<SummaryProps> = function Summary({ resume }) {
  const isPrint = useIsPrint();

  const [md, lg] = useToken('breakpoints', ['md', 'lg']);

  const [belowMd, aboveLg] = useMediaQuery([
    `(max-width: ${md})`,
    `(min-width: ${lg})`,
  ]);

  if (isPrint) {
    return <SummaryPrint resume={resume} />;
  }
  if (belowMd) {
    return <SummaryBelowMd resume={resume} />;
  }

  if (aboveLg) {
    return <SummaryAboveLg resume={resume} />;
  }
  return <SummaryBetweenMdAndLg resume={resume} />;
};
