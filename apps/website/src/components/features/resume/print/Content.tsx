import { type StackProps as ChakraStackProps, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';

import {
  Certifications,
  Description,
  Educations,
  Experiences,
  Podcasts,
  Talks,
  Trainings,
} from '../parts';

type ContentProps = Omit<ChakraStackProps, 'children'> & {
  resume: Resume;
};

export const Content: React.FC<ContentProps> = function Content({ resume }) {
  return (
    <Stack gap="8" padding="6">
      <Description descriptions={resume.descriptions} />
      <Experiences experiences={resume.experiences} />
      <Talks resume={resume} />
      <Podcasts resume={resume} />
      <Educations educations={resume.educations} />
      <Trainings trainings={resume.trainings} />
      <Certifications certifications={resume.certifications} />
    </Stack>
  );
};
