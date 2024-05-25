import {
  Box,
  Center,
  HStack,
  List,
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';

import { H2Heading, Picture, TextListItem } from '@/components/core';

import { socialIcon } from './icons';
import {
  ColorMode,
  type ContentIntroduction,
  SlideContentTypes,
} from '../../types';
import { SlideContentWith2Columns } from '../content2Columns';

type SlideContentIntroductionProps = Omit<StackProps, 'children'> &
  ContentIntroduction;

export const SlideContentIntroduction = forwardRef<
  SlideContentIntroductionProps,
  'div'
>(({ author, descriptions, socials, ...props }, ref) => {
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
      {...props}
      column1={Column1}
      colormode={ColorMode.light}
      ref={ref}
      type={SlideContentTypes.content2Columns}
    >
      <Stack
        height="100%"
        alignItems="stretch"
        justifyContent="center"
        gap="2em"
      >
        <StackItem>
          <H2Heading variant="slide">{author}</H2Heading>
        </StackItem>

        <StackItem>
          <List>
            {descriptions.map((description, index) => (
              <TextListItem
                key={index}
                icon={BsArrowRight}
                ariaLabel={description}
                text={description}
              />
            ))}
          </List>
        </StackItem>

        <StackItem>
          <HStack spacing="2em" alignItems="start">
            {splitSocials.map((split, splitIndex) => (
              <List key={splitIndex}>
                {split.map(({ name, handle }, index) => (
                  <TextListItem
                    key={index}
                    icon={socialIcon(name)}
                    ariaLabel={name}
                    text={handle}
                  />
                ))}
              </List>
            ))}
          </HStack>
        </StackItem>
      </Stack>
    </SlideContentWith2Columns>
  );
});
