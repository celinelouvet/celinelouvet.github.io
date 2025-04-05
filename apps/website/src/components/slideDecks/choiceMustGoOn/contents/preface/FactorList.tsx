import { Grid, chakra } from '@chakra-ui/react';
import type * as React from 'react';

const highlightedText = {
  color: 'brand.900',
  backgroundColor: 'brand.400',
};
type Factor = {
  item: string;
  highlighted: boolean;
};
const FactorLine: React.FC<{
  factor: { item: string; highlighted: boolean };
  index: number;
}> = ({ factor, index }) => {
  const leftStyle = factor.highlighted
    ? {
        ...highlightedText,
        borderLeftRadius: 'md',
      }
    : {};
  const rightStyle = factor.highlighted
    ? {
        ...highlightedText,
        borderRightRadius: 'md',
      }
    : {};
  return (
    <>
      <chakra.span textAlign="right" {...leftStyle}>
        {index + 1}.
      </chakra.span>
      <chakra.span paddingLeft="0.5em" paddingRight="0.5em" {...rightStyle}>
        {factor.item}
      </chakra.span>
    </>
  );
};
export const FactorList: React.FC<{
  factors: Factor[];
  starts: number;
}> = ({ factors, starts }) => {
  return (
    <Grid
      templateColumns="2em 1fr"
      columnGap="0"
      rowGap="0.5em"
      width="45%"
      lineHeight="1.5em"
    >
      {factors.map((factor, index) => (
        <FactorLine key={index} factor={factor} index={starts - 1 + index} />
      ))}
    </Grid>
  );
};
