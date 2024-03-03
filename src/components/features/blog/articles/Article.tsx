import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FC, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import {
  BlogBreadcrumb,
  DateText,
  H2Heading,
  H3Heading,
  InternalLink,
} from '@/components/core';

type ImageProps = {
  src: string;
  alt: string;
};
type ArticleContentProps = {
  title: string;
  when: string;
  children: ReactNode;
};

type ArticleSummaryProps = ArticleContentProps & {
  link: string;
  image?: ImageProps;
};

const ArticleImage: FC<Pick<ArticleSummaryProps, 'image'>> = ({ image }) => {
  if (!image) {
    return null;
  }

  return (
    <Center width={{ base: '100%', lg: 200 }}>
      <Image
        maxW={{ base: '100%', md: 200 }}
        objectFit="cover"
        src={image.src}
        alt={image.alt}
        loading="lazy"
      />
    </Center>
  );
};

export const ArticleSummary: FC<ArticleSummaryProps> = ({
  children,
  image,
  link,
  title,
  when,
}) => {
  const { t } = useTranslation('blog');
  return (
    <LinkBox as="article">
      <Card size="sm" variant="filled">
        <CardHeader>
          <LinkOverlay as={NextLink} href={link}>
            <Flex gap="2" alignItems="baseline">
              <H3Heading>{title}</H3Heading>
              <DateText when={when} dateFormat="DD MMM YYYY" />
            </Flex>
          </LinkOverlay>
        </CardHeader>
        <CardBody>
          <Flex gap="6" direction={{ base: 'column', lg: 'row' }}>
            {children}
            <ArticleImage image={image} />
          </Flex>
        </CardBody>
        <CardFooter>
          <InternalLink href={link}>{t('readMore')}</InternalLink>
        </CardFooter>
      </Card>
    </LinkBox>
  );
};

export const ArticleContent: FC<ArticleContentProps> = ({
  title,
  when,
  children,
}) => {
  return (
    <Stack spacing="6">
      <BlogBreadcrumb title={title} />

      <Stack spacing="1">
        <Flex gap="2" alignItems="baseline">
          <H2Heading>{title}</H2Heading>
          <DateText when={when} dateFormat="DD MMM YYYY" />
        </Flex>
        <Text as="em">Par Céline Louvet</Text>
      </Stack>
      <Stack spacing="6">{children}</Stack>
    </Stack>
  );
};
