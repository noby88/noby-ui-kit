import styled from 'styled-components';

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export const Content = styled.div`
  grid-row: 1/-1;
  grid-column: 1/-1;
  --angle: 1deg;
  --factorX: 0;
  --factorY: 0;
  --factorZ: 0;
  transition: transform 300ms ease;
  transform: perspective(20rem) rotateX(calc(var(--angle) * var(--factorX)))
    rotateY(calc(var(--angle) * var(--factorY)))
    translateZ(calc(var(--factorZ) * -0.3rem));
`;

export const Cell = styled.div<{ row: number; column: number }>`
  z-index: 10;
  ${(props) => `
    grid-row: ${props.row};
    grid-column: ${props.column};
    &:hover ~ div:last-of-type {
      --factorX: ${props.row - 3};
      --factorY: calc(${props.column - 3} * -1);
      --factorZ: ${Math.abs(Math.max(props.row, props.column) - 3)};
    }
  `}
`;
