import { Grid, chakra } from '@chakra-ui/react';
import type * as React from 'react';

const highlightedText = {
  color: 'brand.900',
  backgroundColor: 'brand.400',
  opacity: 1,
};
type Factor = {
  item: string;
  highlighted: boolean;
};
const FactorLine: React.FC<{
  factor: { item: string; highlighted: boolean };
  index: number;
  contrast: boolean;
}> = ({ factor, index, contrast }) => {
  return (
    <>
      <chakra.span
        textAlign="right"
        borderLeftRadius="md"
        {...(contrast && { opacity: '0.4' })}
        {...(factor.highlighted && highlightedText)}
      >
        {index + 1}.
      </chakra.span>
      <chakra.span
        paddingLeft="0.5em"
        paddingRight="0.5em"
        borderRightRadius="md"
        {...(contrast && { opacity: '0.4' })}
        {...(factor.highlighted && highlightedText)}
      >
        {factor.item}
      </chakra.span>
    </>
  );
};
export const FactorList: React.FC<{
  factors: Factor[];
  starts: number;
  contrast?: boolean;
}> = ({ factors, starts, contrast = false }) => {
  return (
    <Grid
      templateColumns="2em 1fr"
      columnGap="0"
      rowGap="0.5em"
      width="45%"
      lineHeight="1.5em"
    >
      {factors.map((factor, index) => (
        <FactorLine
          key={index}
          contrast={contrast}
          factor={factor}
          index={starts - 1 + index}
        />
      ))}
    </Grid>
  );
};
