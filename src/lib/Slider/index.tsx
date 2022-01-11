import {
  FC,
  MouseEventHandler,
  TouchEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';
import {
  Bullet,
  SliderContainer,
  StepBullet,
  StepContainer,
  StepValue,
  StepValueContainer,
  Track,
} from './styles';

type IElement = string | number;

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IVariant;
  values: IElement[];
  selected: IElement;
  onValueChange: ((value: string) => void) | ((value: number) => void);
  showStepBullets?: boolean;
  showLabels?: boolean;
  labelVariant?: IVariant;
  labelTransform?: ((value: string) => any) | ((value: number) => any);
  trackVariant?: IVariant;
  disabled?: boolean;
}

/**
 *
 * @param variant Overall color variant.
 * @param values The values for the steps. The index in the array drives the indexes in the slider.
 * @param selected The currently selected value. A value from the values array.
 * @param onValueChange Function that receives the new value as parameter.
 * @param showLabels Flag to show of hide the labels.
 * @param labelVariant Color variant. Affects the step labels.
 * @param labelTransform A function to process the values and return as result the label to be displayed.
 * @param trackVariant The color variant of the track if different from the main color variant.
 * @param disabled Flag to render the component as disabled.
 */
const Slider: FC<IProps> = ({
  variant = 'primary',
  values,
  selected,
  onValueChange,
  showStepBullets = false,
  showLabels = true,
  labelVariant,
  labelTransform = (value: string | number) => value,
  trackVariant,
  disabled,
  ...rest
}) => {
  const [bulletOffset, setBulletOffset] = useState(0);
  const [dragging, setDragging] = useState(0);
  const [step, setStep] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);

  const selectedIndex = useRef(0);
  const touchPrevOffset = useRef(0);

  const ref = useRef<HTMLDivElement>(null);
  const bulletRef = useRef<HTMLDivElement>(null);

  const theme = useThemeContext();

  const withinBounds = (offset: number) =>
    Math.min(maxWidth || 0, Math.max(0, offset));

  useEffect(() => {
    if (dragging > step / 2) {
      onValueChange(values[selectedIndex.current + 1] as never);
      setDragging((prev) => prev - step);
    }
    if (dragging < step / -2) {
      onValueChange(values[selectedIndex.current - 1] as never);
      setDragging((prev) => prev + step);
    }
    setBulletOffset(withinBounds(selectedIndex.current * step + dragging));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  useEffect(() => {
    selectedIndex.current = values.indexOf(selected);
    setBulletOffset(withinBounds(values.indexOf(selected) * step + dragging));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, values, maxWidth]);

  useEffect(() => {
    const maxLength = Math.ceil(ref.current?.offsetWidth || 0);
    const stepLength = Math.ceil(
      (maxLength - Math.ceil(bulletRef.current?.offsetWidth || 0) / 1.5) /
        (values.length - 1)
    );
    setStep(stepLength);
    setMaxWidth(maxLength);
  }, [ref, bulletRef, values]);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation?.();
    event.preventDefault?.();
    const handleMouseMove = (data: MouseEvent) => {
      setDragging((prev) => prev + data.movementX);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      setDragging(0);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchMove = useCallback((data: TouchEvent) => {
    data.stopPropagation?.();
    data.preventDefault?.();
    setDragging(
      (prev) => prev + data.touches[0].screenX - touchPrevOffset.current
    );
    touchPrevOffset.current = data.touches[0].screenX;
  }, []);

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation?.();
    event.preventDefault?.();
    touchPrevOffset.current = event.touches[0].screenX;
    document.addEventListener('touchmove', handleTouchMove);
  };

  const handleTouchEnd = () => {
    touchPrevOffset.current = 0;
    setDragging(0);
    document.removeEventListener('touchmove', handleTouchMove);
  };

  const handleKeyPressed = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      const newIndex =
        selectedIndex.current > 0 ? selectedIndex.current - 1 : 0;
      onValueChange(values[newIndex] as never);
    }
    if (event.key === 'ArrowRight') {
      const lastIndex = values.length - 1;
      const newIndex =
        selectedIndex.current < lastIndex
          ? selectedIndex.current + 1
          : lastIndex;
      onValueChange(values[newIndex] as never);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnFocus = () =>
    document.addEventListener('keydown', handleKeyPressed);

  const handleOnBlur = () =>
    document.removeEventListener('keydown', handleKeyPressed);

  const stepBullets = showStepBullets && (
    <StepContainer sliderTheme={theme.layout.slider}>
      {values.map((value, index) => (
        <StepBullet
          key={index}
          sliderTheme={theme.layout.slider}
          variant={theme.colors[variant]}
          onClick={disabled ? undefined : () => onValueChange(value as never)}
        />
      ))}
    </StepContainer>
  );

  const stepValues = showLabels && (
    <StepContainer sliderTheme={theme.layout.slider}>
      {values.map((value, index) => (
        <StepValueContainer key={index} sliderTheme={theme.layout.slider}>
          <StepValue
            selected={value === selected}
            sliderTheme={theme.layout.slider}
            variant={theme.colors[labelVariant || variant]}
          >
            {labelTransform(value as never)}
          </StepValue>
        </StepValueContainer>
      ))}
    </StepContainer>
  );

  const isNumbers = typeof selected === 'number';

  const ariaProps = (
    isNumbers
      ? {
          'aria-valuemin': values[0],
          'aria-valuemax': values[values.length - 1],
          'aria-valuenow': selected,
          'aria-valuetext': selected.toString(),
        }
      : {
          'aria-valuemin': 0,
          'aria-valuemax': values.length - 1,
          'aria-valuenow': selectedIndex,
          'aria-valuetext': selected,
        }
  ) as {
    'aria-valuemin': number;
    'aria-valuemax': number;
    'aria-valuenow': number;
    'aria-valuetext': string;
  };

  const colorVariant = disabled
    ? theme.layout.slider.bullet.disabled
    : theme.colors[variant];

  const trackColor = disabled
    ? theme.layout.slider.track.disabled
    : theme.colors[trackVariant || variant];

  return (
    <SliderContainer
      sliderTheme={theme.layout.slider}
      role={'slider'}
      aria-label={'slider'}
      {...ariaProps}
      {...rest}
    >
      <Track
        ref={ref}
        variant={trackColor}
        sliderTheme={theme.layout.slider}
        corners={theme.layout.corners}
        aria-label={'slider-track'}
      />
      {stepValues}
      {stepBullets}
      <Bullet
        ref={bulletRef}
        offset={bulletOffset}
        onMouseDown={disabled ? undefined : handleClick}
        onFocus={disabled ? undefined : handleOnFocus}
        onBlur={disabled ? undefined : handleOnBlur}
        onTouchStart={disabled ? undefined : handleTouchStart}
        onTouchEnd={disabled ? undefined : handleTouchEnd}
        onTouchCancel={disabled ? undefined : handleTouchEnd}
        sliderTheme={theme.layout.slider}
        variant={colorVariant}
        transitionsTime={theme.transitionsTime}
        tabIndex={0}
        isDragged={!!dragging}
        disabled={disabled}
        role={'option'}
        aria-label={'slider-knob'}
      />
    </SliderContainer>
  );
};

export default Slider;
