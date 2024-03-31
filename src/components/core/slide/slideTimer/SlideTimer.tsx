import {
  ButtonGroup,
  IconButton,
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';
import { FaPause, FaPlay, FaUndo } from 'react-icons/fa';
import { useStopwatch } from 'react-timer-hook';

import { TimeText } from '@/components/core';

type SlideTimerProps = StackProps;

export const SlideTimer = forwardRef<SlideTimerProps, 'div'>(
  ({ ...props }, ref) => {
    const { seconds, minutes, hours, isRunning, start, pause, reset } =
      useStopwatch({ autoStart: false });

    return (
      <Stack alignItems="center" gap="5" padding="4" ref={ref} {...props}>
        <StackItem>
          <TimeText hours={hours} minutes={minutes} seconds={seconds} />
        </StackItem>
        <StackItem>
          {!isRunning ? (
            <SlideTimerPlay onStart={start} />
          ) : (
            <SlideTimerRunning onPause={pause} onRestart={() => reset()} />
          )}
        </StackItem>
      </Stack>
    );
  }
);

type SlideTimerPlayProps = {
  onStart: () => void;
};

export const SlideTimerPlay = ({ onStart }: SlideTimerPlayProps) => {
  return (
    <ButtonGroup>
      <IconButton
        onClick={onStart}
        aria-label="Play"
        icon={<FaPlay />}
        size="sm"
      />
    </ButtonGroup>
  );
};

type SlideTimerRunningProps = {
  onPause: () => void;
  onRestart: () => void;
};

export const SlideTimerRunning = ({
  onPause,
  onRestart,
}: SlideTimerRunningProps) => {
  return (
    <ButtonGroup>
      <IconButton
        onClick={onPause}
        aria-label="Pause"
        icon={<FaPause />}
        size="sm"
      />
      <IconButton
        onClick={onRestart}
        aria-label="Restart"
        icon={<FaUndo />}
        size="sm"
      />
    </ButtonGroup>
  );
};
