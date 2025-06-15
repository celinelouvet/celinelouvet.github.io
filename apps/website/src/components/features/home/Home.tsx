import { Flex, Grid, Stack, useToken } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';

import { Biography } from './biography';
import { Conventions } from './conventions';
import { Podcasts } from './podcasts';
import { Socials } from './socials';
import { Summary } from './summary';
import { VolunteeringWorks } from './volunteeringWorks';

type HomeProps = {
  resume: Resume;
};

export const Home: React.FC<HomeProps> = function Home({ resume }) {
  const [summaryWidth] = useToken('spacing', ['summary.space']);

  return (
    <Flex>
      <Grid
        gridTemplateColumns={{
          lg: `[col1] ${summaryWidth} [line2] auto`,
          base: `100%`,
        }}
        gap="8"
      >
        <Summary resume={resume} />

        <Stack gap="8">
          <Biography biographies={resume.biographies} />
          <Socials socials={resume.socials} />
          <Conventions resume={resume} />
          <Podcasts resume={resume} />
          <VolunteeringWorks resume={resume} />
        </Stack>
      </Grid>
    </Flex>
  );
};
