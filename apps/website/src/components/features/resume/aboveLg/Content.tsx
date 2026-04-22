import {
  type StackProps as ChakraStackProps,
  HStack,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from 'src/data';

import {
  Certifications,
  Description,
  Educations,
  Experiences,
  PdfDownloader,
  Podcasts,
  Talks,
  Trainings,
  VolunteeringWorks,
} from '../parts';

type ContentProps = Omit<ChakraStackProps, 'children'> & {
  resume: Resume;
};

export const Content: React.FC<ContentProps> = function Content({ resume }) {
  return (
    <Stack gap="8" padding="6">
      <HStack gap="6" alignItems="center" _print={{ display: 'none' }}>
        <PdfDownloader />
      </HStack>

      <Description descriptions={resume.descriptions} />
      <Experiences experiences={resume.experiences} />
      <Talks resume={resume} />
      <Podcasts resume={resume} />
      <Educations educations={resume.educations} />
      <Trainings trainings={resume.trainings} />
      <Certifications certifications={resume.certifications} />
      <VolunteeringWorks volunteeringWorks={resume.volunteering} />
    </Stack>
  );
};
