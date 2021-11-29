import { useThemeContext } from '../ThemeContext';

import { Track } from './styles';

const Slider = () => {
  const theme = useThemeContext();

  return <Track theme={theme} variant={'primary'} />;
};

export default Slider;
