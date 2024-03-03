import { Link, ListIcon, ListItem, Text, Tooltip } from '@chakra-ui/react';
import React, { type FC } from 'react';
import { type IconType } from 'react-icons';

import { capitalize } from '@/lib';

export type LinkListItemProps = {
  icon: IconType;
  ariaLabel: string;
  text: string;
  href: string;
};

export const LinkListItem: FC<LinkListItemProps> = ({
  icon,
  ariaLabel,
  text,
  href,
}) => {
  const capitalizedAriaLabel = capitalize(ariaLabel);

  return (
    <ListItem aria-label={capitalizedAriaLabel}>
      <Tooltip label={capitalizedAriaLabel}>
        <Link href={href} isExternal>
          <ListIcon as={icon} marginTop="-1" verticalAlign="middle" />
          <Text as="span">{text}</Text>
        </Link>
      </Tooltip>
    </ListItem>
  );
};
