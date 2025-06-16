import { Box, type BoxProps, Center, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading } from '@/components/core';

import { type ContentAbstract } from '../../types';

type SlideContentAbstractProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentAbstract>;

export const SlideContentAbstract: React.FC<SlideContentAbstractProps> =
  function SlideContentAbstract(props) {
    const { topic, descriptions, ...restProps } = props;
    return (
      <Box
        width="100%"
        height="100%"
        padding="brand.300"
        backgroundColor="brand.300"
        color="brand.900"
        {...restProps}
      >
        <Stack gap="brand.150">
          <Box>
            <Title title={topic} />
          </Box>

          <Box>
            {descriptions.map((description, i) => (
              <Text key={i} fontSize="brand.75" marginBottom="brand.110">
                {description}
              </Text>
            ))}
          </Box>
        </Stack>
      </Box>
    );
  };

const Title: React.FC<{ title: string }> = ({ title }) => (
  <Center width="100%" flexDirection="column">
    {title.split('\n').map((line, i) => (
      <H2Heading key={i} variant="slide" textAlign="center">
        {line}
      </H2Heading>
    ))}
  </Center>
);
