import { Text } from '@chakra-ui/react';
import { type FC } from 'react';

import { type Resume } from '@/data';

type ContentProps = {
  resume: Resume;
};

export const Content: FC<ContentProps> = ({ resume }) => {
  return <Text>Content</Text>;
};
