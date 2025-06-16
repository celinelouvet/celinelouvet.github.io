import { type WindowSize } from './types';

const defaultFontSize = 18;
const defaultContentHeight = 450;
const ratio = 16 / 9;

const defaultConfig = {
  lineHeight: 'brand.200',
  fontSize: defaultFontSize,
  height: defaultContentHeight,
  width: defaultContentHeight * ratio,
  marginLeft: 0,
  marginTop: 0,
};

export const useSlideSize = (windowSize: WindowSize) =>
  windowSize.ratio > ratio
    ? screenWiderThanSlide(windowSize)
    : screenHigherThanSlide(windowSize);

const screenWiderThanSlide = ({ height, width }: WindowSize) => {
  const fontSize = (defaultFontSize * height) / defaultContentHeight;
  const newWidth = height * ratio;
  const marginLeft = (width - newWidth) / 2;

  return {
    ...defaultConfig,

    height: Math.floor(height),
    width: Math.floor(newWidth),
    fontSize: Math.floor(fontSize),
    marginLeft: Math.floor(marginLeft),
  };
};

const screenHigherThanSlide = ({ height, width }: WindowSize) => {
  const newHeight = width / ratio;
  const fontSize = (defaultFontSize * newHeight) / defaultContentHeight;
  const marginTop = (height - newHeight) / 2;

  return {
    ...defaultConfig,

    width: Math.floor(width),
    height: Math.floor(newHeight),
    fontSize: Math.floor(fontSize),
    marginTop: Math.floor(marginTop),
  };
};
