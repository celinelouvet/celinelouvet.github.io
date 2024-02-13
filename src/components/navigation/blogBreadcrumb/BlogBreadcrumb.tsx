import { breadcrumbAnatomy } from '@chakra-ui/anatomy';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  type StyleFunctionProps,
  createMultiStyleConfigHelpers,
  createStylesContext,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import NextLink from 'next/link';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronRight } from 'react-icons/bs';

const [StylesProvider] = createStylesContext('BlogBreadcrumb');

export type BlogBreadcrumbProps = { title: string; size?: 'sm' | 'md' };

export const BlogBreadcrumb: FC<BlogBreadcrumbProps> = ({
  title,
  size,
  ...props
}) => {
  const styles = useMultiStyleConfig('BlogBreadcrumb', {
    ...breadcrumbAnatomy.keys,
    size,
  });
  const { t } = useTranslation('components');

  return (
    <StylesProvider value={styles}>
      <Breadcrumb
        separator={<BsChevronRight />}
        __css={styles.container}
        {...props}
      >
        <BreadcrumbItem __css={styles.item}>
          <BreadcrumbLink as={NextLink} href="/blog" __css={styles.link}>
            {t('blog')}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage __css={styles.link}>
          <BreadcrumbLink>{title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </StylesProvider>
  );
};

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);

const baseStyle = (props: StyleFunctionProps) =>
  definePartsStyle({
    container: {
      backgroundColor: mode('brand.800', 'brand.300')(props),
      paddingTop: 1,
      paddingBottom: 1,
      paddingLeft: 2,
      paddingRight: 2,
      borderRadius: 'md',
    },
    separator: {
      color: mode('gray.500', 'gray.400')(props),
      fontSize: '0.6em',
    },
    link: {
      ['&:not([aria-current=page])']: {
        textDecoration: 'underline',
        color: mode('brand.400', 'brand.600')(props),
        fontWeight: '700',
        fontFamily: 'Nunito',
        fontSize: 'sm',

        _hover: {
          color: mode('brand.500', 'brand.700')(props),
          fontWeight: '700',
        },
      },
    },
  });

const sizesStyle = {
  md: {
    separator: {
      fontSize: '0.8em',
    },
    link: {
      ['&:not([aria-current=page])']: {
        fontSize: 'md',
      },
    },
  },
  sm: {
    separator: {
      fontSize: '0.6em',
    },
    link: {
      ['&:not([aria-current=page])']: {
        fontSize: 'sm',
      },
    },
  },
};

export const blogBreadcrumbStyles = defineMultiStyleConfig({
  baseStyle,
  sizes: sizesStyle,
  defaultProps: {
    size: 'md',
  },
});
