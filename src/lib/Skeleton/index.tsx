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
    <ParagraphContainer theme={theme}>
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
    <Circle variant={variant} height={height} width={width} theme={theme}>
      {animation}
    </Circle>
  ) : (
    <Block variant={variant} height={height} width={width} theme={theme}>
      {animation}
    </Block>
  );
};

export default Skeleton;
