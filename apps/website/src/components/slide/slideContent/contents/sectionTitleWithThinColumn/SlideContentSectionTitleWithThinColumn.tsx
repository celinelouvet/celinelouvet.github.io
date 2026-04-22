import { Box, type BoxProps, Center, HStack } from '@chakra-ui/react';
import * as React from 'react';

import { H1Heading } from 'src/components/core';

import { type ContentSectionTitleWithThinColumn } from '../../types';

type SlideContentSectionTitleWithThinColumnProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentSectionTitleWithThinColumn>;

export const SlideContentSectionTitleWithThinColumn: React.FC<SlideContentSectionTitleWithThinColumnProps> =
  function SlideContentSectionTitleWithThinColumn({
    title,
    column1,
    ...props
  }) {
    return (
      <Box
        width="100%"
        height="100%"
        backgroundColor="brand.900"
        color="brand.100"
        {...props}
      >
        <HStack width="100%" height="100%" alignItems="stretch" gap="0">
          <Box
            width="23%"
            height="100%"
            paddingX="brand.200"
            paddingY="brand.300"
            backgroundColor="white"
          >
            {column1}
          </Box>

          <Box
            width="77%"
            height="100%"
            paddingLeft="brand.100"
            paddingY="brand.300"
            paddingRight="brand.300"
            backgroundColor="brand.700"
            color="brand.200"
          >
            <Center width="100%" height="100%">
              <H1Heading variant="slide">{title}</H1Heading>
            </Center>
          </Box>
        </HStack>
      </Box>
    );
  };
