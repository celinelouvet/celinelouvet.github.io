'use client';

import { useEffect, useState } from 'react';

const previousKeys = ['ArrowLeft', 'ArrowUp'];
const nextKeys = ['ArrowRight', 'ArrowDown', ' '];
const defaultPosition = 0;

export const useCurrentPosition = (length: number) => {
  const [currentPosition, setCurrentPosition] = useState(defaultPosition);

  useEffect(() => {
    const maxPosition = length - 1;

    const channel = new BroadcastChannel('useCurrentPosition');

    const next = () => {
      const newPosition =
        currentPosition === maxPosition ? maxPosition : currentPosition + 1;

      channel.postMessage(currentPosition);
      setCurrentPosition(newPosition);
    };

    const back = () => {
      const newPosition =
        currentPosition === 0 ? currentPosition : currentPosition - 1;

      channel.postMessage(currentPosition);
      setCurrentPosition(newPosition);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (nextKeys.includes(event.key)) {
        next();
      }

      if (previousKeys.includes(event.key)) {
        back();
      }
    };

    const onMessage = ({ data: position }: MessageEvent<number>) => {
      setCurrentPosition(position);
    };

    channel.addEventListener('message', onMessage);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      channel.removeEventListener('message', onMessage);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [currentPosition, length]);

  return currentPosition;
};
