import { Stack } from '@chakra-ui/react';
import * as React from 'react';

import { type SummaryProps } from './Summary';
import { Infos, Remotes, Skills, Socials } from '../parts';

export const SummaryBelowMd: React.FC<SummaryProps> = ({
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
      <Infos resume={resume} />
      <Remotes remotes={resume.remotes} />
      <Skills skills={resume.skills} />
      <Socials socials={resume.socials} />
    </Stack>
  );
};
