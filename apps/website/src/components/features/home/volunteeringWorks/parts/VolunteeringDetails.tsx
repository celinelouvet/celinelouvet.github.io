import { Box, Card, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import type * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H4Heading, Link } from '@/components/core';
import type { Volunteering } from '@/data';
import { useHeadingSize } from '@/hooks';

import { Header } from './Header';
import { OrganizationPicture } from './OrganizationPicture';

export const VolunteeringDetails: React.FC<{ volunteering: Volunteering }> =
  function VolunteeringDetails({ volunteering }) {
    const { t } = useTranslation('home', { keyPrefix: 'volunteering' });
    const size = useHeadingSize();

    const tasks = (volunteering.tasks ?? []).map(({ name }) => name).join(', ');

    return (
      <Card.Root size="sm" variant="subtle">
        <Card.Header>
          <Header volunteering={volunteering} />
        </Card.Header>

        <Card.Body>
          <Flex width="100%" direction={{ base: 'column', lg: 'row' }} gap="4">
            <Stack gap="4">
              <Text>{volunteering.description}</Text>

              <Stack
                width="100%"
                gap="4"
                marginLeft={{ base: '0', lg: '6' }}
                paddingX={{ base: '4', lg: '6' }}
                paddingY="2"
                borderLeft="3px solid"
                borderColor={{ base: 'brand.700', _dark: 'brand.600' }}
                borderLeftRadius="md"
              >
                <H4Heading size={size}>{volunteering.role}</H4Heading>
                {tasks.length > 0 ? <Text>{tasks}</Text> : null}
                <Spacer />
                <Box>
                  <Link.External href={volunteering.site}>
                    {t('seeSite')}
                  </Link.External>
                </Box>
              </Stack>
            </Stack>

            <Spacer />
            <OrganizationPicture {...volunteering} />
          </Flex>
        </Card.Body>
      </Card.Root>
    );
  };
