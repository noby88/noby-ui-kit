import styled from 'styled-components';
import { ITheme, IVariant } from '../theme';
import { disabledOffset, generateCSSAttribute, getHSL } from '../utils';

export const StyledInput = styled.input<{ theme: ITheme; variant: IVariant }>`
  ${(props) =>
    `width: ${props.width || props.theme.layout.input.width || 'auto'};
    padding: ${props.theme.layout.input.padding};
    border-radius: ${props.theme.layout.corners};
    ${generateCSSAttribute(
      'background-color',
      props.theme.layout.surface.paper
    )}
    ${generateCSSAttribute('box-shadow', props.theme.layout.input.boxShadow)}
    ${generateCSSAttribute('font-size', props.theme.layout.input.fontSize)}
    ${generateCSSAttribute(
      'color',
      getHSL(props.theme.colors[props.theme.layout.input.textColor])
    )}
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
    `}
`;
