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
  value: boolean;
  onValueChange: (value: boolean) => void;
}

/**
 *
 * @param variant Background color variant.
 * @param label The text to be displayed as label.
 */
const Toggle: FC<IProps> = ({
  value,
  onValueChange,
  variant = 'primary',
  label,
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
        onValueChange(false);
      }
      if (event.key === 'ArrowRight') {
        onValueChange(true);
      }
    },
    [onValueChange]
  );

  const handleOnFocus = () =>
    document.addEventListener('keydown', handleKeyPressed);

  const handleOnBlur = () =>
    document.removeEventListener('keydown', handleKeyPressed);

  return (
    <Container gap={theme.layout.gap}>
      {label && <StyledLabel htmlFor={inputID.current}>{label}</StyledLabel>}
      <SliderContainer
        sliderTheme={theme.layout.toggle}
        fixedWidth={'2.5rem'}
        role={'switch'}
        aria-label={'toggle'}
        aria-checked={'true'}
        {...rest}
      >
        <Track
          ref={ref}
          variant={theme.colors[variant]}
          sliderTheme={theme.layout.toggle}
          corners={theme.layout.corners}
          aria-label={'toggle-track'}
        />
        <Bullet
          ref={bulletRef}
          offset={bulletOffset}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onClick={() => onValueChange(!value)}
          sliderTheme={theme.layout.slider}
          variant={theme.colors[variant]}
          transitionsTime={theme.transitionsTime}
          tabIndex={0}
          isDragged={false}
          role={'option'}
          aria-label={'toggle-knob'}
        />
      </SliderContainer>
    </Container>
  );
};

export default Toggle;
