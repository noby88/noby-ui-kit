import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';

import { Bullet, Track } from './styles';

type IElement = string | number;

interface IProps {
  variant?: IVariant;
  values: IElement[];
  selected: IElement;
  onChange: ((value: string) => void) | ((value: number) => void);
}

const Slider = (props: IProps) => {
  const { variant = 'primary', values, selected, onChange } = props;

  const [bulletOffset, setBulletOffset] = useState(0);
  const [dragging, setDragging] = useState(0);
  const [step, setStep] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const bulletRef = useRef<HTMLDivElement>(null);

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
    const maxLength = Math.ceil(
      (ref.current?.offsetWidth || 0) - (bulletRef.current?.offsetWidth || 0)
    );
    const stepLength = Math.ceil((maxLength || 0) / (values.length - 1));
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
      setDragging(0);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

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
    <Track
      ref={ref}
      theme={theme}
      variant={variant}
      onMouseDown={handleClick}
      role={'slider'}
      {...ariaProps}
    >
      <Bullet
        ref={bulletRef}
        offset={bulletOffset}
        theme={theme}
        variant={variant}
      />
    </Track>
  );
};

export default Slider;
