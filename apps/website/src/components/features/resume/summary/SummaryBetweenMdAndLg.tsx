import { Grid } from '@chakra-ui/react';
import * as React from 'react';

import { Infos, Remotes, Skills, Socials } from '../parts';
import { type SummaryProps } from './Summary';

export const SummaryBetweenMdAndLg: React.FC<SummaryProps> =
  function SummaryBetweenMdAndLg({ resume, ...props }) {
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
