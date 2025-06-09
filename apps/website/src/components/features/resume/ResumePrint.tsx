import { Center, Flex, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { Picture } from '@/components/core';
import { type Resume } from '@/data';

import { Content } from './content';
import { MainTitle } from './MainTitle';
import { Summary } from './summary';

type ResumePrintProps = {
  resume: Resume;
};

export const ResumePrint: React.FC<ResumePrintProps> = function ResumePrint({
  resume,
}) {
  return (
    <Stack gap="0">
      <Flex bgGradient="brand" padding="6" alignItems="center">
        <Center width="summary.size.half">
          <Picture size="md" />
        </Center>
        <MainTitle resume={resume} />
      </Flex>

      <Summary resume={resume} />
      <Content resume={resume} />
      <Flex
        as="footer"
        bgGradient="brand"
        padding="6"
        alignItems="center"
        justifyContent="center"
      ></Flex>
    </Stack>
  );
};
