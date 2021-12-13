import { MouseEventHandler, useEffect, useRef, useState } from 'react';
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

interface IProps {
  variant?: IVariant;
  values: IElement[];
  selected: IElement;
  onChange: ((value: string) => void) | ((value: number) => void);
  showStepBullets?: boolean;
  showLabels?: boolean;
  labelVariant?: IVariant;
  labelTransform?: ((value: string) => any) | ((value: number) => any);
}

/**
 *
 * @param variant Overall color variant.
 * @param values The values for the steps. The index in the array drives the indexes in the slider.
 * @param selected The currently selected value. A value from the values array.
 * @param onChange Function that receives the new value as parameter.
 * @param showLabels Flag to show of hide the labels.
 * @param labelVariant Color variant. Affects the step labels.
 * @param labelTransform A function to process the values and return as result the label to be displayed.
 */
const Slider = (props: IProps) => {
  const {
    variant = 'primary',
    values,
    selected,
    onChange,
    showStepBullets = false,
    showLabels = true,
    labelVariant,
    labelTransform = (value: string | number) => value,
  } = props;

  const [bulletOffset, setBulletOffset] = useState(0);
  const [dragging, setDragging] = useState(0);
  const [step, setStep] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const theme = useThemeContext();

  const withinBounds = (offset: number) =>
    Math.min(maxWidth || 0, Math.max(0, offset));

  useEffect(() => {
    if (dragging > step / 2) {
      onChange(values[selectedIndex + 1] as never);
      setDragging((prev) => prev - step);
    }
    if (dragging < step / -2) {
      onChange(values[selectedIndex - 1] as never);
      setDragging((prev) => prev + step);
    }
    setBulletOffset(withinBounds(selectedIndex * step + dragging));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  useEffect(() => {
    setSelectedIndex(values.indexOf(selected));
    setBulletOffset(withinBounds(values.indexOf(selected) * step + dragging));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, values, maxWidth]);

  useEffect(() => {
    const maxLength = Math.ceil(ref.current?.offsetWidth || 0);
    const stepLength = Math.ceil((maxLength || 0) / (values.length - 1));
    setStep(stepLength);
    setMaxWidth(maxLength);
  }, [ref, values]);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation?.();
    event.preventDefault?.();
    const handleMouseMove = (data: MouseEvent) => {
      setDragging((prev) => prev + data.movementX);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      setDragging(0);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const stepBullets = showStepBullets && (
    <StepContainer theme={theme}>
      {values.map((value, index) => (
        <StepBullet
          key={index}
          theme={theme}
          variant={variant}
          onClick={() => onChange(value as never)}
        />
      ))}
    </StepContainer>
  );

  const stepValues = showLabels && (
    <StepContainer theme={theme}>
      {values.map((value, index) => (
        <StepValueContainer key={index} theme={theme}>
          <StepValue
            selected={value === selected}
            theme={theme}
            variant={labelVariant || variant}
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

  return (
    <SliderContainer
      theme={theme}
      role={'slider'}
      aria-label="slider"
      {...ariaProps}
    >
      <Track ref={ref} variant={variant} theme={theme} />
      {stepValues}
      {stepBullets}
      <Bullet
        offset={bulletOffset}
        onMouseDown={handleClick}
        theme={theme}
        variant={variant}
      />
    </SliderContainer>
  );
};

export default Slider;
