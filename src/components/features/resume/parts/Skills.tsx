import { Box, List, ListItem } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { useHeadingSize } from '@/hooks';

export type SkillsProps = {
  skills: string[];
};

export const Skills: FC<SkillsProps> = ({ skills }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'skills' });

  return (
    <Box>
      <H2Heading size={size}>{t('title')}</H2Heading>

      <List spacing="1">
        {skills.map((skill, index) => (
          <ListItem key={index}>{skill}</ListItem>
        ))}
      </List>
    </Box>
  );
};
