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
    >
      {loading ? <Spinner size={10} variant={variant} /> : children}
    </StyledButton>
  );
};

export default Button;
