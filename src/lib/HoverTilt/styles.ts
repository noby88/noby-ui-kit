import styled from 'styled-components';

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
`;

export const Content = styled.div`
  grid-row: 1/-1;
  grid-column: 1/-1;
  transition: transform 200ms ease;
`;
