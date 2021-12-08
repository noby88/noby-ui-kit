import styled from 'styled-components';

import { ITheme, IVariant } from '../theme';
import { generateCSSAttribute, getHSL } from '../utils';

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
    ${generateCSSAttribute('padding', props.theme.layout.button.padding)}
    ${generateCSSAttribute('border-radius', props.theme.layout.corners)}
    ${generateCSSAttribute('box-shadow', props.theme.layout.buttons.boxShadow)}
    color: ${
      props.theme.colors[props.variant].lightness > 60 ? 'black' : 'white'
    };`}

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
    ${generateCSSAttribute(
      'box-shadow',
      props.theme.layout.buttons.hover.boxShadow
    )}
  }`}
`;
