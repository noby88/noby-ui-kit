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
  width: ${(props) => props.size / 10}rem;
  height: ${(props) => props.size / 10}rem;
  margin: 0 auto;
  border-radius: 50%;
  border: ${(props) => props.size / 100}rem solid transparent;
  border-top: ${(props) => props.size / 100}rem solid
    ${(props) => getHSL(props.theme.colors[props.variant])};
  animation: ${animation} 1s linear infinite;
`;
