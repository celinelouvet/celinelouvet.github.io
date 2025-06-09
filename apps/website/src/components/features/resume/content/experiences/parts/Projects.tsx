import { Flex, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H4Heading } from '@/components/core';
import { type Project } from '@/data';
import { useHeadingSize } from '@/hooks';

export type ProjectsProps = {
  projects?: Project[];
  summarize?: boolean;
};

export const Projects: React.FC<ProjectsProps> = function Projects({
  projects,
  summarize = false,
}) {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', {
    keyPrefix: 'experiences.experience',
  });

  if (!projects) {
    return null;
  }
  const summarizeStyle = summarize ? { display: 'none' } : {};

  return (
    <>
      <H4Heading size={size} _print={summarizeStyle}>
        {t('project', { count: projects.length })}
      </H4Heading>

      <Flex
        paddingLeft="6"
        rowGap="1"
        columnGap="8"
        flexDirection={{ base: 'column', _print: 'row' }}
      >
        {projects.map(({ name, description }) => (
          <Flex
            key={`project-${name}`}
            direction={{ md: 'row', base: 'column' }}
            flex={{ _print: 1, base: 'unset' }}
            columnGap="2"
          >
            <Text fontWeight="700" width="10em">
              {name}
            </Text>
            <Text flex="1">{description}</Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
