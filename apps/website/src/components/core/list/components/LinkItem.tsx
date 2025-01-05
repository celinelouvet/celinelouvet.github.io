import { List, Text } from '@chakra-ui/react';
import * as React from 'react';
import { type IconType } from 'react-icons';
import { type To } from 'react-router';

import { Link, Tooltip } from '@/components/core';
import { capitalize } from '@/lib';

export type LinkItemProps = {
  icon?: IconType;
  ariaLabel: string;
  text: string;
  href?: string;
  to?: To;
};

export const LinkItem: React.FC<LinkItemProps> = ({
  icon,
  ariaLabel,
  text,
  href,
  to,
}) => {
  const capitalizedAriaLabel = capitalize(ariaLabel);

  const Icon = icon ? (
    <List.Indicator as={icon} marginTop="-1" verticalAlign="middle" />
  ) : null;

  const ExternalLink = href ? (
    <Tooltip label={capitalizedAriaLabel}>
      <Link.External href={href}>
        {Icon}
        <Text as="span">{text}</Text>
      </Link.External>
    </Tooltip>
  ) : null;

  const InternalLink = to ? (
    <Tooltip label={capitalizedAriaLabel}>
      <Link.Internal to={to}>
        {Icon}
        <Text as="span">{text}</Text>
      </Link.Internal>
    </Tooltip>
  ) : null;

  return (
    <List.Item aria-label={capitalizedAriaLabel}>
      {ExternalLink}
      {InternalLink}
    </List.Item>
  );
};
