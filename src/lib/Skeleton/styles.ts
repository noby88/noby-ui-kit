import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%) }
`;

export const AnimatedGradient = styled.div`
  background-image: linear-gradient(
    90deg,
    transparent 0%,
    hsl(0 0% 90%) calc(50% - 2rem),
    hsl(0 0% 95%) 50%,
    hsl(0 0% 90%) calc(50% + 2rem),
    transparent 100%
  );
  animation-name: ${loadingAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  height: 100%;
`;

export const Block = styled.div`
  background-color: hsl(0 0% 90%);
  overflow: hidden;
  height: 5rem;
  width: 8rem;
`;
