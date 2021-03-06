import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { IVariant } from '../theme';
import { Container } from './styles';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
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
const Chip: FC<IProps> = ({
  variant = 'primary',
  backgroundVariant,
  text,
  nonPill = false,
  interactive = false,
  active = true,
  onClick,
  preComponent,
  postComponent,
  ...rest
}) => {
  const theme = useThemeContext();

  return (
    <Container
      chipTheme={theme.layout.chip}
      variant={theme.colors[variant]}
      backgroundVariant={theme.colors[backgroundVariant || variant]}
      corners={theme.corners}
      nonPill={nonPill}
      interactive={interactive}
      active={active}
      onClick={onClick}
      role={'option'}
      aria-checked={active}
      {...rest}
    >
      {preComponent}
      <span>{text}</span>
      {postComponent}
    </Container>
  );
};

export default Chip;
