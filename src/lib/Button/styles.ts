import styled from 'styled-components';

import { IButtonTheme, IColor } from '../theme';
import {
  disabledOffset,
  generateCSSAttribute,
  getHSL,
  hoverOffset,
} from '../utils';

export const StyledButton = styled.button<{
  buttonTheme: IButtonTheme;
  variant: IColor;
  corners: string;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
}>`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  border: none;
  font-size: 1rem;
  ${(props) =>
    `width: ${props.width || props.buttonTheme.width || 'auto'};
    background-color: ${
      props.disabled
        ? getHSL(props.variant, disabledOffset(props.variant))
        : getHSL(props.variant)
    };
    ${generateCSSAttribute('padding', props.buttonTheme.padding)}
    ${generateCSSAttribute('border-radius', props.corners)}
    ${generateCSSAttribute('box-shadow', props.buttonTheme.boxShadow)}
    color: ${props.variant.lightness > 60 ? 'black' : 'white'};`}

  ${(props) => {
    const offsetLightness = hoverOffset(props.variant);
    const offsetColor = getHSL(props.variant, offsetLightness);
    const outlineWidth = props.buttonTheme.hover.outlineWidth;
    const outline = `${outlineWidth} solid ${offsetColor}`;
    return props.disabled
      ? ''
      : `&:hover, &:focus-visible {
          outline: ${outline};
          touch-outline: ${outline};
          background-color: ${offsetColor};
          outline-offset: -1px;
        }
        &:active {
          outline-width: calc(${outlineWidth} / 2);
        }`;
  }}
`;
