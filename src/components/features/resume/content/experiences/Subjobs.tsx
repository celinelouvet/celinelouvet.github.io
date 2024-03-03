import { Box, List, ListIcon, ListItem } from '@chakra-ui/react';
import { type FC } from 'react';
import { BsCircleFill } from 'react-icons/bs';

import { type Experience } from '@/data';

import { ExperienceDetails } from './ExperienceDetails';

export type SubjobsProps = {
  subjobs?: Experience[];
};

export const Subjobs: FC<SubjobsProps> = ({ subjobs }) => {
  if (!subjobs) return null;

  return (
    <List listStyleType="circle">
      {subjobs.map((subjob) => (
        <ListItem
          key={`xp-${subjob.company}-${subjob.from}`}
          display="flex"
          alignItems="baseline"
          borderLeftColor="brand.500"
          borderLeftStyle="solid"
          borderLeftWidth="2px"
          paddingLeft="8"
          paddingBottom="4"
        >
          <ListIcon as={BsCircleFill} color="brand.500" marginLeft="-41px" />
          <Box fontSize="0.9em">
            <ExperienceDetails job={subjob} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};
