import styled from 'styled-components';

import { ITheme, IVariant } from '../theme';
import { generateCSSAttribute, getHSL } from '../utils';

interface IProps {
  theme: ITheme;
  variant: IVariant;
  backgroundVariant: IVariant;
  nonPill: boolean;
  interactive: boolean;
  active: boolean;
}

export const Container = styled.div<IProps>`
  width: max-content;
  cursor: default;
  -webkit-backface-visibility: hidden;
  ${(props) => {
    const mainOffset =
      props.theme.layout.chip.colorOffset.foreground[
        props.active ? 'active' : 'inactive'
      ];
    const secondaryOffset =
      props.theme.layout.chip.colorOffset.background[
        props.active ? 'active' : 'inactive'
      ];
    return `
      ${generateCSSAttribute('padding', props.theme.layout.chip.padding)}
      ${generateCSSAttribute(
        'border-width',
        props.theme.layout.chip.borderWidth
      )}
      border-style: solid;
      border-color: ${getHSL(props.theme.colors[props.variant], mainOffset)};
      ${
        props.nonPill
          ? generateCSSAttribute('border-radius', props.theme.layout.corners)
          : `border-radius: 100vh;`
      }
      background-color: ${getHSL(
        props.theme.colors[props.backgroundVariant],
        secondaryOffset
      )};

      ${
        props.interactive
          ? `&:hover, &:focus-visible {
              cursor: pointer;
              outline-style: solid;
              outline-offset: -2px;
              outline-color: ${getHSL(
                props.theme.colors[props.variant],
                mainOffset
              )};
              ${generateCSSAttribute(
                'outline-width',
                props.theme.layout.chip.hover.outlineWidth
              )}
            }`
          : ''
      }

      &>span { color: ${getHSL(props.theme.colors[props.variant], mainOffset)};}
    `;
  }};
`;
