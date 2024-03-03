import { Flex, Grid, Stack, useToken } from '@chakra-ui/react';
import { type FC } from 'react';

import { type Resume } from '@/data';

import { Biography } from './Biography';
import { Socials } from './Socials';
import { Summary } from './Summary';
import { Talks } from './Talks';

type HomeProps = {
  resume: Resume;
};

export const Home: FC<HomeProps> = ({ resume }) => {
  const [summaryWidth] = useToken('space', ['summary.space']);

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
        <Stack spacing="8">
          <Biography biographies={resume.biographies} />
          <Socials socials={resume.socials} />
          <Talks resume={resume} />
        </Stack>
      </Grid>
    </Flex>
  );
};
