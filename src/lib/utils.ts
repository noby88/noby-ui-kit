import { IColor } from './theme';

const capNumberToRange = (
  number: number,
  range: { from: number; to: number }
) => Math.min(Math.max(number, range.from), range.to);

export const getHSL = (
  color: IColor,
  offset: IColor = { hue: 0, saturation: 0, lightness: 0 }
) =>
  `hsl(${capNumberToRange(color.hue + offset.hue, {
    from: 0,
    to: 360,
  })} ${capNumberToRange(color.saturation + offset.saturation, {
    from: 0,
    to: 100,
  })}% ${capNumberToRange(color.lightness + offset.lightness, {
    from: 0,
    to: 100,
  })}%)`;
