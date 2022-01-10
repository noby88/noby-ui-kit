import styled from 'styled-components';
import { generateCSSAttribute } from '../utils';

export const Container = styled.div<{ gap: string }>`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  ${(props) => generateCSSAttribute('gap', props.gap)}
`;
