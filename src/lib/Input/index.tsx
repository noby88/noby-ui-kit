import React, { FC, useRef } from 'react';
import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';
import { randomId } from '../utils';
import { Container, IOrientation, StyledInput, StyledLabel } from './styles';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: IVariant;
  textVariant?: IVariant;
  label?: string;
  labelVariant?: IVariant;
  placeholderVariant?: IVariant;
  orientation?: IOrientation;
}

const Input: FC<IProps> = ({
  variant = 'primary',
  textVariant,
  label,
  labelVariant,
  placeholderVariant,
  orientation = 'stack',
  id,
  ...rest
}) => {
  const inputID = useRef(id || randomId());
  const theme = useThemeContext();

  return (
    <Container orientation={orientation} theme={theme}>
      {label && (
        <StyledLabel
          variant={labelVariant}
          theme={theme}
          htmlFor={inputID.current}
        >
          {label}
        </StyledLabel>
      )}
      <StyledInput
        variant={variant}
        textVariant={textVariant}
        placeholderVariant={placeholderVariant}
        id={inputID.current}
        name={rest.placeholder || 'input'}
        theme={theme}
        {...rest}
      />
    </Container>
  );
};

export default Input;
