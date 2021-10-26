import { useContext } from 'react';

import Spinner from '../Spinner';
import ThemeContext from '../ThemeContext';

import { IVariant } from '../theme';
import { StyledButton } from './styles';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IVariant;
  loading?: boolean;
}

const Button = ({
  variant = 'primary',
  children,
  loading = false,
  ...rest
}: IProps) => {
  const theme = useContext(ThemeContext);
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
