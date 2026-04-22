import { Box, List } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from 'src/components/core';

export type SkillsProps = {
  skills: string[];
};

export const Skills: React.FC<SkillsProps> = function Skills({ skills }) {
  const { t } = useTranslation('resume', { keyPrefix: 'skills' });

  return (
    <Box>
      <H2Heading>{t('title')}</H2Heading>

      <List.Root gap="1" variant="plain">
        {skills.map((skill, index) => (
          <List.Item key={index}>{skill}</List.Item>
        ))}
      </List.Root>
    </Box>
  );
};
