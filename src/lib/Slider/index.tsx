import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';

import { Bullet, Track } from './styles';

interface IProps {
  variant?: IVariant;
}

const Slider = (props: IProps) => {
  const { variant = 'primary' } = props;

  const theme = useThemeContext();

  return (
    <Track theme={theme} variant={variant}>
      <Bullet theme={theme} variant={variant} />
    </Track>
  );
};

export default Slider;
