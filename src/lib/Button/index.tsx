import { FC } from 'react';
import Spinner from '../Spinner';
import { useThemeContext } from '../ThemeContext';
import { IVariant } from '../theme';
import { StyledButton } from './styles';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IVariant;
  loading?: boolean;
}

/**
 *
 * @param variant Background color variant.
 * @param loading Flag if should display spinner instead of text and not trigger onClick event.
 */
const Button: FC<IProps> = ({
  variant = 'primary',
  children,
  loading = false,
  ...rest
}) => {
  const theme = useThemeContext();
  return (
    <StyledButton
      variant={variant}
      theme={theme}
      disabled={rest.disabled || loading}
      type={'button'}
      aria-live={'polite'}
      aria-busy={loading}
      aria-disabled={rest.disabled || loading}
      aria-label={children?.toString()}
      {...rest}
    >
      {loading ? <Spinner size={11.25} variant={variant} /> : children}
    </StyledButton>
  );
};

export default Button;
