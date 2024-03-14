'use client';

import { useEffect, useState } from 'react';

const previousKeys = ['ArrowLeft', 'ArrowUp'];
const nextKeys = ['ArrowRight', 'ArrowDown', ' '];
const defaultPosition = 0;

export const useCurrentPosition = (length: number) => {
  const [currentPosition, setCurrentPosition] = useState(defaultPosition);

  useEffect(() => {
    const maxPosition = length - 1;

    let startPosition: number | null = null;
    let endPosition: number | null = null;

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

    const onTouchStart = ({ targetTouches }: TouchEvent) => {
      const [touch] = targetTouches;
      if (touch && touch.clientX) {
        startPosition = touch.clientX;
      }
    };

    const onTouchMove = ({ targetTouches }: TouchEvent) => {
      const [touch] = targetTouches;
      if (touch && touch.clientX) {
        endPosition = touch.clientX;
      }
    };

    const onTouchEnd = () => {
      if (startPosition && endPosition) {
        if (startPosition > endPosition) {
          next();
        } else {
          back();
        }
      }
      if (startPosition && !endPosition) {
        next();
      }
      startPosition = null;
      endPosition = null;
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
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);

    return () => {
      channel.removeEventListener('message', onMessage);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [currentPosition, length]);

  return currentPosition;
};
