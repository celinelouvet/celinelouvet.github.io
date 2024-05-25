import {
  HStack,
  Stack,
  StackItem,
  type StackProps,
  forwardRef,
} from '@chakra-ui/react';

import { H2Heading, H3Heading } from '@/components/core';

import {
  ColorMode,
  type ContentTitleWith2Columns,
  SlideContentTypes,
} from '../../types';
import { SlideContentFullContent } from '../fullContent';

type SlideContentTitleWith2ColumnsProps = StackProps & ContentTitleWith2Columns;

export const SlideContentTitleWith2Columns = forwardRef<
  SlideContentTitleWith2ColumnsProps,
  'div'
>(
  (
    {
      title,
      column1,
      topRightCorner: topRightCornerContent,
      children,
      ...props
    },
    ref
  ) => {
    const titleWithCorner = topRightCornerContent ? (
      <HStack spacing="1em" alignItems="baseline">
        <H2Heading variant="slide" flex="1">
          {title}
        </H2Heading>
        <H3Heading variant="slide">{topRightCornerContent}</H3Heading>
      </HStack>
    ) : (
      <H2Heading variant="slide">{title}</H2Heading>
    );

    return (
      <SlideContentFullContent
        {...props}
        colormode={ColorMode.light}
        ref={ref}
        type={SlideContentTypes.fullContent}
      >
        <Stack
          width="100%"
          height="100%"
          alignItems="stretch"
          spacing="1em"
          overflow="hidden"
        >
          <StackItem>{titleWithCorner}</StackItem>

          <HStack
            width="100%"
            height="100%"
            alignItems="flex-start"
            gap="2%"
            overflow="hidden"
          >
            <StackItem width="30%" height="100%">
              {column1}
            </StackItem>
            <StackItem width="68%" height="100%">
              {children}
            </StackItem>
          </HStack>
        </Stack>
      </SlideContentFullContent>
    );
  }
);
