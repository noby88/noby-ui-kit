import { FC } from 'react';
import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';
import { AnimatedGradient, Block } from './styles';

type IType = 'block' | 'circle' | 'paragraph';

interface IProps {
  type?: IType;
  variant?: IVariant;
  height?: string;
  width?: string;
}

const Skeleton: FC<IProps> = (props) => {
  const {
    type = 'block',
    variant = 'dark',
    height = '1.5rem',
    width = '100%',
    children,
  } = props;
  const theme = useThemeContext();

  const Container = type === 'block' ? Block : Block;

  return (
    <Container variant={variant} height={height} width={width} theme={theme}>
      <AnimatedGradient variant={variant} theme={theme} />
      {children}
    </Container>
  );
};

export default Skeleton;
