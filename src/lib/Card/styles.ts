import styled from 'styled-components';
import { ISize, ITheme, IVariant } from '../theme';
import { getHSLWithOpacity } from '../utils';

const boxShadowOffset = '0 0.1rem';

export const StyledCard = styled.div<{
  elevation: number;
  interactive: boolean;
  theme: ITheme;
  shadowVariant: IVariant;
  size: ISize;
}>`
  border-radius: ${(props) => props.theme.layout.corners};
  border: ${(props) => props.theme.border || 'none'};
  box-shadow: ${boxShadowOffset} ${(props) => props.elevation * 0.2}rem
    ${(props) => props.elevation * 0.01}rem
    ${(props) => getHSLWithOpacity(props.theme.colors[props.shadowVariant], 30)};
  box-sizing: border-box;
  padding: ${(props) => props.theme.layout.card.padding};
  width: ${(props) => props.theme.layout.card.size[props.size]};

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
