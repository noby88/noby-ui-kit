import styled from 'styled-components';
import { IShadowVariant, ISize, ITheme, IVariant } from '../theme';
import { getHSL, getHSLWithOpacity } from '../utils';

export const StyledCard = styled.div<{
  elevation: number;
  interactive: boolean;
  theme: ITheme;
  shadowVariant: IShadowVariant;
  size: ISize;
}>`
  border-radius: 5px;
  box-shadow: 0 0 ${(props) => props.elevation * 5}px
    ${(props) => props.elevation - 2}px
    ${(props) =>
      getHSLWithOpacity(props.theme.shadows[props.shadowVariant], 60)};
  box-sizing: border-box;
  padding: ${(props) => props.theme.layout.card.padding};
  width: ${(props) => props.theme.layout.card.size[props.size]};

  ${(props) =>
    props.interactive &&
    `
    cursor: pointer;
    transition: box-shadow ${props.theme.transitionsTime}ms;
    :hover {
        box-shadow: 0 0 ${props.elevation * 10}px
        ${props.elevation}px
        ${getHSLWithOpacity(props.theme.shadows[props.shadowVariant], 65)};
    }`}
`;
