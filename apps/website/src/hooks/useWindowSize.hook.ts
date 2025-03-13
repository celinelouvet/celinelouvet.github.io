import * as React from 'react';

import { type WindowSize } from './types';

export const useWindowSize = (ref: React.ForwardedRef<'div'>): WindowSize => {
  const [size, setSize] = React.useState({ width: 0, height: 0, ratio: 0 });

  React.useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth / window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [ref]);

  return size;
};
