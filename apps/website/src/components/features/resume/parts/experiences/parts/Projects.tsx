import { Flex, Grid, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H4Heading } from '@/components/core';
import { type Project } from '@/data';

export type ProjectsProps = {
  projects?: Project[];
  summarize?: boolean;
};

export const Projects: React.FC<ProjectsProps> = function Projects({
  projects,
  summarize = false,
}) {
  const { t } = useTranslation('resume', {
    keyPrefix: 'experiences.experience',
  });

  if (!projects) {
    return null;
  }
  const summarizeStyle = summarize ? { display: 'none' } : {};

  const templateColumns =
    projects.length === 1
      ? '1fr'
      : {
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: '1fr',
          _print: '1fr',
        };

  return (
    <Stack gap="2">
      <H4Heading _print={summarizeStyle}>
        {t('project', { count: projects.length })}
      </H4Heading>

      <Grid paddingLeft="6" gridTemplateColumns={templateColumns} columnGap="8">
        {projects.map(({ name, description }) => (
          <Flex
            key={`project-${name}`}
            direction={{ _print: 'row', base: 'column', lg: 'row' }}
            flex={{ _print: 1, base: 'unset' }}
            columnGap="2"
          >
            <Text fontWeight="700" width="brand.1000">
              {name}
            </Text>
            <Text flex="1">{description}</Text>
          </Flex>
        ))}
      </Grid>
    </Stack>
  );
};
