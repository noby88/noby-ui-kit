import styled from 'styled-components';
import { IColor, IInputTheme } from '../theme';
import {
  disabledOffset,
  generateCSSAttribute,
  getHSL,
  hoverOffset,
} from '../utils';

export type IOrientation = 'stack' | 'inline';

export const Container = styled.div<{
  orientation: IOrientation;
  gap: string;
}>`
  display: flex;
  ${(props) =>
    props.orientation === 'stack'
      ? 'flex-direction: column; gap: 0.3rem;'
      : `gap: ${props.gap}; align-items: center;`}
`;

export const StyledInput = styled.input<{
  inputTheme: IInputTheme;
  variant: IColor;
  textVariant: IColor;
  placeholderVariant?: IColor;
  corners: string;
  surface: string;
  disabledSurface: string;
}>`
  ${(props) =>
    `width: ${props.width || props.inputTheme.width || 'auto'};
    padding: ${props.inputTheme.padding};
    border-radius: ${props.corners};
    ${props.textVariant ? `color: ${getHSL(props.textVariant)};` : ''}
    ${generateCSSAttribute('background-color', props.surface)}
    ${generateCSSAttribute('box-shadow', props.inputTheme.boxShadow)}
    ${generateCSSAttribute('font-size', props.inputTheme.fontSize)}
    ${generateCSSAttribute('border-width', props.inputTheme.border.width)}
    ${generateCSSAttribute('border-style', props.inputTheme.border.style)}
    ${generateCSSAttribute('border-color', getHSL(props.variant))}
    &[placeholder] { text-overflow: ellipsis; }
    &:focus {
      outline: none;
      ${generateCSSAttribute(
        'border-color',
        getHSL(props.variant, hoverOffset(props.variant))
      )}
    }
    &:disabled {
      ${generateCSSAttribute('background-color', props.disabledSurface)}
      ${generateCSSAttribute(
        'border-color',
        getHSL(props.variant, disabledOffset(props.variant))
      )}
      ${generateCSSAttribute(
        'color',
        getHSL(props.textVariant, disabledOffset(props.textVariant))
      )}
    }
    ${
      props.placeholderVariant
        ? `&::placeholder { color: ${getHSL(
            props.placeholderVariant,
            disabledOffset(props.placeholderVariant)
          )};}`
        : ''
    }`}
`;

export const StyledLabel = styled.label<{ variant?: IColor }>`
  ${(props) => (props.variant ? `color: ${getHSL(props.variant)};` : '')}
`;
