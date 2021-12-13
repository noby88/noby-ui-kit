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
const Button = ({
  variant = 'primary',
  children,
  loading = false,
  ...rest
}: IProps) => {
  const theme = useThemeContext();
  return (
    <StyledButton
      variant={variant}
      theme={theme}
      {...rest}
      disabled={rest.disabled || loading}
      type={'button'}
      aria-busy={loading}
      aria-disabled={rest.disabled || loading}
      aria-label={children?.toString()}
    >
      {loading ? <Spinner size={11.25} variant={variant} /> : children}
    </StyledButton>
  );
};

export default Button;
