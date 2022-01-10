import { FC, HTMLAttributes, useRef } from 'react';
import { useThemeContext } from '../ThemeContext';
import { IVariant } from '../theme';
import { StyledLabel } from '../Input/styles';
import { randomId } from '../utils';

interface IProps extends HTMLAttributes<HTMLInputElement> {
  variant?: IVariant;
  label?: string;
}

/**
 *
 * @param variant Background color variant.
 * @param label The text to be displayed as label.
 */
const Toggle: FC<IProps> = ({ variant = 'primary', label, id }) => {
  const inputID = useRef(id || randomId());
  const theme = useThemeContext();

  return (
    <div>
      {label && <StyledLabel htmlFor={inputID.current}>{label}</StyledLabel>}
    </div>
  );
};

export default Toggle;
