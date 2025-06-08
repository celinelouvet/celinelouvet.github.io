export type ColorMode = 'light' | 'dark' | 'system';

export const modes: ColorMode[] = ['light', 'dark', 'system'];

export function isColorMode(value: string): value is ColorMode {
  return modes.includes(value as ColorMode);
}
