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
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-backface-visibility: hidden;
  user-select: none;
  ${(props) => {
    const mainOffset =
      props.theme.layout.chip.colorOffset.foreground[
        props.active ? 'active' : 'inactive'
      ];
    const secondaryOffset =
      props.theme.layout.chip.colorOffset.background[
        props.active ? 'active' : 'inactive'
      ];
    const blownOut =
      mainOffset &&
      props.theme.colors[props.variant].lightness + mainOffset.lightness > 90;
    const mainColor = getHSL(
      props.theme.colors[props.variant],
      mainOffset,
      blownOut ? { lightness: 90 } : undefined
    );
    const secondaryColor = getHSL(
      props.theme.colors[props.variant],
      secondaryOffset
    );
    return `
      gap: ${props.theme.layout.chip.gap};
      ${generateCSSAttribute('padding', props.theme.layout.chip.padding)}
      ${generateCSSAttribute(
        'border-width',
        props.theme.layout.chip.borderWidth
      )}
      border-style: solid;
      border-color: ${mainColor};
      ${
        props.nonPill
          ? generateCSSAttribute('border-radius', props.theme.layout.corners)
          : `border-radius: 100vh;`
      }
      background-color: ${secondaryColor};

      ${
        props.interactive
          ? `&:hover, &:focus-visible {
              cursor: pointer;
              outline-style: solid;
              outline-offset: -2px;
              outline-color: ${mainColor};
              ${generateCSSAttribute(
                'outline-width',
                props.theme.layout.chip.hover.outlineWidth
              )}
              ${generateCSSAttribute(
                'box-shadow',
                `0 0 0 ${props.theme.layout.chip.hover.boxShadowSpread} ${mainColor}`
              )};
            }
            &:active {
              box-shadow: none;
            }`
          : ''
      }

      &>* { color: ${mainColor};}
    `;
  }};
`;
