import {
  Box,
  Center,
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
        gap="1em"
      >
        <StackItem marginBottom="1em">
          <H2Heading>{author}</H2Heading>
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
          <List>
            {socials.map(({ name, handle }, index) => (
              <TextListItem
                key={index}
                icon={socialIcon(name)}
                ariaLabel={name}
                text={handle}
              />
            ))}
          </List>
        </StackItem>
      </Stack>
    </SlideContentWith2Columns>
  );
});
