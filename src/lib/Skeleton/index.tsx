import { FC, useState } from 'react';
import { useThemeContext } from '../ThemeContext';
import { IVariant } from '../theme';
import { AnimatedGradient, Block, Circle, ParagraphContainer } from './styles';

type IType = 'block' | 'circle' | 'paragraph';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: IType;
  variant?: IVariant;
  height?: string;
  width?: string;
  lines?: number;
}

/**
 *
 * @param type The general shape. Default: block.
 * @param variant The color variant. Default: dark.
 * @param height The height value. In case of Circle it is the diameter. In case of Paragraph it is the height of one line. Default: 1.5rem.
 * @param width The width value. In case of Circle it is ignored. In case of Paragraph is the the width of the longest row. Default: 100%.
 * @param lines Only has effect if Paragraph. The number of lines. Default: 2.
 */
const Skeleton: FC<IProps> = (props) => {
  const {
    type = 'block',
    variant = 'dark',
    height = '1.5rem',
    width = '100%',
    lines = 2,
    ...rest
  } = props;
  const theme = useThemeContext();
  const [left, setLeft] = useState(0);

  const setLeftFromRef = (ref: HTMLDivElement) =>
    setLeft(ref?.getBoundingClientRect().x || 0);

  const animation = (
    <AnimatedGradient
      skeletonTheme={theme.layout.skeleton}
      variant={theme.colors[variant]}
      theme={theme}
      left={left}
    />
  );

  return type === 'paragraph' ? (
    <ParagraphContainer
      ref={setLeftFromRef}
      skeletonTheme={theme.layout.skeleton}
      aria-busy={'true'}
      {...rest}
    >
      {Array(Math.max(lines, 1))
        .fill(1)
        .map((_, index) => (
          <Block
            key={index}
            variant={theme.colors[variant]}
            height={height}
            width={width}
            skeletonTheme={theme.layout.skeleton}
            lastLine={index === lines - 1}
          >
            {animation}
          </Block>
        ))}
    </ParagraphContainer>
  ) : type === 'circle' ? (
    <Circle
      ref={setLeftFromRef}
      variant={theme.colors[variant]}
      height={height}
      width={width}
      skeletonTheme={theme.layout.skeleton}
      aria-busy={'true'}
    >
      {animation}
    </Circle>
  ) : (
    <Block
      ref={setLeftFromRef}
      variant={theme.colors[variant]}
      height={height}
      width={width}
      skeletonTheme={theme.layout.skeleton}
      aria-busy={'true'}
    >
      {animation}
    </Block>
  );
};

export default Skeleton;
