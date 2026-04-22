import { Card, Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { type Podcast } from 'src/data';

import {
  AuthorText,
  DescriptionText,
  Header,
  PodcastLink,
  PodcastPicture,
  TitleText,
} from './parts';

export type PodcastDetailsProps = {
  podcast: Podcast;
};

export const PodcastDetails: React.FC<PodcastDetailsProps> =
  function PodcastDetails({ podcast }) {
    const { author, title, description, links } = podcast;

    return (
      <Card.Root size="sm" variant="subtle">
        <Card.Header>
          <Header podcast={podcast} />
        </Card.Header>

        <Card.Body>
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
              <TitleText title={title} />
              <AuthorText author={author} />
              <Text>
                <DescriptionText description={description} />
              </Text>

              <HStack gap="8">
                <PodcastLink type="video" links={links} />
                <PodcastLink type="audio" links={links} />
              </HStack>
            </Stack>
            <Spacer />
            <PodcastPicture podcast={podcast} />
          </Flex>
        </Card.Body>
      </Card.Root>
    );
  };
