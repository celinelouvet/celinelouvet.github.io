import { type StackProps as ChakraStackProps, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';

import { Certifications } from './certifications';
import { Educations } from './educations';
import { Experiences } from './experiences';
import { Podcasts } from './podcasts';
import { Talks } from './talks';
import { Trainings } from './trainings';
import { Description, PdfDownloader } from '../parts';

type ContentProps = Omit<ChakraStackProps, 'children'> & {
  resume: Resume;
};

export const Content: React.FC<ContentProps> = ({ resume }) => (
  <Stack gap="8" padding="6">
    <Stack direction="row-reverse" gap="6" alignItems="center">
      <PdfDownloader />
    </Stack>
    <Description descriptions={resume.descriptions} />
    <Experiences experiences={resume.experiences} />
    <Talks resume={resume} />
    <Podcasts resume={resume} />
    <Educations educations={resume.educations} />
    <Trainings trainings={resume.trainings} />
    <Certifications certifications={resume.certifications} />
  </Stack>
);
