import { Box, List } from '@chakra-ui/react';
import * as React from 'react';
import { BsCircleFill } from 'react-icons/bs';

import { type Experience } from '@/data';

import { ExperienceDetails } from './ExperienceDetails';

export type SubjobsProps = {
  subjobs?: Experience[];
};

export const Subjobs: React.FC<SubjobsProps> = ({ subjobs }) => {
  if (!subjobs) return null;

  return (
    <List.Root listStyleType="circle">
      {subjobs.map((subjob) => (
        <List.Item
          key={`xp-${subjob.company}-${subjob.from}`}
          display="flex"
          alignItems="baseline"
          borderLeftColor="brand.500"
          borderLeftStyle="solid"
          borderLeftWidth="2px"
          paddingLeft="8"
          paddingBottom="4"
        >
          <List.Indicator
            as={BsCircleFill}
            color="brand.500"
            marginLeft="-41px"
          />
          <Box fontSize="0.9em">
            <ExperienceDetails job={subjob} />
          </Box>
        </List.Item>
      ))}
    </List.Root>
  );
};
