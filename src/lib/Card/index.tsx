import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { IElevation, IVariant, ISize } from '../theme';
import { StyledCard } from './styles';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: IElevation;
  interactive?: boolean;
  shadowVariant?: IVariant;
  size?: ISize;
}

const Card: FC<IProps> = ({
  children,
  elevation = 1,
  interactive = false,
  shadowVariant = 'dark',
  size = 'full',
  ...rest
}) => {
  const theme = useThemeContext();
  return (
    <StyledCard
      elevation={elevation}
      interactive={interactive}
      theme={theme}
      shadowVariant={shadowVariant}
      size={size}
      role={'contentinfo'}
      {...rest}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
