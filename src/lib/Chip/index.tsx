import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';
import { Container } from './styles';

interface IProps {
  variant?: IVariant;
  backgroundVariant?: IVariant;
  text?: string;
  nonPill?: boolean;
  interactive?: boolean;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  preComponent?: React.ReactElement;
  postComponent?: React.ReactElement;
}

/**
 *
 * @param variant Background color variant.
 * @param backgroundVariant The background can have a different color.
 * @param text The text within the chip.
 * @param nonPill By default the chip will have a pill shape. This can be toggled of. In this case it will receive the border radius set in the theme (layout -> corners)
 * @param interactive To have a hover effect. Default is false.
 * @param active Slight changes luminosity. Default is true.
 * @param preComponent A component to be placed at the start of the chip.
 * @param postComponent A component to be placed at the end of the chip.
 */
const Chip = ({
  variant = 'primary',
  backgroundVariant,
  text,
  nonPill = false,
  interactive = false,
  active = true,
  onClick,
  preComponent,
  postComponent,
}: IProps) => {
  const theme = useThemeContext();

  return (
    <Container
      theme={theme}
      variant={variant}
      backgroundVariant={backgroundVariant || variant}
      nonPill={nonPill}
      interactive={interactive}
      active={active}
      onClick={onClick}
      role={'option'}
      aria-checked={active}
    >
      {preComponent}
      <span>{text}</span>
      {postComponent}
    </Container>
  );
};

export default Chip;
