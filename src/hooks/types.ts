import { type TypeOptions } from 'i18next';

type ObjectOrNever = TypeOptions['allowObjectInHTMLChildren'] extends true
  ? Record<string, unknown>
  : never;

export type ReactI18NextChildren = React.ReactNode | ObjectOrNever;
