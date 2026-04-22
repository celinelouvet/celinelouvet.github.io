import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import type { Volunteering } from 'src/data';

import { SubVolunteeringWorks } from './SubVolunteeringWorks';
import { VolunteeringHeader } from './VolunteeringHeader';

export const VolunteeringContent: React.FC<{
  volunteering: Volunteering;
}> = function VolunteeringContent({ volunteering }) {
  return (
    <Stack gap="3">
      <VolunteeringHeader volunteering={volunteering} />
      <Text>{volunteering.description}</Text>

      {volunteering.role ? (
        <SubVolunteeringWorks volunteeringWorks={[volunteering]} />
      ) : null}
      <SubVolunteeringWorks volunteeringWorks={volunteering.subVolunteering} />
    </Stack>
  );
};
