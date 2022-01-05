import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';
import { Container } from './styles';

interface IProps {
  variant?: IVariant;
  backgroundVariant?: IVariant;
  text?: string;
  nonPill?: boolean;
}

const Cip = ({
  variant = 'primary',
  backgroundVariant,
  text,
  nonPill = false,
}: IProps) => {
  const theme = useThemeContext();

  return (
    <Container
      theme={theme}
      variant={variant}
      backgroundVariant={backgroundVariant || variant}
      nonPill={nonPill}
    >
      <span>{text}</span>
    </Container>
  );
};

export default Cip;
