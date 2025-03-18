import {
  List as ChakraList,
  type ListRootProps as ChakraListRootProps,
  type ThemingConfig,
} from '@chakra-ui/react';

import {
  LinkItem,
  type LinkItemProps,
  TextItem,
  type TextItemProps,
} from './components';
import { listSlotRecipe } from './List.slot-recipe';

export const listSlotRecipes = {
  list: listSlotRecipe,
} as ThemingConfig['slotRecipes'];

export type ListParts = typeof ChakraList & {
  TextItem: typeof TextItem;
  LinkItem: typeof LinkItem;
};

export type ListProps = ChakraListRootProps & LinkItemProps & TextItemProps;

export const List = { ...ChakraList } as ListParts;

List.TextItem = TextItem;
List.LinkItem = LinkItem;
