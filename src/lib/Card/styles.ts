import styled from 'styled-components';
import { ISize, ITheme, IVariant } from '../theme';
import { generateCSSAttribute, getHSLWithOpacity } from '../utils';

const boxShadowOffset = '0 0.1rem';

export const StyledCard = styled.div<{
  elevation: number;
  interactive: boolean;
  theme: ITheme;
  shadowVariant: IVariant;
  size: ISize;
}>`
  box-sizing: border-box;
  max-width: 100%;
  ${(props) =>
    `border-radius: ${props.theme.layout.corners};
    border: ${props.theme.border || 'none'};
    background-color: ${props.theme.layout.surface.middle};
    ${generateCSSAttribute('padding', props.theme.layout.card.padding)}
    width: ${props.theme.layout.card.size[props.size]};`}
  box-shadow: ${(props) =>
    props.elevation > 0
      ? `${boxShadowOffset} ${props.elevation * 0.2}rem ${
          props.elevation * 0.01
        }rem ${getHSLWithOpacity(props.theme.colors[props.shadowVariant], 30)}`
      : 'none'};

  ${(props) =>
    props.interactive &&
    `
    cursor: pointer;
    transition: box-shadow ${props.theme.transitionsTime}ms;

    &:hover, &:focus {
        box-shadow: ${boxShadowOffset} ${props.elevation * 0.4}rem
        ${props.elevation * 0.2}rem
        ${getHSLWithOpacity(props.theme.colors[props.shadowVariant], 20)};
     }`}
`;
