import { useContext } from 'react';

import { IVariant } from '../theme';
import ThemeContext from '../ThemeContext';
import { StyledButton } from './styles';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IVariant;
}

const Button = ({ variant = 'primary', ...rest }: IProps) => {
  const theme = useContext(ThemeContext);
  return <StyledButton variant={variant} theme={theme} {...rest} />;
};

export default Button;
