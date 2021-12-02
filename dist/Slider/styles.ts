import styled from 'styled-components';
import { ITheme, IVariant } from '../theme';
import { getHSL, getHSLWithOpacity } from '../utils';

const deSaturationObject = { hue: 0, saturation: -25, lightness: 15 };

export const SliderContainer = styled.div<{ theme: ITheme }>`
  position: relative;
  display: grid;
  ${(props) => {
    const offset = props.theme.layout.slider.label.offset;
    const margin = offset[0] === '-' ? `calc(${offset} * -1)` : offset;
    return `min-width: ${props.theme.layout.slider.minWidth}; margin: ${margin} 0;`;
  }}
`;

export const Track = styled.div<{ theme: ITheme; variant: IVariant }>`
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  ${(props) => {
    const attributes = props.theme.layout.slider;
    const margin = `calc(${attributes.bullet.size} / 2)`;
    return `border-radius: ${
      props.theme.layout.corners
    }; margin: 0 ${margin}; height: ${
      attributes.height
    }; background-color: ${getHSL(
      props.theme.colors[props.variant],
      deSaturationObject
    )};`;
  }}
`;

export const Bullet = styled.div.attrs(({ offset }: { offset: number }) => ({
  style: {
    left: offset + 'px',
  },
}))<{
  theme: ITheme;
  variant: IVariant;
  offset: number;
}>`
  position: absolute;
  cursor: pointer;
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  ${(props) => {
    const attributes = props.theme.layout.slider;
    return `border-radius: ${attributes.bullet.size}; height: ${
      attributes.bullet.size
    }; width: ${attributes.bullet.size}; background-color: ${getHSL(
      props.theme.colors[props.variant]
    )}; box-shadow: ${attributes.bullet.shadow};\
    &:hover, &:focus-visible {
      outline: ${attributes.bullet.outline} solid
        ${getHSLWithOpacity(props.theme.colors[props.variant], 25, {
          hue: 0,
          saturation: -50,
          lightness: 0,
        })};`;
  }}
`;

export const StepContainer = styled.div<{
  theme: ITheme;
}>`
  display: flex;
  justify-content: space-between;
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  ${(props) => {
    const padding = `calc(${props.theme.layout.slider.bullet.size} / 8)`;
    return `padding: 0 ${padding};`;
  }}
`;

export const StepBullet = styled.div<{
  theme: ITheme;
  variant: IVariant;
}>`
  cursor: pointer;
  ${(props) => {
    const size = `calc(${props.theme.layout.slider.bullet.size} / 1.25)`;
    return `border-radius: ${size}; height: ${size}; width: ${size}; background-color: ${getHSL(
      props.theme.colors[props.variant],
      deSaturationObject
    )};`;
  }}
`;

export const StepValueContainer = styled.div<{ theme: ITheme }>`
  display: grid;
  ${(props) => {
    const size = `calc(${props.theme.layout.slider.bullet.size} / 1.25)`;
    return `width: ${size};`;
  }}
`;

export const StepValue = styled.span<{
  theme: ITheme;
  variant: IVariant;
  selected?: boolean;
}>`
  position: relative;
  text-align: center;
  width: max-content;
  ${(props) => {
    const offset = `calc((${props.theme.layout.slider.bullet.size} / 2.5) - 50%)`;
    return `top: ${
      props.theme.layout.slider.label.offset
    }; transform: translateX(${offset}); color: ${getHSL(
      props.theme.colors[props.variant]
    )}; font-weight: ${props.selected ? 'bold' : 'base'}`;
  }}
`;
