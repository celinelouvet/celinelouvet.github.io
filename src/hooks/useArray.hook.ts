import { type ReactI18NextChildren } from './types';

export const useArray = (
  items: ReactI18NextChildren | Iterable<ReactI18NextChildren>
) => {
  return Array.isArray(items) ? items : [items];
};
