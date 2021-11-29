import styled from 'styled-components';
import { ITheme, IVariant } from '../theme';
import { getHSL } from '../utils';

export const Track = styled.div<{ theme: ITheme; variant: IVariant }>`
  position: relative;
  ${(props) => {
    const attributes = props.theme.layout.slider;
    return `border-radius: ${props.theme.layout.corners};height: ${
      attributes.height
    }; min-width: ${attributes.minWidth}; background-color: ${getHSL(
      props.theme.colors[props.variant]
    )};`;
  }}
`;
