import { List, type ListRootProps } from '@chakra-ui/react';

export type ProgressiveItem = {
  text: string;
  shown?: boolean;
};

type ProgressiveList = {
  items: ProgressiveItem[];
  type?: 'numbered' | 'bullet';
} & ListRootProps;

export function ProgressiveList(props: ProgressiveList) {
  const { items, type = 'bullet', ...style } = props;

  const as = type === 'numbered' ? 'ol' : 'ul';

  return (
    <List.Root variant="slide" as={as} {...style}>
      {items.map((item, index) => {
        const { text, shown = true } = item;
        return (
          <List.Item key={index} opacity={shown ? 1 : 0}>
            {text}
          </List.Item>
        );
      })}
    </List.Root>
  );
}
