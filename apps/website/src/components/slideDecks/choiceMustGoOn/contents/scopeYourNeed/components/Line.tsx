import { GridItem, chakra } from '@chakra-ui/react';
import type * as React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const basicStyle = {
  lineHeight: '1.5',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.9em',
};

const contrastStyle = {
  opacity: 0.4,
};

const highlightedStyle = {
  backgroundColor: 'brand.700',
  opacity: 1,
};

export const Line: React.FC<Item> = ({
  need,
  priority,
  type,
  shown,
  highlighted,
  contrast = false,
}) => (
  <>
    <GridItem
      {...basicStyle}
      {...(contrast && contrastStyle)}
      {...(highlighted && highlightedStyle)}
      padding="0.5em"
      borderLeftRadius="md"
    >
      <chakra.span opacity={shown.includes('need') ? 1 : 0}>{need}</chakra.span>
    </GridItem>
    <GridItem
      {...basicStyle}
      {...(contrast && contrastStyle)}
      {...(highlighted && highlightedStyle)}
    >
      <chakra.span opacity={shown.includes('type') ? 1 : 0}>
        <FaLongArrowAltRight />
      </chakra.span>
    </GridItem>
    <GridItem
      {...basicStyle}
      {...(contrast && contrastStyle)}
      {...(highlighted && highlightedStyle)}
      justifyContent="center"
    >
      <chakra.span opacity={shown.includes('type') ? 1 : 0}>{type}</chakra.span>
    </GridItem>
    <GridItem {...basicStyle} {...(highlighted && highlightedStyle)}>
      <chakra.span opacity={shown.includes('priority') ? 1 : 0}>
        <FaLongArrowAltRight />
      </chakra.span>
    </GridItem>
    <GridItem
      {...basicStyle}
      {...(contrast && contrastStyle)}
      {...(highlighted && highlightedStyle)}
      paddingRight="0.5em"
      borderRightRadius="md"
      justifyContent="center"
    >
      <chakra.span opacity={shown.includes('priority') ? 1 : 0}>
        {priority}
      </chakra.span>
    </GridItem>
  </>
);

export type Item = {
  need: string;
  type: string;
  priority: string;
  shown: ('need' | 'type' | 'priority')[];
  highlighted: boolean;
  contrast?: boolean;
};
