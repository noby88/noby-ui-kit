import styled from 'styled-components';
import { ITheme } from '../theme';

export type IDirection = 'vertical' | 'horizontal';

export const StyledGroup = styled.div<{
  theme: ITheme;
  direction: IDirection;
}>`
  display: flex;
  gap: 1px;
  width: fit-content;
  ${(props) =>
    `flex-direction: ${props.direction === 'horizontal' ? 'row' : 'column'};
    & > *:first-child { border-radius: ${props.theme.layout.corners} ${
      props.direction === 'horizontal' ? '0' : props.theme.layout.corners
    } 0 ${
      props.direction === 'horizontal' ? props.theme.layout.corners : '0'
    } };
    & > *:last-child { border-radius: 0 ${
      props.direction === 'horizontal' ? props.theme.layout.corners : '0'
    } ${props.theme.layout.corners} ${
      props.direction === 'horizontal' ? '0' : props.theme.layout.corners
    } };`}

  & > * {
    border-radius: 0;
  }
`;
