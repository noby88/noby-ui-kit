import styled from 'styled-components';

import { ITheme, IVariant } from '../theme';
import { getHSL } from '../utils';

export const StyledButton = styled.button<{
  theme: ITheme;
  variant: IVariant;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
}>`
  cursor: pointer;
  width: ${(props) =>
    props.width || props.theme.layout.buttons.width || 'auto'};
  background-color: ${(props) =>
    props.disabled
      ? getHSL(props.theme.colors[props.variant], {
          hue: 0,
          saturation: -30,
          lightness: 30,
        })
      : getHSL(props.theme.colors[props.variant])};
  padding: ${(props) => props.theme.layout.buttons.padding};
  border: none;
  border-radius: ${(props) => props.theme.layout.corners};
  font-size: 1rem;
  color: ${(props) =>
    props.theme.colors[props.variant].lightness > 60 ? 'black' : 'white'};
  ${(props) =>
    props.theme.layout.buttons.boxShadow
      ? `box-shadow: ${props.theme.layout.buttons.boxShadow};`
      : ''}

  ${(props) =>
    props.disabled
      ? ''
      : `&:hover, &:focus-visible {
    outline: 0.1rem solid
      ${getHSL(props.theme.colors[props.variant], {
        hue: 0,
        saturation: 0,
        lightness: -10,
      })};
    background-color: ${getHSL(props.theme.colors[props.variant], {
      hue: 0,
      saturation: 0,
      lightness: -5,
    })};
    ${
      props.theme.layout.buttons.hover.boxShadow
        ? `box-shadow: ${props.theme.layout.buttons.hover.boxShadow};`
        : ''
    }
  }`}
`;
