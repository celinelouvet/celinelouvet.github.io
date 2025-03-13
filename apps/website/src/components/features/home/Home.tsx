import { Flex, Grid, Stack, useToken } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';

import { Biography } from './biography';
import { Podcasts } from './podcasts';
import { Socials } from './socials';
import { Summary } from './summary';
import { Talks } from './talks';

type HomeProps = {
  resume: Resume;
};

export const Home: React.FC<HomeProps> = ({ resume }) => {
  const [summaryWidth] = useToken('spacing', ['summary.space']);

  return (
    <Flex>
      <Grid
        gridTemplateColumns={{
          md: `[col1] ${summaryWidth} [line2] auto`,
          base: `100%`,
        }}
        gap="8"
      >
        <Summary resume={resume} />

        <Stack gap="8">
          <Biography biographies={resume.biographies} />
          <Socials socials={resume.socials} />
          <Talks resume={resume} />
          <Podcasts resume={resume} />
        </Stack>
      </Grid>
    </Flex>
  );
};
