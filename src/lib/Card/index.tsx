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

/**
 *
 * @param elevation Specify the level of elevation the card should mimic. Effects the box shadow.
 * @param interactive Flag to control if the card should animate on hover. Animates as of the Card would elevate more.
 * @param shadowVariant Color variant for the shadow.
 * @param size Set a predefined with for the Card. Defined in the Theme object
 */
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
      cardTheme={theme.layout.card}
      surfaceTheme={theme.layout.surface}
      shadowVariant={theme.colors[shadowVariant]}
      transitionsTime={theme.transitionsTime}
      size={size}
      role={'contentinfo'}
      aria-label={'card'}
      {...rest}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
