import { IColor, IColorPartial } from './theme';

const capNumberToRange = (
  number: number,
  range: { from: number; to: number }
) => Math.min(Math.max(number, range.from), range.to);

const getHSLValues = (
  color: IColor,
  offset: IColor = { hue: 0, saturation: 0, lightness: 0 },
  hardSet?: IColorPartial
) =>
  `${capNumberToRange(hardSet?.hue || color.hue + offset.hue, {
    from: 0,
    to: 360,
  })} ${capNumberToRange(
    hardSet?.saturation || color.saturation + offset.saturation,
    {
      from: 0,
      to: 100,
    }
  )}% ${capNumberToRange(
    hardSet?.lightness || color.lightness + offset.lightness,
    {
      from: 0,
      to: 100,
    }
  )}%`;

export const getHSL = (
  color: IColor,
  offset: IColor = { hue: 0, saturation: 0, lightness: 0 },
  hardSet?: IColorPartial
) => `hsl(${getHSLValues(color, offset, hardSet)})`;

export const getHSLWithOpacity = (
  color: IColor,
  opacity: number = 0,
  offset: IColor = { hue: 0, saturation: 0, lightness: 0 },
  hardSet?: IColorPartial
) => `hsla(${getHSLValues(color, offset, hardSet)} / ${opacity}%)`;

export const generateCSSAttribute = (attribute: string, value: string) =>
  value ? `${attribute}:${value};` : '';

export const hoverOffset = (value: IColor) => ({
  hue: 0,
  saturation: 0,
  lightness: value.lightness < 30 ? -5 : 3,
});

export const disabledOffset = (value: IColor) => ({
  hue: 0,
  saturation: -40,
  lightness: value.lightness < 65 ? 25 : -5,
});

export const randomId = (length = 5) => {
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const limit = pool.length - 1;
  let result = '';
  for (let index = 0; index < length; index++) {
    result += pool[Math.floor(Math.random() * limit)];
  }
  return result;
};
