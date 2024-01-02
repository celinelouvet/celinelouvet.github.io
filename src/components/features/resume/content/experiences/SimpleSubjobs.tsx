import { Box, List, ListIcon, ListItem } from '@chakra-ui/react';
import { type FC } from 'react';
import { BsCircleFill } from 'react-icons/bs';

import { type Experience } from '@/data';

import { SimpleExperience } from './SimpleExperience';

export type SimpleSubjobsProps = {
  subjobs?: Experience[];
};

export const SimpleSubjobs: FC<SimpleSubjobsProps> = ({ subjobs }) => {
  if (!subjobs) return null;

  return (
    <List listStyleType={'circle'}>
      {subjobs.map((subjob) => (
        <ListItem
          key={`xp-${subjob.company}-${subjob.from}`}
          display="flex"
          alignItems={'baseline'}
          borderLeftColor="brand.500"
          borderLeftStyle="solid"
          borderLeftWidth="2px"
          paddingLeft={'8'}
          paddingBottom={'4'}
        >
          <ListIcon
            as={BsCircleFill}
            color="brand.500"
            marginLeft={'-2.85em'}
          />
          <Box fontSize="0.9em">
            <SimpleExperience job={subjob} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};
