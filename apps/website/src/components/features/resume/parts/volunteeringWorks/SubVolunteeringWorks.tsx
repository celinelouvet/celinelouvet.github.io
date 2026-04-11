import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { type SubVolunteering, type Volunteering } from '@/data';

import { SubVolunteeringContent } from './SubVolunteeringContent';

export type SubVolunteeringWorksProps = {
  volunteeringWorks?: (SubVolunteering | Volunteering)[];
};

export const SubVolunteeringWorks: React.FC<SubVolunteeringWorksProps> =
  function SubVolunteeringWorks({ volunteeringWorks }) {
    if (!volunteeringWorks || volunteeringWorks.length === 0) {
      return null;
    }

    return (
      <>
        <Box display={{ base: 'none', _print: 'block' }}>
          <Stack gap="6">
            {volunteeringWorks.map((volunteeringWork, index) => (
              <Box
                key={index}
                width="100%"
                paddingX="6"
                paddingY="2"
                borderLeft="5px solid"
                borderColor="brand.600"
                borderRadius="md"
                backgroundColor="brand.900"
                _print={{ breakInside: 'avoid' }}
              >
                <SubVolunteeringContent volunteering={volunteeringWork} />
              </Box>
            ))}
          </Stack>
        </Box>

        <Box display={{ _print: 'none' }}>
          <Stack gap="6">
            {volunteeringWorks.map((volunteeringWork, index) => (
              <Stack
                key={index}
                width="100%"
                gap="4"
                paddingX={{ base: '4', lg: '6' }}
                paddingY="2"
                borderLeft="5px solid"
                borderColor={{ base: 'brand.700', _dark: 'brand.600' }}
                borderLeftRadius="md"
              >
                <SubVolunteeringContent volunteering={volunteeringWork} />
              </Stack>
            ))}
          </Stack>
        </Box>
      </>
    );
  };
