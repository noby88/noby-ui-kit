import styled from 'styled-components';

import { IChipTheme, IColor } from '../theme';
import { generateCSSAttribute, getHSL } from '../utils';

interface IProps {
  chipTheme: IChipTheme;
  variant: IColor;
  corners: string;
  backgroundVariant: IColor;
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
      props.chipTheme.colorOffset.foreground[
        props.active ? 'active' : 'inactive'
      ];
    const secondaryOffset =
      props.chipTheme.colorOffset.background[
        props.active ? 'active' : 'inactive'
      ];
    const blownOut =
      mainOffset && props.variant.lightness + mainOffset.lightness > 90;
    const mainColor = getHSL(
      props.variant,
      mainOffset,
      blownOut ? { lightness: 90 } : undefined
    );
    const secondaryColor = getHSL(props.backgroundVariant, secondaryOffset);
    return `
      gap: ${props.chipTheme.gap};
      ${generateCSSAttribute('padding', props.chipTheme.padding)}
      ${generateCSSAttribute('border-width', props.chipTheme.borderWidth)}
      border-style: solid;
      border-color: ${mainColor};
      ${
        props.nonPill
          ? generateCSSAttribute('border-radius', props.corners)
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
                props.chipTheme.hover.outlineWidth
              )}
            }
            &:active {
              outline: calc(${props.chipTheme.hover.outlineWidth}/2);
            }`
          : ''
      }

      &>* { color: ${mainColor};}
    `;
  }};
`;
