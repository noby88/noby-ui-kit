import styled, { keyframes } from 'styled-components';

import { IColor } from '../theme';
import { getHSL } from '../utils';

const animation = keyframes`
  0% {transform: rotate(0deg);}
  10% {transform: rotate(20deg);}
  90% {transform: rotate(330deg);}
  100% {transform: rotate(360deg);}
`;

export const StyledSpinner = styled.div<{
  variant: IColor;
  size: number | string;
}>`
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 50%;
  width: var(--spinnerSize);
  height: var(--spinnerSize);
  border: var(--spinnerBorder) solid transparent;
  animation: ${animation} 1s linear infinite;
  ${(props) => `--spinnerSize: ${
    typeof props.size === 'number' ? `${props.size / 10}rem` : props.size
  };
  --spinnerBorder: ${
    typeof props.size === 'number'
      ? `${props.size / 100}rem`
      : `calc(${props.size} / 10)`
  };
  border-top: var(--spinnerBorder) solid ${getHSL(props.variant)};
`}
`;
