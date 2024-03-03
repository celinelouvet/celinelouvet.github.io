import { Center, Stack, useColorModeValue } from '@chakra-ui/react';
import { type FC } from 'react';

import { Picture } from '@/components/core';

import { type SummaryProps } from './Summary';
import { Infos, Remotes, Skills, Socials } from '../parts';

export const SummaryAboveLg: FC<SummaryProps> = ({ resume, ...props }) => {
  const bgColor = useColorModeValue('brand.900', 'brand.200');

  return (
    <Stack bgColor={bgColor} spacing="6" padding="6" paddingTop="0" {...props}>
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
