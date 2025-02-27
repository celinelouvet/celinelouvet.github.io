import {
  Box,
  ButtonGroup,
  IconButton,
  Stack,
  type StackProps,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaPause, FaPlay, FaUndo } from 'react-icons/fa';
import { useStopwatch } from 'react-timer-hook';

import { TimeText } from '@/components/core';

type SlideTimerProps = StackProps;

export const SlideTimer = React.forwardRef<HTMLDivElement, SlideTimerProps>(
  function (props, ref) {
    const { seconds, minutes, hours, isRunning, start, pause, reset } =
      useStopwatch({ autoStart: false });

    return (
      <Stack alignItems="center" gap="2em" padding="4" ref={ref} {...props}>
        <Box>
          <TimeText
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            fontSize="2xl"
          />
        </Box>
        <Box>
          {!isRunning ? (
            <SlideTimerPlay onStart={start} />
          ) : (
            <SlideTimerRunning onPause={pause} onRestart={() => reset()} />
          )}
        </Box>
      </Stack>
    );
  },
);

type SlideTimerPlayProps = {
  onStart: () => void;
};

export const SlideTimerPlay = ({ onStart }: SlideTimerPlayProps) => {
  return (
    <ButtonGroup size="md">
      <IconButton onClick={onStart} aria-label="Play">
        <FaPlay />
      </IconButton>
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
    <ButtonGroup size="md">
      <IconButton onClick={onPause} aria-label="Pause">
        <FaPause />
      </IconButton>
      <IconButton onClick={onRestart} aria-label="Restart">
        <FaUndo />
      </IconButton>
    </ButtonGroup>
  );
};
