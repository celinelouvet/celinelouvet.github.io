import {
  Center,
  Stack,
  type SystemStyleObject,
  useColorModeValue,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { Picture, pictureInPx } from '@/components/media';
import { type Resume } from '@/data';

import { Infos, Remotes, Skills, Socials } from '../parts';

type SummaryProps = {
  resume: Resume;
};

const slideIn = -pictureInPx * 0.5;

export const Summary: FC<SummaryProps> = ({ resume }) => {
  const bgColor = useColorModeValue('brand.900', 'brand.200');

  return (
    <Stack bgColor={bgColor} __css={summaryStyle} spacing={6}>
      <Center marginTop={`${slideIn}px`}>
        <Picture size="lg" />
      </Center>
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
