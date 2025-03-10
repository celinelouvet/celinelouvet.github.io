import { Center, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { Picture } from '@/components/core';

import { type SummaryProps } from './Summary';
import { Infos, Remotes, Skills, Socials } from '../parts';

export const SummaryAboveLg: React.FC<SummaryProps> = ({
  resume,
  ...props
}) => {
  return (
    <Stack
      backgroundColor={{ base: 'brand.900', _dark: 'brand.200' }}
      gap="6"
      padding="6"
      paddingTop="0"
      {...props}
    >
      <Center marginTop="neg.picture.space.half">
        <Picture size="lg" />
      </Center>
      <Infos resume={resume} />
      <Remotes remotes={resume.remotes} />
      <Skills skills={resume.skills} />
      <Socials socials={resume.socials} />
    </Stack>
  );
};
