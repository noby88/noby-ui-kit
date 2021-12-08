import styled from 'styled-components';
import { ITheme } from '../theme';
import { generateCSSAttribute } from '../utils';

export const StyledInput = styled.input<{ theme: ITheme }>`
  ${(props) =>
    `width: ${props.width || props.theme.layout.input.width || 'auto'};
    padding: ${props.theme.layout.input.padding};
    border-radius: ${props.theme.layout.corners};
    ${generateCSSAttribute('box-shadow', props.theme.layout.input.boxShadow)}
    ${generateCSSAttribute('color', props.theme.layout.input.textColor)}
    ${generateCSSAttribute(
      'border-width',
      props.theme.layout.input.border.width
    )}
    `}
`;
