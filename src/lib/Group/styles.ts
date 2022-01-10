import styled from 'styled-components';

export type IDirection = 'vertical' | 'horizontal';

export const StyledGroup = styled.div<{
  corners: string;
  direction: IDirection;
}>`
  display: flex;
  gap: 1px;
  width: fit-content;
  ${(props) =>
    `flex-direction: ${props.direction === 'horizontal' ? 'row' : 'column'};
    & > *:first-child { border-radius: ${props.corners} ${
      props.direction === 'horizontal' ? '0' : props.corners
    } 0 ${props.direction === 'horizontal' ? props.corners : '0'} };
    & > *:last-child { border-radius: 0 ${
      props.direction === 'horizontal' ? props.corners : '0'
    } ${props.corners} ${
      props.direction === 'horizontal' ? '0' : props.corners
    } };`}

  & > * {
    border-radius: 0;
  }
`;
