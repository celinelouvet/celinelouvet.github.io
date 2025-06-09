import { Grid, GridItem, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H4Heading } from '@/components/core';
import { type Platform, type Stack as XPStack } from '@/data';
import { useHeadingSize } from '@/hooks';

export type StacksProps = {
  stacks?: XPStack[];
};

export const Stacks: React.FC<StacksProps> = function Stacks({ stacks }) {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', {
    keyPrefix: 'experiences.experience',
  });

  if (!stacks || stacks.length === 0) {
    return null;
  }

  return (
    <>
      <H4Heading size={size}>{t('stacks')}</H4Heading>

      <Grid
        gridTemplateColumns={
          stacks.length > 1
            ? {
                md: `1fr 1fr`,
                base: `100%`,
                _print: `1fr 1fr`,
              }
            : `100%`
        }
        gap="6"
      >
        {stacks.map(({ type, technos = [] }) => (
          <GridItem key={`stack-${type}`} paddingLeft="6">
            {type ? (
              <Text fontWeight="700" width="10em">
                {type}
              </Text>
            ) : null}

            <Text flex="1">{buildTechnos(technos)}</Text>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

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
