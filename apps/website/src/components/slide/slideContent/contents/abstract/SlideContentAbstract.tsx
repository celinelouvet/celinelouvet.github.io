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
        padding="3em"
        backgroundColor="brand.300"
        color="brand.900"
        {...restProps}
      >
        <Stack gap="1.5em">
          <Box>
            <Title title={topic} />
          </Box>

          <Box>
            {descriptions.map((description, i) => (
              <Text key={i} fontSize="0.75em" marginBottom="1.1em">
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
