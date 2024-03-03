import { Grid, useColorModeValue } from '@chakra-ui/react';
import { type FC } from 'react';

import { type SummaryProps } from './Summary';
import { Infos, Remotes, Skills, Socials } from '../parts';

export const SummaryBetweenMdAndLg: FC<SummaryProps> = ({
  resume,
  ...props
}) => {
  const bgColor = useColorModeValue('brand.900', 'brand.200');

  return (
    <Grid
      bgColor={bgColor}
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
