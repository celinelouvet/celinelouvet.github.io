import type { Tile } from './Tiles';

const allColors = ['brand.500', 'brand.400', 'brand.300', 'brand.200'];

export const getColors = (data: Tile[]) => {
  const dataWithoutHighlighted = data.filter((item) => !item.highlighted);

  const colors = [...allColors]
    .slice(0, dataWithoutHighlighted.length)
    .reverse();

  data.forEach((item, index) => {
    if (item.highlighted) {
      colors.splice(index, 0, 'brand.orange');
    }
  });

  return colors;
};
