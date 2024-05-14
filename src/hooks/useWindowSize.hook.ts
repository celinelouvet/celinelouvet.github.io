'use client';

import { type ForwardedRef, useEffect, useState } from 'react';

import { type WindowSize } from './types';

export const useWindowSize = (ref: ForwardedRef<'div'>): WindowSize => {
  const [size, setSize] = useState({ width: 0, height: 0, ratio: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth / window.innerHeight,
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
