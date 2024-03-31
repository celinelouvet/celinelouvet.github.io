'use client';

import { type ForwardedRef, useEffect, useState } from 'react';

export const useWindowSize = (ref: ForwardedRef<'div'>) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return size;
};
