import { useContext } from 'react';

import ThemeContext from '../ThemeContext';

import { IVariant } from '../theme';
import { StyledSpinner } from './styles';

interface IProps {
  variant?: IVariant;
  size?: number;
}

const Spinner = ({ variant = 'primary', size = 30 }: IProps) => {
  const theme = useContext(ThemeContext);
  return <StyledSpinner theme={theme} variant={variant} size={size} />;
};

export default Spinner;
