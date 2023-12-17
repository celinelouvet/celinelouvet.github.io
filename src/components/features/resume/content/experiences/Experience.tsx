import { type FC } from 'react';

import { type Experience } from '@/data';

import { FullExperience } from './FullExperience';
import { SimpleExperience } from './SimpleExperience';

export type ExperienceComponentProps = {
  job: Experience;
  full?: boolean;
};

export const ExperienceComponent: FC<ExperienceComponentProps> = ({
  job,
  full = false,
}) => {
  if (full) {
    return <FullExperience job={job} />;
  }

  return <SimpleExperience job={job} />;
};
