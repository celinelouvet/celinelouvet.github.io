export const capitalize = (str: string) =>
  str.length > 0 ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : '';
