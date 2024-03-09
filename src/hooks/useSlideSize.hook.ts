import { type WindowSize } from './types';

const defaultFontSize = 18;
const defaultContentHeight = 450;
const ratio = 16 / 9;

export const useSlideSize = ({ height, width }: WindowSize) => {
  const windowRatio = width / height;

  if (windowRatio > ratio) {
    const fontSize = (defaultFontSize * height) / defaultContentHeight;
    const newWidth = height * ratio;

    return {
      height,
      width: newWidth,
      fontSize,
      lineHeight: '2em',
    };
  } else {
    const newHeight = width / ratio;
    const fontSize = (defaultFontSize * newHeight) / defaultContentHeight;

    return {
      width,
      height: newHeight,
      fontSize,
      lineHeight: '2em',
    };
  }
};
