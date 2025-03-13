import { Button, type ButtonProps } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronContract, BsChevronExpand } from 'react-icons/bs';

type CollapsibleTriggerVariantProps = {
  open: boolean;
  onOpenChange: (newState: boolean) => void;
};

export interface CollapsibleTriggerProps
  extends ButtonProps,
    React.PropsWithChildren<CollapsibleTriggerVariantProps> {}

export const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  CollapsibleTriggerProps
>(function CollapsibleTrigger(props, ref) {
  const { open, onOpenChange, ...restProps } = props;

  const { t } = useTranslation('components', {
    keyPrefix: 'moreLessCollapsible',
  });

  const text = open ? t('less') : t('more');
  const icon = open ? <BsChevronContract /> : <BsChevronExpand />;

  return (
    <Button
      onClick={() => onOpenChange(!open)}
      variant="outline"
      size="sm"
      {...restProps}
      ref={ref}
    >
      {text} {icon}
    </Button>
  );
});
