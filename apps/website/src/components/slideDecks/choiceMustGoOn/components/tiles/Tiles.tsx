import {
  Center,
  HStack,
  Stack,
  type StackProps,
  Text,
  chakra,
} from '@chakra-ui/react';
import * as React from 'react';

import { getColors } from './colors';

const boxStyle = {
  borderRadius: 'md',
  color: 'white',
  padding: '0.5em',
};

const allColors = ['brand.200', 'brand.300', 'brand.400', 'brand.500'];

export type Tile = {
  text: string;
  title?: string;
  shown?: boolean;
  highlighted?: boolean;
  style?: StackProps;
};

type TilesProps = {
  data: Tile[];
};

export function Tiles({ data }: TilesProps) {
  if (data.length === 0 || data.length > allColors.length) {
    return null;
  }

  const colors = getColors(data);
  const width = `${100 / (data.length + 1)}%`;

  const WithTitle: React.FC<{ tile: Tile; backgroundColor: string }> = ({
    tile,
    backgroundColor,
  }) => {
    const { text, shown = true, style, title } = tile;
    return (
      <Stack
        {...boxStyle}
        height="60%"
        alignItems="center"
        justifyContent="flex-start"
        textAlign="center"
        width={width}
        backgroundColor={backgroundColor}
        {...style}
      >
        <Text
          fontFamily="PT Sans narrow"
          fontSize="1.25em"
          fontWeight="700"
          opacity={shown ? 1 : 0}
        >
          {title}
        </Text>
        <Center flex="1" fontSize="0.9em" opacity={shown ? 1 : 0}>
          {text}
        </Center>
      </Stack>
    );
  };

  const WithoutTitle: React.FC<{ tile: Tile; backgroundColor: string }> = ({
    tile,
    backgroundColor,
  }) => {
    const { text, shown = true, style } = tile;
    return (
      <Center
        {...boxStyle}
        height="50%"
        fontWeight="bold"
        textAlign="center"
        width={width}
        backgroundColor={backgroundColor}
        {...style}
      >
        <chakra.span opacity={shown ? 1 : 0}>{text}</chakra.span>
      </Center>
    );
  };

  return (
    <HStack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="space-evenly"
    >
      {data.map((tile, index) => {
        const backgroundColor = colors[index];

        return tile.title ? (
          <WithTitle
            key={`${tile.text}-${index}`}
            tile={tile}
            backgroundColor={backgroundColor}
          />
        ) : (
          <WithoutTitle
            key={`${tile.text}-${index}`}
            tile={tile}
            backgroundColor={backgroundColor}
          />
        );
      })}
    </HStack>
  );
}
