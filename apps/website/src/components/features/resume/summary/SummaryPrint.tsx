import { Grid } from '@chakra-ui/react';
import * as React from 'react';

import { Infos, Remotes, Skills, Socials } from '../parts';
import { type SummaryProps } from './Summary';

export const SummaryPrint: React.FC<SummaryProps> = function SummaryPrint({
  resume,
  ...props
}) {
  return (
    <Grid
      backgroundColor="brand.900"
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
