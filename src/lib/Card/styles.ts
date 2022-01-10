import styled from 'styled-components';
import { ICardTheme, IColor, ISize } from '../theme';
import { generateCSSAttribute, getHSLWithOpacity } from '../utils';

const boxShadowOffset = '0 0.1rem';

export const StyledCard = styled.div<{
  elevation: number;
  interactive: boolean;
  cardTheme: ICardTheme;
  surface: string;
  shadowVariant: IColor;
  transitionsTime: number;
  size: ISize;
}>`
  box-sizing: border-box;
  max-width: 100%;
  ${(props) =>
    `border-radius: ${props.theme.layout.corners};
    border: ${props.cardTheme.border || 'none'};
    background-color: ${props.surface};
    ${generateCSSAttribute('padding', props.cardTheme.padding)}
    width: ${props.cardTheme.size[props.size]};`}
  box-shadow: ${(props) =>
    props.elevation > 0
      ? `${boxShadowOffset} ${props.elevation * 0.2}rem ${
          props.elevation * 0.01
        }rem ${getHSLWithOpacity(props.shadowVariant, 30)}`
      : 'none'};

  ${(props) =>
    props.interactive &&
    `
    cursor: pointer;
    transition: box-shadow ${props.transitionsTime}ms;

    &:hover, &:focus {
        box-shadow: ${boxShadowOffset} ${props.elevation * 0.4}rem
        ${props.elevation * 0.2}rem
        ${getHSLWithOpacity(props.shadowVariant, 20)};
    }`}
`;
