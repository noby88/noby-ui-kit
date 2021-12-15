import styled, { keyframes } from 'styled-components';
import { IColor, ITheme, IVariant } from '../theme';
import { getHSL } from '../utils';

const loadingAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%) }
`;

const baseBackgroundColor = (
  color: IColor,
  deSaturation: number,
  lightness?: number
) =>
  getHSL(
    color,
    {
      hue: 0,
      saturation: deSaturation,
      lightness: 0,
    },
    {
      lightness: lightness,
    }
  );

export const AnimatedGradient = styled.div<{
  theme: ITheme;
  variant: IVariant;
}>`
  animation-name: ${loadingAnimation};
  animation-iteration-count: infinite;
  height: 100%;
  ${(props) => `
    background-image: linear-gradient(
      90deg,
      transparent 0%,
      ${baseBackgroundColor(
        props.theme.colors[props.variant],
        props.theme.layout.skeleton.colors.deSaturation,
        props.variant === 'light'
          ? undefined
          : props.theme.layout.skeleton.colors.lightness
      )} calc(50% - ${props.theme.layout.skeleton.animation.accentWidth}),
  ${baseBackgroundColor(
    props.theme.colors[props.variant],
    props.theme.layout.skeleton.colors.deSaturation,
    Math.max(
      props.theme.layout.skeleton.colors.lightness,
      props.theme.colors[props.variant].lightness
    ) + props.theme.layout.skeleton.colors.accentLightnessOffset
  )} 50%,
      ${baseBackgroundColor(
        props.theme.colors[props.variant],
        props.theme.layout.skeleton.colors.deSaturation,
        props.variant === 'light'
          ? undefined
          : props.theme.layout.skeleton.colors.lightness
      )} calc(50% + ${props.theme.layout.skeleton.animation.accentWidth}),
      transparent 100%
    );
    animation-duration: ${props.theme.layout.skeleton.animation.duration}s;
  `}
`;

export const Block = styled.div<{
  theme: ITheme;
  variant: IVariant;
  height: string;
  width: string;
}>`
  overflow: hidden;
  ${(props) =>
    `border-radius: ${props.theme.layout.corners}; height: ${
      props.height
    }; width: ${props.width}; background-color: ${baseBackgroundColor(
      props.theme.colors[props.variant],
      props.theme.layout.skeleton.colors.deSaturation,
      props.variant === 'light'
        ? undefined
        : props.theme.layout.skeleton.colors.lightness
    )}`}
`;
