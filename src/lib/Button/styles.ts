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
  border: none;
  font-size: 1rem;
  ${(props) =>
    `width: ${props.width || props.theme.layout.buttons.width || 'auto'};
    background-color: ${
      props.disabled
        ? getHSL(props.theme.colors[props.variant], {
            hue: 0,
            saturation: -30,
            lightness:
              props.theme.colors[props.variant].lightness < 65 ? 35 : -5,
          })
        : getHSL(props.theme.colors[props.variant])
    };
    padding: ${props.theme.layout.buttons.padding};
    border-radius: ${props.theme.layout.corners};
    color: ${
      props.theme.colors[props.variant].lightness > 60 ? 'black' : 'white'
    };
    ${
      props.theme.layout.buttons.boxShadow
        ? `box-shadow: ${props.theme.layout.buttons.boxShadow};`
        : ''
    }`}

  ${(props) =>
    props.disabled
      ? ''
      : `&:hover, &:focus-visible {
    outline: 0.1rem solid
      ${getHSL(props.theme.colors[props.variant], {
        hue: 0,
        saturation: 0,
        lightness: props.theme.colors[props.variant].lightness < 30 ? -5 : 3,
      })};
    background-color: ${getHSL(props.theme.colors[props.variant], {
      hue: 0,
      saturation: 0,
      lightness: props.theme.colors[props.variant].lightness < 30 ? -5 : 3,
    })};
    ${
      props.theme.layout.buttons.hover.boxShadow
        ? `box-shadow: ${props.theme.layout.buttons.hover.boxShadow};`
        : ''
    }
  }`}
`;
