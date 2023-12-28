import {
  Stack,
  type SystemStyleObject,
  useColorModeValue,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { type SummaryProps } from './Summary';
import { Infos, Remotes, Skills, Socials } from '../parts';

export const SummaryBelowMd: FC<SummaryProps> = ({ resume, ...props }) => {
  const bgColor = useColorModeValue('brand.900', 'brand.200');

  return (
    <Stack bgColor={bgColor} __css={summaryStyle} spacing={6} {...props}>
      <Infos resume={resume} />
      <Remotes remotes={resume.remotes} />
      <Skills skills={resume.skills} />
      <Socials socials={resume.socials} />
    </Stack>
  );
};

const summaryStyle = {
  padding: '6',
  paddingTop: 0,
} as SystemStyleObject;
