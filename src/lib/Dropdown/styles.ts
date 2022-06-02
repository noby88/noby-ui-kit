import styled from 'styled-components';
import { IButtonTheme, IColor } from '../theme';
import { generateCSSAttribute, getHSL, hoverOffset } from '../utils';

export const MainContainer = styled.div<{
  disabled?: boolean;
  variant: IColor;
  theme: IButtonTheme;
  corners: string;
}>`
  cursor: pointer;
  position: relative;
  ${(props) => generateCSSAttribute('border-radius', props.corners)}
  & > * {
    pointer-events: none;
  }
  ${(props) => {
    const offsetLightness = hoverOffset(props.variant);
    const offsetColor = getHSL(props.variant, offsetLightness);
    const outlineWidth = props.theme.hover.outlineWidth;
    const outline = `${outlineWidth} solid ${offsetColor}`;
    return props.disabled
      ? ''
      : `&:hover, &:focus-visible {
          outline: ${outline};
          touch-outline: ${outline};
          background-color: ${offsetColor};
          outline-offset: -1px;
        }
        &:active {
          outline-width: calc(${outlineWidth} / 2);
        }`;
  }}
`;

export const Chevron = styled.div`
  position: absolute;
  display: grid;
  height: 100%;
  right: 0.5rem;
  top: 0;
  place-items: center;
  transition: transform 0.2s ease-out;
`;

export const RotatingChevron = styled(Chevron)<{
  isOpen: boolean;
  rotation: 'clockwise' | 'counter-clockwise';
  chevronColor: IColor;
}>`
  color: ${(props) => getHSL(props.chevronColor)};
  ${(props) =>
    props.isOpen
      ? `transform: rotate(${props.rotation === 'clockwise' ? '' : '-'}180deg);`
      : ''}
`;
