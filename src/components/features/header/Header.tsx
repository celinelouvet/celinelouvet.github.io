import { Show, useToken } from '@chakra-ui/react';
import { type FC } from 'react';

import { HeaderAboveLg } from './headerAboveLg';
import { HeaderBelowLg } from './headerBelowLg';

export const Header: FC = () => {
  const [lg] = useToken('breakpoints', ['lg']);

  return (
    <>
      <Show breakpoint={`(max-width: ${lg})`}>
        <HeaderBelowLg />
      </Show>
      <Show breakpoint={`(min-width: ${lg})`}>
        <HeaderAboveLg />
      </Show>
    </>
  );
};
