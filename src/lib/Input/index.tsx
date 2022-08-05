import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useRef,
} from 'react';
import { useThemeContext } from '../ThemeContext';
import { randomId } from '../utils';
import { IVariant } from '../theme';
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
 * @param label String to be displayed as the label.
 * @param labelVariant Color variant. Effects the text in the label.
 * @param placeholder The text to be used as the placeholder text.
 * @param placeholderVariant Color variant. Effects the placeholder text.
 * @param orientation Flag to place the label and input inline or stacked on top of each other.
 * @param disabled Flag to render a disabled input.
 */
const Input: ForwardRefExoticComponent<
  IProps & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, IProps>(
  (
    {
      variant = 'primary',
      textVariant = 'dark',
      label,
      labelVariant = 'dark',
      placeholderVariant,
      orientation = 'stack',
      id,
      ...rest
    },
    ref
  ) => {
    const inputID = useRef(id || randomId());
    const theme = useThemeContext();

    return (
      <Container orientation={orientation} gap={theme.gap}>
        {label && (
          <StyledLabel
            variant={theme.colors[labelVariant]}
            htmlFor={inputID.current}
          >
            {label}
          </StyledLabel>
        )}
        <StyledInput
          ref={ref}
          inputTheme={theme.layout.input}
          variant={theme.colors[variant]}
          textVariant={theme.colors[textVariant]}
          placeholderVariant={theme.colors[placeholderVariant || textVariant]}
          corners={theme.corners}
          surface={theme.surface[theme.layout.input.background]}
          disabledSurface={theme.surface[theme.layout.input.disabledBackground]}
          id={inputID.current}
          name={rest.placeholder || 'input'}
          aria-label={label || 'unlabeled input'}
          aria-disabled={rest.disabled}
          {...rest}
        />
      </Container>
    );
  }
);

export default Input;
