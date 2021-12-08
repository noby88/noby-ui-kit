import React, { FC } from 'react';
import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';
import { StyledInput } from './styles';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: IVariant;
}

const Input: FC<IProps> = ({ variant = 'primary', ...rest }) => {
  const theme = useThemeContext();

  return <StyledInput variant={variant} theme={theme} {...rest} />;
};

export default Input;
