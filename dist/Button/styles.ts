import styled from 'styled-components';

import { ITheme, IVariant } from '../theme';
import { getHSL } from '../utils';

export const StyledButton = styled.button<{ theme: ITheme; variant: IVariant }>`
  cursor: pointer;
  background-color: ${(props) => getHSL(props.theme.colors[props.variant])};
  padding: ${(props) => props.theme.layout.buttons.padding};
  border: none;
  border-radius: ${(props) => props.theme.layout.corners};
  font-size: 1rem;
  color: ${(props) =>
    props.theme.colors[props.variant].lightness > 60 ? 'black' : 'white'};
  ${(props) =>
    props.theme.layout.buttons.boxShadow
      ? `box-shadow: ${props.theme.layout.buttons.boxShadow};`
      : ''}

  &:hover {
    outline: 0.1rem solid
      ${(props) =>
        getHSL(props.theme.colors[props.variant], {
          hue: 0,
          saturation: 20,
          lightness: -10,
        })};
    background-color: ${(props) =>
      getHSL(props.theme.colors[props.variant], {
        hue: 0,
        saturation: 20,
        lightness: -10,
      })};
    ${(props) =>
      props.theme.layout.buttons.hover.boxShadow
        ? `box-shadow: ${props.theme.layout.buttons.hover.boxShadow};`
        : ''}
  }
`;
