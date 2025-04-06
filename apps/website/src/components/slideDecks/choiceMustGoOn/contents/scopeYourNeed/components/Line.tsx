import { GridItem } from '@chakra-ui/react';
import type * as React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

export const Line: React.FC<Item> = ({ need, priority, type }) => (
  <>
    <GridItem>{need}</GridItem>
    <GridItem>
      <FaLongArrowAltRight />
    </GridItem>
    <GridItem>{type}</GridItem>
    <GridItem>
      <FaLongArrowAltRight />
    </GridItem>
    <GridItem>{priority}</GridItem>
  </>
);

export type Item = {
  need: string;
  type: string;
  priority: string;
};
