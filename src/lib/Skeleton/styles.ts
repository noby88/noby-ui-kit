import styled, { keyframes } from 'styled-components';
import { IColor, ISkeletonTheme } from '../theme';
import { getHSL } from '../utils';

const loadingAnimation = keyframes`
  0% { transform: translateX(var(--fromPosition)); }
  100% { transform: translateX(var(--toPosition)) }
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
  skeletonTheme: ISkeletonTheme;
  variant: IColor;
  left: number;
}>`
  animation-name: ${loadingAnimation};
  animation-iteration-count: infinite;
  height: 100%;
  ${(props) => `
    --fromPosition: calc(-${props.left}px - 100%);
    --toPosition: calc(100vw - ${props.left}px + 100%);
    width: calc(${props.skeletonTheme.animation.accentWidth} * 2);
    background-image: linear-gradient(
      90deg,
      transparent 0%,
      ${baseBackgroundColor(
        props.variant,
        props.skeletonTheme.colors.deSaturation,
        props.variant.lightness > 90
          ? undefined
          : props.skeletonTheme.colors.lightness
      )} calc(50% - ${props.skeletonTheme.animation.accentWidth}),
  ${baseBackgroundColor(
    props.variant,
    props.skeletonTheme.colors.deSaturation,
    Math.max(props.skeletonTheme.colors.lightness, props.variant.lightness) +
      props.skeletonTheme.colors.accentLightnessOffset
  )} 50%,
      ${baseBackgroundColor(
        props.variant,
        props.skeletonTheme.colors.deSaturation,
        props.variant.lightness > 90
          ? undefined
          : props.skeletonTheme.colors.lightness
      )} calc(50% + ${props.skeletonTheme.animation.accentWidth}),
      transparent 100%
    );
    animation-duration: ${props.skeletonTheme.animation.duration}s;
  `}
`;

export const Block = styled.div<{
  skeletonTheme: ISkeletonTheme;
  variant: IColor;
  height: string;
  width: string;
  lastLine?: boolean;
}>`
  overflow: hidden;
  ${(props) =>
    `border-radius: ${props.theme.layout.corners}; height: ${
      props.height
    }; width: ${
      props.lastLine
        ? `calc(${props.width} - ${props.skeletonTheme.paragraph.lastRowTrunc})`
        : props.width
    }; background-color: ${baseBackgroundColor(
      props.variant,
      props.skeletonTheme.colors.deSaturation,
      props.variant.lightness > 90
        ? undefined
        : props.skeletonTheme.colors.lightness
    )}`}
`;

export const Circle = styled.div<{
  skeletonTheme: ISkeletonTheme;
  variant: IColor;
  height: string;
  width: string;
}>`
  overflow: hidden;
  border-radius: 50%;
  ${(props) =>
    `height: ${props.height}; width: ${
      props.height
    }; background-color: ${baseBackgroundColor(
      props.variant,
      props.skeletonTheme.colors.deSaturation,
      props.variant.lightness > 90
        ? undefined
        : props.skeletonTheme.colors.lightness
    )}`}
`;

export const ParagraphContainer = styled.div<{ skeletonTheme: ISkeletonTheme }>`
  display: grid;
  ${(props) => `gap: ${props.skeletonTheme.paragraph.gap}`}
`;
