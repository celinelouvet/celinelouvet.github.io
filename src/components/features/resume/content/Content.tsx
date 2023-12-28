import { type StackProps as ChakraStackProps, Stack } from '@chakra-ui/react';
import { type FC, useState } from 'react';

import { type Resume } from '@/data';

import { Educations } from './Educations';
import { Experiences } from './experiences';
import { Talks } from './Talks';
import { Trainings } from './Trainings';
import { Description, DetailsSwitcher, PdfDownloader } from '../parts';

type ContentProps = Omit<ChakraStackProps, 'children'> & {
  resume: Resume;
};

export const Content: FC<ContentProps> = ({ resume }) => {
  const [shown, showDetails] = useState(false);

  return (
    <Stack spacing={4} padding={6}>
      <Stack direction={'row-reverse'} spacing={6} alignItems={'center'}>
        <DetailsSwitcher showDetails={showDetails} />
        <PdfDownloader />
      </Stack>
      <Description descriptions={resume.descriptions} />
      <Experiences experiences={resume.experiences} full={shown} />
      <Talks resume={resume} />
      <Educations educations={resume.educations} />
      <Trainings trainings={resume.trainings} />
    </Stack>
  );
};
