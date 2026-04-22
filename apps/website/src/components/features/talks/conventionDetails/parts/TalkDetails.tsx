import { Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react';
import type * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'src/components/core';
import type { TalkWithSubject } from 'src/data';

import { TalkLink } from './TalkLink';
import { TalkPicture } from './TalkPicture';
import { TopicText } from './TopicText';

export const TalkDetails: React.FC<{ talk: TalkWithSubject }> =
  function TalkDetails({ talk }) {
    const { t } = useTranslation('talks', { keyPrefix: 'talk' });

    const link = `/talks/${talk.subjectId}`;

    return (
      <Flex
        width="100%"
        direction={{ base: 'column', lg: 'row' }}
        gap="4"
        marginLeft={{ base: '0', lg: '6' }}
        paddingX={{ base: '4', lg: '6' }}
        paddingY="2"
        borderLeft="3px solid"
        borderColor={{ base: 'brand.700', _dark: 'brand.600' }}
        borderLeftRadius="md"
      >
        <Stack gap="1">
          <TopicText {...talk} />
          <Text>{talk.summary}</Text>

          <HStack alignItems="baseline" gap="8">
            {talk.descriptions && talk.descriptions.length > 0 ? (
              <Link.Internal to={link}>{t('seeAbstract')}</Link.Internal>
            ) : null}

            <TalkLink type="video" links={talk.links} />
            <TalkLink type="audio" links={talk.links} />
            <TalkLink type="slides" links={talk.links} />
          </HStack>
        </Stack>
        <Spacer />
        <TalkPicture {...talk} />
      </Flex>
    );
  };
