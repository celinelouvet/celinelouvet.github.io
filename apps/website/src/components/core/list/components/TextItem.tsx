import { List, Text } from '@chakra-ui/react';
import * as React from 'react';
import { type IconType } from 'react-icons';

import { Tooltip } from '@/components/core';
import { capitalize } from '@/lib';

export type TextItemProps = {
  icon?: IconType;
  ariaLabel: string;
  text: string;
};

export const TextItem: React.FC<TextItemProps> = ({
  icon,
  ariaLabel,
  text,
}) => {
  const capitalizedAriaLabel = capitalize(ariaLabel);

  const Icon = icon ? (
    <List.Indicator as={icon} marginTop="-1" verticalAlign="middle" />
  ) : null;

  return (
    <List.Item aria-label={capitalizedAriaLabel}>
      <Tooltip label={capitalizedAriaLabel}>
        <Text as="span">
          {Icon}
          {text}
        </Text>
      </Tooltip>
    </List.Item>
  );
};
