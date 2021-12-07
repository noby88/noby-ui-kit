import styled from 'styled-components';

import { ITheme, IVariant } from '../theme';
import {
  disabledOffset,
  generateCSSAttribute,
  getHSL,
  hoverOffset,
} from '../utils';

export const StyledButton = styled.button<{
  theme: ITheme;
  variant: IVariant;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
}>`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  border: none;
  font-size: 1rem;
  ${(props) =>
    `width: ${props.width || props.theme.layout.buttons.width || 'auto'};
    background-color: ${
      props.disabled
        ? getHSL(
            props.theme.colors[props.variant],
            disabledOffset(props.theme.colors[props.variant])
          )
        : getHSL(props.theme.colors[props.variant])
    };
    ${generateCSSAttribute('padding', props.theme.layout.buttons.padding)}
    ${generateCSSAttribute('border-radius', props.theme.layout.corners)}
    ${generateCSSAttribute('box-shadow', props.theme.layout.buttons.boxShadow)}
    color: ${
      props.theme.colors[props.variant].lightness > 60 ? 'black' : 'white'
    };`}

  ${(props) => {
    const offsetLightness = hoverOffset(props.theme.colors[props.variant]);
    return props.disabled
      ? ''
      : `&:hover, &:focus-visible {
    touch-outline: 0.1rem solid
      ${getHSL(props.theme.colors[props.variant], offsetLightness)};
    background-color: ${getHSL(
      props.theme.colors[props.variant],
      offsetLightness
    )};
    ${generateCSSAttribute(
      'box-shadow',
      props.theme.layout.buttons.hover.boxShadow
    )};
  }`;
  }}
`;
