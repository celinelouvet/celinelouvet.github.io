import {
  type StackProps as ChakraStackProps,
  Show,
  useToken,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { type Resume } from '@/data';

import { SummaryAboveLg } from './SummaryAboveLg';
import { SummaryBelowMd } from './SummaryBelowMd';
import { SummaryBetweenMdAndLg } from './SummaryBetweenMdAndLg';

export type SummaryProps = Omit<ChakraStackProps, 'children'> & {
  resume: Resume;
};

export const Summary: FC<SummaryProps> = ({ resume }) => {
  const [lg] = useToken('breakpoints', ['lg']);
  const [md] = useToken('breakpoints', ['md']);

  return (
    <>
      <Show breakpoint={`(max-width: ${md})`}>
        <SummaryBelowMd resume={resume} />
      </Show>
      <Show breakpoint={`(min-width: ${md}) and (max-width: ${lg})`}>
        <SummaryBetweenMdAndLg resume={resume} />
      </Show>
      <Show breakpoint={`(min-width: ${lg})`}>
        <SummaryAboveLg resume={resume} />
      </Show>
    </>
  );
};
