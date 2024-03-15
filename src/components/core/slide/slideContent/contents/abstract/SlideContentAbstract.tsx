import {
  Center,
  Stack,
  StackItem,
  type StackProps,
  Text,
  forwardRef,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { H2Heading } from '@/components/core';

import { type ContentAbstract } from '../../types';

type SlideContentAbstractProps = Omit<StackProps, 'children'> & ContentAbstract;

export const SlideContentAbstract = forwardRef<
  SlideContentAbstractProps,
  'div'
>(({ topic, descriptions, ...props }, ref) => {
  return (
    <Stack
      width="100%"
      height="100%"
      padding="3em"
      backgroundColor="brand.300"
      color="brand.900"
      spacing="1.5em"
      ref={ref}
      {...props}
    >
      <StackItem>
        <Title title={topic} />
      </StackItem>

      <StackItem>
        {descriptions.map((description, i) => (
          <Text key={i} fontSize="0.75em" marginBottom="1.1em">
            {description}
          </Text>
        ))}
      </StackItem>
    </Stack>
  );
});

const Title: FC<{ title: string }> = ({ title }) => (
  <Center width="100%" flexDirection="column">
    {title.split('\n').map((line, i) => (
      <H2Heading key={i} textAlign="center">
        {line}
      </H2Heading>
    ))}
  </Center>
);
