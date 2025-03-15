import { Box, type BoxProps, Center, HStack, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import { H2Heading, List, Picture } from '@/components/core';
import { socialIcon } from '@/lib';

import {
  ColorMode,
  type ContentIntroduction,
  SlideContentTypes,
} from '../../types';
import { SlideContentWith2Columns } from '../content2Columns';

type SlideContentIntroductionProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentIntroduction>;

export const SlideContentIntroduction = React.forwardRef<
  HTMLDivElement,
  SlideContentIntroductionProps
>(function SlideContentIntroduction(props, ref) {
  const { author, descriptions, socials, ...restProps } = props;

  console.log('Render: SlideContentIntroduction');

  const Column1 = (
    <Center width="100%" height="100%">
      <Box width="80%" height="70%">
        <Picture size="full" />
      </Box>
    </Center>
  );

  const splitSocials = [] as (typeof socials)[];
  for (let i = 0; i < socials.length; i += 2) {
    splitSocials.push(socials.slice(i, i + 2));
  }

  return (
    <SlideContentWith2Columns
      column1={Column1}
      colormode={ColorMode.light}
      ref={ref}
      {...restProps}
      type={SlideContentTypes.content2Columns}
    >
      <Stack
        height="100%"
        alignItems="stretch"
        justifyContent="center"
        gap="2em"
      >
        <Box>
          <H2Heading variant="slide">{author}</H2Heading>
        </Box>

        <Box>
          <List.Root listStyleType="none" gap="0.5em">
            {descriptions.map((description, index) => (
              <List.TextItem
                key={index}
                icon={BsArrowRight}
                ariaLabel={description}
                text={description}
              />
            ))}
          </List.Root>
        </Box>

        <Box>
          <HStack gap="2em" alignItems="start">
            {splitSocials.map((split, splitIndex) => (
              <List.Root key={splitIndex} listStyleType="none" gap="0.5em">
                {split.map(({ name, handle }, index) => (
                  <List.TextItem
                    key={index}
                    icon={socialIcon(name)}
                    ariaLabel={name}
                    text={handle}
                  />
                ))}
              </List.Root>
            ))}
          </HStack>
        </Box>
      </Stack>
    </SlideContentWith2Columns>
  );
});
