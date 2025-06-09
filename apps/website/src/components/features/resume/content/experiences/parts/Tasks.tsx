import { Grid, GridItem, List, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H4Heading } from '@/components/core';
import { type Task } from '@/data';
import { useHeadingSize } from '@/hooks';

export type TasksProps = {
  tasks?: Task[];
};

export const Tasks: React.FC<TasksProps> = function Tasks({ tasks }) {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', {
    keyPrefix: 'experiences.experience',
  });

  if (!tasks || tasks.length === 0) {
    return null;
  }

  return (
    <>
      <H4Heading size={size}>{t('tasks')}</H4Heading>

      <Grid
        gridTemplateColumns={
          tasks.length > 1
            ? {
                md: `1fr 1fr`,
                base: `100%`,
                _print: `1fr 1fr`,
              }
            : `100%`
        }
        gap="6"
      >
        {tasks.map(({ name, subtasks = [] }) => (
          <GridItem key={`task-${name}`} paddingLeft="6">
            <Text fontWeight="700">{name}</Text>

            <List.Root>
              {subtasks.map(({ name }) => (
                <List.Item key={`-subtask-${name}`}>{name}</List.Item>
              ))}
            </List.Root>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
