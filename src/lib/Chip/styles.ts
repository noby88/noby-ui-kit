import styled from 'styled-components';

import { ITheme, IVariant } from '../theme';
import { generateCSSAttribute, getHSL } from '../utils';

interface IProps {
  theme: ITheme;
  variant: IVariant;
  backgroundVariant: IVariant;
  nonPill: boolean;
}

export const Container = styled.div<IProps>`
  width: max-content;
  ${(props) => `
    ${generateCSSAttribute('padding', props.theme.layout.chip.padding)}
    ${generateCSSAttribute('border-width', props.theme.layout.chip.borderWidth)}
    border-style: solid;
    border-color: ${getHSL(props.theme.colors[props.variant])};
    ${
      props.nonPill
        ? generateCSSAttribute('border-radius', props.theme.layout.corners)
        : `border-radius: 100vh;`
    }
    background-color: ${getHSL(props.theme.colors[props.backgroundVariant], {
      hue: 0,
      saturation: -20,
      lightness: 50,
    })};

    &>span { color: ${getHSL(props.theme.colors[props.variant])};}
  `}
`;
