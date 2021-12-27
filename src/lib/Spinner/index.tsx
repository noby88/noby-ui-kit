import { useThemeContext } from '../ThemeContext';

import { IVariant } from '../theme';
import { StyledSpinner } from './styles';

interface IProps {
  variant?: IVariant;
  size?: number;
}

/**
 *
 * @param variant Color variant for the spinner.
 * @param size The size of the spinner.
 */
const Spinner = ({ variant = 'primary', size = 30 }: IProps) => {
  const theme = useThemeContext();
  return (
    <StyledSpinner
      theme={theme}
      variant={variant}
      size={size}
      aria-busy={'true'}
      role={'status'}
      aria-label={'spinner'}
    />
  );
};

export default Spinner;
