import React, { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { StyledInput } from './styles';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IProps> = ({ ...rest }) => {
  const theme = useThemeContext();

  return <StyledInput theme={theme} {...rest} />;
};

export default Input;
