import styled from 'styled-components';
import { ITheme, IVariant } from '../theme';
import { getHSL, getHSLWithOpacity } from '../utils';

export const Track = styled.div<{ theme: ITheme; variant: IVariant }>`
  position: relative;
  ${(props) => {
    const attributes = props.theme.layout.slider;
    return `border-radius: ${props.theme.layout.corners};height: ${
      attributes.height
    }; min-width: ${attributes.minWidth}; background-color: ${getHSL(
      props.theme.colors[props.variant],
      { hue: 0, saturation: -25, lightness: 15 }
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
  ${(props) => {
    const attributes = props.theme.layout.slider;
    return `border-radius: ${attributes.bullet.size}; height: ${
      attributes.bullet.size
    }; width: ${attributes.bullet.size}; background-color: ${getHSL(
      props.theme.colors[props.variant]
    )}; top: calc(${attributes.height} / -2); box-shadow: ${
      attributes.bullet.shadow
    };\
    &:hover, &:focus-visible {
      outline: calc(${attributes.bullet.size} / 1.5) solid
        ${getHSLWithOpacity(props.theme.colors[props.variant], 25, {
          hue: 0,
          saturation: -50,
          lightness: 0,
        })};`;
  }}
`;
