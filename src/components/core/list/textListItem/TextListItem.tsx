import { ListIcon, ListItem, Text, Tooltip } from '@chakra-ui/react';
import React, { type FC } from 'react';
import { type IconType } from 'react-icons';

import { capitalize } from '@/lib';

export type TextListItemProps = {
  icon: IconType;
  ariaLabel: string;
  text: string;
};
export const TextListItem: FC<TextListItemProps> = ({
  icon,
  ariaLabel,
  text,
}) => {
  const capitalizedAriaLabel = capitalize(ariaLabel);

  return (
    <ListItem aria-label={capitalizedAriaLabel}>
      <Tooltip label={capitalizedAriaLabel}>
        <Text as="span">
          <ListIcon as={icon} marginTop="-1" verticalAlign="middle" />
          {text}
        </Text>
      </Tooltip>
    </ListItem>
  );
};
