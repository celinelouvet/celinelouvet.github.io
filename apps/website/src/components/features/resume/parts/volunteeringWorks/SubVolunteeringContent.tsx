import { Stack, chakra } from '@chakra-ui/react';
import * as React from 'react';

import type { SubVolunteering } from '@/data';

import { SubVolunteeringHeader } from './SubVolunteeringHeader';

export const SubVolunteeringContent: React.FC<{
  volunteering: SubVolunteering;
}> = function SubVolunteeringContent({ volunteering }) {
  const tasks = (volunteering.tasks ?? []).map(({ name }) => name).join(', ');
  return (
    <Stack gap="3">
      <SubVolunteeringHeader volunteering={volunteering} />
      <chakra.span>{tasks}</chakra.span>
    </Stack>
  );
};
