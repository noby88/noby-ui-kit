import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { IVariant } from '../theme';
import { StyledSpinner } from './styles';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IVariant;
  size?: number;
}

/**
 *
 * @param variant Color variant for the spinner.
 * @param size The size of the spinner.
 */
const Spinner: FC<IProps> = ({ variant = 'primary', size = 30, ...rest }) => {
  const theme = useThemeContext();
  return (
    <StyledSpinner
      theme={theme}
      variant={variant}
      size={size}
      aria-busy={'true'}
      role={'status'}
      aria-label={'spinner'}
      {...rest}
    />
  );
};

export default Spinner;
