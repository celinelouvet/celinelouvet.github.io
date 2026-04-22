import { Flex, Grid, Stack, type StackProps, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H4Heading } from 'src/components/core';
import { type Experience, type Platform } from 'src/data';

export interface StacksProps
  extends
    Omit<StackProps, 'children'>,
    React.PropsWithChildren<{
      job: Experience;
    }> {}

export const Stacks = React.forwardRef<HTMLDivElement, StacksProps>(
  function Tasks(props, ref) {
    const { job, ...restProps } = props;

    const { t } = useTranslation('resume', {
      keyPrefix: 'experiences.experience',
    });

    const { stacks, summarize } = job;

    if (!stacks || stacks.length === 0 || summarize) {
      return null;
    }

    const length = stacks.length;

    const templateColumns =
      length === 1
        ? '1fr'
        : {
            base: '100%',
            lg: '1fr',
            _print: '1fr',
          };

    return (
      <Stack gap="2" ref={ref} {...restProps}>
        <H4Heading>{t('stacks')}</H4Heading>

        <Grid
          gridTemplateColumns={templateColumns}
          columnGap="8"
          paddingLeft="6"
        >
          {stacks.map(({ type, technos = [] }, index) => (
            <Flex
              key={`stack-${type}`}
              columnGap="2"
              direction={{
                base: 'column',
                md: 'row',
                _print: 'row',
              }}
              _print={{
                flex: 1,
                columnSpan:
                  length % 2 === 1 && index === length - 1 ? '2' : '1',
              }}
            >
              {type ? (
                <Text fontWeight="700" width="brand.1000">
                  {type}
                </Text>
              ) : null}
              <Text flex="1">{buildTechnos(technos)}</Text>
            </Flex>
          ))}
        </Grid>
      </Stack>
    );
  },
);

function buildTechnos(technos: (string | Platform)[]) {
  return technos
    .map((techno: string | Platform) => {
      if (typeof techno === 'string') {
        return techno;
      }
      return `${techno.type} (${techno.technos.join(', ')})`;
    })
    .join(', ');
}
