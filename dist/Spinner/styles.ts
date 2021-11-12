import styled, { keyframes } from 'styled-components';

import { ITheme, IVariant } from '../theme';
import { getHSL } from '../utils';

const animation = keyframes`
  0% {transform: rotate(0deg);}
  10% {transform: rotate(20deg);}
  90% {transform: rotate(330deg);}
  100% {transform: rotate(360deg);}
`;

export const StyledSpinner = styled.div<{
  theme: ITheme;
  variant: IVariant;
  size: number;
}>`
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 50%;
  animation: ${animation} 1s linear infinite;
  ${(props) =>
    `width: ${props.size / 10}rem;
    height: ${props.size / 10}rem;
    border: ${props.size / 100}rem solid transparent;
    border-top: ${props.size / 100}rem solid ${getHSL(
      props.theme.colors[props.variant]
    )};`}
`;
