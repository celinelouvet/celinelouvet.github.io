import { Center, Flex, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { Picture } from '@/components/core';
import { type Resume } from '@/data';

import { Content } from './Content';
import { MainTitle } from './MainTitle';
import { Summary } from './Summary';

type ResumeContentProps = {
  resume: Resume;
};

export const ResumeContent: React.FC<ResumeContentProps> =
  function ResumeContent({ resume }) {
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
      </Stack>
    );
  };
