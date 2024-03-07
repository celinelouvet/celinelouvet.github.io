import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { sections } from '@/data';
import { useActiveSection } from '@/hooks';

type HeaderDrawerProps = {
  fullname: string;
  isOpen: boolean;
  onClose: () => void;
};

export const HeaderDrawer: FC<HeaderDrawerProps> = ({
  fullname,
  isOpen,
  onClose,
}) => {
  const { slug } = useActiveSection();
  const { t } = useTranslation('header', { keyPrefix: 'nav' });

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton size="xl" />
        <DrawerHeader>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="3xl" flexGrow={1} as="span">
              {fullname}
            </Text>
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Stack gap="2">
            {sections.map((section) => (
              <Button
                isActive={section.slug === slug}
                key={section.slug}
                as={NextLink}
                href={section.href}
                onClick={onClose}
                variant="drawer"
                size="2xl"
              >
                {t(section.slug)}
              </Button>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
