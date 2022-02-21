import {
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useThemeContext } from '../ThemeContext';
import { IVariant } from '../theme';
import { StyledLabel } from '../Input/styles';
import { Bullet, SliderContainer, Track } from '../Slider/styles';
import { randomId } from '../utils';
import { Container } from './styles';

interface IProps extends HTMLAttributes<HTMLInputElement> {
  variant?: IVariant;
  label?: string;
  labelVariant?: IVariant;
  value: boolean;
  trackVariant?: IVariant;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
}

/**
 *
 * @param variant Color variant of both the bullet and the tack.
 * @param label The text to be displayed as label.
 * @param labelVariant Color variant. Effects the text in the label.
 * @param value The value of the switch.
 * @param trackVariant The color variant of the track if different from the main color variant.
 * @param onValueChange The function to be triggered on a value change.
 * @param disabled Flag to render the component as disabled.
 */
const Toggle: FC<IProps> = ({
  value,
  onValueChange,
  variant = 'primary',
  label,
  labelVariant = 'dark',
  trackVariant,
  disabled,
  id,
  ...rest
}) => {
  const [bulletOffset, setBulletOffset] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [step, setStep] = useState(0);

  const selectedValue = useRef(value);
  const ref = useRef<HTMLDivElement>(null);
  const bulletRef = useRef<HTMLDivElement>(null);
  const inputID = useRef(id || randomId());

  const theme = useThemeContext();

  useEffect(() => {
    selectedValue.current = value;
    setBulletOffset(value ? maxWidth - step : 0);
  }, [value, maxWidth, step]);

  useEffect(() => {
    setMaxWidth(Math.ceil(ref.current?.offsetWidth || 0));
    setStep(Math.ceil(bulletRef.current?.offsetWidth || 0) / 2);
  }, [ref, bulletRef]);

  const handleKeyPressed = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onValueChange(false);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        onValueChange(true);
      }
      if (event.key === ' ') {
        event.preventDefault();
        onValueChange(!selectedValue.current);
      }
      if (event.key === 'Escape') {
        (event.target as any)?.blur();
      }
    },
    [onValueChange]
  );

  const handleOnFocus = () =>
    document.addEventListener('keydown', handleKeyPressed);

  const handleOnBlur = () =>
    document.removeEventListener('keydown', handleKeyPressed);

  const colorVariant = disabled
    ? theme.layout.toggle.bullet.disabled
    : {
        hue: theme.colors[variant].hue,
        saturation: value ? theme.colors[variant].saturation : 10,
        lightness: value ? theme.colors[variant].lightness : 90,
      };

  const trackColor = disabled
    ? theme.layout.toggle.track.disabled
    : theme.colors[trackVariant || variant];

  return (
    <Container gap={theme.gap}>
      {label && (
        <StyledLabel
          htmlFor={inputID.current}
          variant={theme.colors[labelVariant]}
        >
          {label}
        </StyledLabel>
      )}
      <SliderContainer
        sliderTheme={theme.layout.toggle}
        role={'switch'}
        aria-label={'toggle'}
        aria-checked={value}
        aria-disabled={disabled}
        {...rest}
      >
        <Track
          ref={ref}
          variant={trackColor}
          sliderTheme={theme.layout.toggle}
          corners={theme.corners}
          aria-label={'toggle-track'}
        />
        <Bullet
          ref={bulletRef}
          offset={bulletOffset}
          onFocus={disabled ? undefined : handleOnFocus}
          onBlur={disabled ? undefined : handleOnBlur}
          onClick={disabled ? undefined : () => onValueChange(!value)}
          sliderTheme={theme.layout.slider}
          variant={colorVariant}
          transitionsTime={theme.transitionsTime}
          tabIndex={0}
          isDragged={false}
          disabled={disabled}
          role={'option'}
          aria-label={'toggle-knob'}
        />
      </SliderContainer>
    </Container>
  );
};

export default Toggle;
