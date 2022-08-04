import styled from 'styled-components';
import { IButtonTheme, IColor, IInputTheme } from '../theme';
import {
  disabledOffset,
  generateCSSAttribute,
  getHSL,
  hoverOffset,
} from '../utils';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const CustomContainer = styled.div<{
  inputTheme: IInputTheme;
  corners: string;
  variant: IColor;
  surface: string;
  disabled?: boolean;
}>`
  display: grid;
  align-content: center;
  height: 1.125em;
  box-sizing: content-box;
  ${(props) => `
    ${generateCSSAttribute('padding', props.inputTheme.padding)}
    ${generateCSSAttribute('background-color', props.surface)}
    ${generateCSSAttribute('border-radius', props.corners)}
    ${generateCSSAttribute('border-width', props.inputTheme.border.width)}
    ${generateCSSAttribute('border-style', props.inputTheme.border.style)}
    ${generateCSSAttribute(
      'border-color',
      props.disabled
        ? getHSL(props.variant, disabledOffset(props.variant))
        : getHSL(props.variant)
    )}
    `}
`;

export const Options = styled.div<{
  background: string;
  corners: string;
  offset: string;
  isOpen: boolean;
  duration: number;
  zIndex?: number;
  boxShadow?: string;
}>`
  position: absolute;
  display: none;
  box-sizing: border-box;
  min-width: 100%;
  max-height: 0;
  overflow: hidden;
  ${(props) =>
    `transition: max-height ${props.duration}ms ease-in, box-shadow ${
      props.duration
    }ms ease-in;
    ${generateCSSAttribute('background-color', props.background)}
    ${generateCSSAttribute('top', props.offset)}
    ${generateCSSAttribute('border-radius', props.corners)}}
    ${generateCSSAttribute('z-index', props.zIndex?.toString() || '')}
    &.show {
      display: grid;
      box-shadow: ${props.boxShadow};
      max-height: 10rem;
    }`}
`;

export const Option = styled.div<{ hoverBackground: string; gap: string }>`
  cursor: pointer;
  ${(props) =>
    `${generateCSSAttribute('padding-inline', props.gap)}
    ${generateCSSAttribute(
      'padding-block',
      props.gap ? `calc(${props.gap}/2)` : ''
    )}
    &:first-child {${generateCSSAttribute('padding-top', props.gap)}}
    &:last-child {${generateCSSAttribute('padding-bottom', props.gap)}}`}
  &:hover, &:focus {
    outline: none;
    ${(props) =>
      generateCSSAttribute('background-color', props.hoverBackground)}
  }
`;

export const Chevron = styled.div`
  position: absolute;
  display: grid;
  height: 100%;
  right: 0.5rem;
  top: 0;
  place-items: center;
`;

export const RotatingChevron = styled(Chevron)<{
  isOpen: boolean;
  rotation: 'clockwise' | 'counter-clockwise';
  axis: 'X' | 'Y' | 'Z';
  chevronColor: IColor;
  duration: number;
  disabled?: boolean;
}>`
  ${(props) => `color: ${
    props.disabled
      ? getHSL(props.chevronColor, disabledOffset(props.chevronColor))
      : getHSL(props.chevronColor)
  };
  transition: transform ${props.duration}ms ease-out;`}
  ${(props) =>
    props.isOpen
      ? `transform: rotate${props.axis}(${
          props.rotation === 'clockwise' ? '' : '-'
        }180deg);`
      : ''}
`;

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
