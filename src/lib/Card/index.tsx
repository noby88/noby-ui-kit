import { FC } from 'react';
import { StyledCard } from './styles';
import { useThemeContext } from '../ThemeContext';
import { IElevation, IVariant, ISize } from '../theme';

interface IProps {
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
}) => {
  const theme = useThemeContext();
  return (
    <StyledCard
      elevation={elevation}
      interactive={interactive}
      theme={theme}
      shadowVariant={shadowVariant}
      size={size}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
