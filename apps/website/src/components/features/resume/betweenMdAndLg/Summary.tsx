import { type StackProps as ChakraStackProps, Grid } from '@chakra-ui/react';
import * as React from 'react';

import type { Resume } from 'src/data';

import { Infos, Remotes, Skills, Socials } from '../parts';

export type SummaryProps = Omit<ChakraStackProps, 'children'> & {
  resume: Resume;
};

export const Summary: React.FC<SummaryProps> = function Summary({
  resume,
  ...props
}) {
  return (
    <Grid
      backgroundColor={{ base: 'brand.900', _dark: 'brand.200' }}
      templateColumns="1fr 1fr"
      gap="6"
      padding="6"
      {...props}
    >
      <Infos resume={resume} />
      <Skills skills={resume.skills} />
      <Socials socials={resume.socials} />
      <Remotes remotes={resume.remotes} />
    </Grid>
  );
};
