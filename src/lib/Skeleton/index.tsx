import { FC } from 'react';
import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';
import { AnimatedGradient, Block, Circle, ParagraphContainer } from './styles';

type IType = 'block' | 'circle' | 'paragraph';

interface IProps {
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
  } = props;
  const theme = useThemeContext();

  const animation = <AnimatedGradient variant={variant} theme={theme} />;

  return type === 'paragraph' ? (
    <ParagraphContainer theme={theme} aria-busy={'true'}>
      {Array(Math.max(lines, 1))
        .fill(1)
        .map((_, index) => (
          <Block
            key={index}
            variant={variant}
            height={height}
            width={width}
            theme={theme}
            lastLine={index === lines - 1}
          >
            {animation}
          </Block>
        ))}
    </ParagraphContainer>
  ) : type === 'circle' ? (
    <Circle
      variant={variant}
      height={height}
      width={width}
      theme={theme}
      aria-busy={'true'}
    >
      {animation}
    </Circle>
  ) : (
    <Block
      variant={variant}
      height={height}
      width={width}
      theme={theme}
      aria-busy={'true'}
    >
      {animation}
    </Block>
  );
};

export default Skeleton;
