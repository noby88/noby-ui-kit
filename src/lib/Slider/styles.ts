import styled from 'styled-components';
import { IColor, ISliderTheme } from '../theme';
import { getHSL, getHSLWithOpacity } from '../utils';

export const SliderContainer = styled.div<{ sliderTheme: ISliderTheme }>`
  position: relative;
  display: grid;
  ${(props) => {
    const offset = props.sliderTheme.label.offset;
    const margin = offset[0] === '-' ? `calc(${offset} * -1)` : offset;
    return `min-width: ${props.sliderTheme.minWidth}; margin: ${margin} 0;`;
  }}
`;

export const Track = styled.div<{
  sliderTheme: ISliderTheme;
  variant: IColor;
  corners: string;
}>`
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  ${(props) =>
    `border-radius: ${props.corners}; margin: 0 ${
      props.sliderTheme.track.height
    }; height: ${props.sliderTheme.height}; background-color: ${getHSL(
      props.variant,
      props.sliderTheme.track.deSaturation
    )};`}
`;

export const Bullet = styled.div.attrs(({ offset }: { offset: number }) => ({
  style: {
    transform: `translateX(${offset}px)`,
  },
}))<{
  sliderTheme: ISliderTheme;
  variant: IColor;
  transitionsTime: number;
  offset: number;
  isDragged: boolean;
}>`
  position: absolute;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  touch-action: none;
  ${(props) => {
    const outline = `${
      props.sliderTheme.bullet.outline
    } solid ${getHSLWithOpacity(props.variant, 25, {
      hue: 0,
      saturation: -50,
      lightness: 0,
    })}`;
    return `border-radius: ${props.sliderTheme.bullet.size}; height: ${
      props.sliderTheme.bullet.size
    }; width: ${props.sliderTheme.bullet.size}; background-color: ${getHSL(
      props.variant
    )}; box-shadow: ${props.sliderTheme.bullet.shadow}; ${
      props.isDragged && props.transitionsTime
        ? ''
        : `transition: transform ${props.transitionsTime}ms;`
    }\
    &:hover, &:focus-visible {
      touch-outline: ${outline};
      outline: ${outline};`;
  }}
`;

export const StepContainer = styled.div<{
  sliderTheme: ISliderTheme;
}>`
  display: flex;
  justify-content: space-between;
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  ${(props) => {
    const padding = `calc(${props.sliderTheme.bullet.size} / 8)`;
    return `padding: 0 ${padding};`;
  }}
`;

export const StepBullet = styled.div<{
  sliderTheme: ISliderTheme;
  variant: IColor;
}>`
  cursor: pointer;
  ${(props) => {
    const size = props.sliderTheme.step.size;
    return `border-radius: ${size}; height: ${size}; width: ${size}; background-color: ${getHSL(
      props.variant,
      props.sliderTheme.track.deSaturation
    )};`;
  }}
`;

export const StepValueContainer = styled.div<{ sliderTheme: ISliderTheme }>`
  display: grid;
  ${(props) => `width: ${props.sliderTheme.step.size};`}
`;

export const StepValue = styled.span<{
  sliderTheme: ISliderTheme;
  variant: IColor;
  selected?: boolean;
}>`
  position: relative;
  text-align: center;
  width: max-content;
  ${(props) => {
    const offset = `calc((${props.sliderTheme.bullet.size} / 2.5) - 50%)`;
    return `top: ${
      props.sliderTheme.label.offset
    }; transform: translateX(${offset}); color: ${getHSL(
      props.variant
    )}; font-weight: ${props.selected ? 'bold' : 'base'}`;
  }}
`;
