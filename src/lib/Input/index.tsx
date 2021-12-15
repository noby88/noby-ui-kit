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

/**
 *
 * @param variant Color variant. Effects the border.
 * @param textVariant Color variant. Effects the input text.
 * @param labe String to be displayed as the label.
 * @param labeVariant Color variant. Effects the text in the label.
 * @param placeholderVariant Color variant. Effects the placeholder text.
 * @param orientation Flag to place the label and input inline or stacked on top of each other.
 */
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
        aria-label={label || 'unlabeled input'}
        aria-disabled={rest.disabled}
        {...rest}
      />
    </Container>
  );
};

export default Input;
