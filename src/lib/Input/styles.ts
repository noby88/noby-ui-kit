import styled from 'styled-components';
import { ITheme, IVariant } from '../theme';
import {
  disabledOffset,
  generateCSSAttribute,
  getHSL,
  hoverOffset,
} from '../utils';

export type IOrientation = 'stack' | 'inline';

export const Container = styled.div<{
  theme: ITheme;
  orientation: IOrientation;
}>`
  display: flex;
  ${(props) =>
    props.orientation === 'stack'
      ? 'flex-direction: column; gap: 0.3rem;'
      : `gap: ${props.theme.layout.gap}; align-items: center;`}
`;

export const StyledInput = styled.input<{
  theme: ITheme;
  variant: IVariant;
  textVariant?: IVariant;
  placeholderVariant?: IVariant;
}>`
  ${(props) =>
    `width: ${props.width || props.theme.layout.input.width || 'auto'};
    padding: ${props.theme.layout.input.padding};
    border-radius: ${props.theme.layout.corners};
    ${
      props.textVariant
        ? `color: ${getHSL(props.theme.colors[props.textVariant])};`
        : ''
    }
    ${generateCSSAttribute(
      'background-color',
      props.theme.layout.surface.paper
    )}
    ${generateCSSAttribute('box-shadow', props.theme.layout.input.boxShadow)}
    ${generateCSSAttribute('font-size', props.theme.layout.input.fontSize)}
    ${generateCSSAttribute(
      'border-width',
      props.theme.layout.input.border.width
    )}
    ${generateCSSAttribute(
      'border-style',
      props.theme.layout.input.border.style
    )}
    ${generateCSSAttribute(
      'border-color',
      getHSL(props.theme.colors[props.variant])
    )}
    &:focus {
      outline: none;
      ${generateCSSAttribute(
        'border-color',
        getHSL(
          props.theme.colors[props.variant],
          hoverOffset(props.theme.colors[props.variant])
        )
      )}
    }
    &:disabled {
      ${generateCSSAttribute(
        'background-color',
        props.theme.layout.surface.disabledPaper
      )}
      ${generateCSSAttribute(
        'border-color',
        getHSL(
          props.theme.colors[props.variant],
          disabledOffset(props.theme.colors[props.variant])
        )
      )}
      ${generateCSSAttribute(
        'color',
        getHSL(
          props.theme.colors[props.textVariant || 'dark'],
          disabledOffset(props.theme.colors[props.textVariant || 'dark'])
        )
      )}
    }
    ${
      props.placeholderVariant
        ? `&::placeholder { color: ${getHSL(
            props.theme.colors[props.placeholderVariant],
            disabledOffset(props.theme.colors[props.placeholderVariant])
          )}}`
        : ''
    }`}
`;

export const StyledLabel = styled.label<{ theme: ITheme; variant?: IVariant }>`
  ${(props) =>
    props.variant ? `color: ${getHSL(props.theme.colors[props.variant])};` : ''}
`;
