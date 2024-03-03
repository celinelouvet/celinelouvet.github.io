import { Flex, Stack, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H4Heading } from '@/components/core';
import { type Platform, type Stack as XPStack } from '@/data';
import { useHeadingSize } from '@/hooks';

export type StacksProps = {
  stacks?: XPStack[];
};

const buildTechnos = (technos: (string | Platform)[]) => {
  return technos
    .map((techno: string | Platform) => {
      if (typeof techno === 'string') {
        return techno;
      }
      return `${techno.type} (${techno.technos.join(', ')})`;
    })
    .join(', ');
};

export const Stacks: FC<StacksProps> = ({ stacks }) => {
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

      <Stack paddingLeft="6" spacing="0">
        {stacks.map(({ type, technos }) => (
          <Flex key={`stack-${type}`} direction={{ md: 'row', base: 'column' }}>
            {type ? (
              <Text fontWeight="700" width="120px">
                {type}
              </Text>
            ) : null}
            <Text flex="1">{buildTechnos(technos)}</Text>
          </Flex>
        ))}
      </Stack>
    </>
  );
};
