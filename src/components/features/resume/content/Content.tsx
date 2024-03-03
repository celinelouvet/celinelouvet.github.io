import { type StackProps as ChakraStackProps, Stack } from '@chakra-ui/react';
import { type FC } from 'react';

import { type Resume } from '@/data';

import { Certifications } from './Certifications';
import { Educations } from './Educations';
import { Experiences } from './experiences';
import { Talks } from './Talks';
import { Trainings } from './Trainings';
import { Description, PdfDownloader } from '../parts';

type ContentProps = Omit<ChakraStackProps, 'children'> & {
  resume: Resume;
};

export const Content: FC<ContentProps> = ({ resume }) => (
  <Stack spacing="4" padding="6">
    <Stack direction="row-reverse" spacing="6" alignItems="center">
      <PdfDownloader />
    </Stack>
    <Description descriptions={resume.descriptions} />
    <Experiences experiences={resume.experiences} />
    <Talks resume={resume} />
    <Educations educations={resume.educations} />
    <Trainings trainings={resume.trainings} />
    <Certifications certifications={resume.certifications} />
  </Stack>
);
