import {
  FC,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from 'react';
import { Container, Content } from './styles';

type IPointerEffect = 'attract' | 'repel';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  pointerEffect?: IPointerEffect;
  force?: number;
}

const TILT_PRECISION = 11;
const TILE_MIDWAYS_COMPENSATION = Math.floor((TILT_PRECISION - 1) / 2);

const pointerEffectMap: { [key in IPointerEffect]: number } = {
  attract: 1,
  repel: -1,
};

/**
 *
 * @param pointerEffect Determines weather the pointer should attract or repel the content
 * @param force The strength of the rotations
 */
const HoverTilt: FC<IProps> = ({
  children,
  pointerEffect = 'attract',
  force = 10,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({
    top: 0,
    height: 0,
    left: 0,
    width: 0,
  });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [deg, setDeg] = useState('1deg');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransform] = useTransition();

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (!event.isTrusted) {
      return;
    }
    const { clientX, clientY } = event;

    const factorX =
      Math.floor(((clientX - layout.left) * TILT_PRECISION) / layout.width) -
      TILE_MIDWAYS_COMPENSATION;

    const factorY =
      Math.floor(((clientY - layout.top) * TILT_PRECISION) / layout.height) -
      TILE_MIDWAYS_COMPENSATION;

    startTransform(() => {
      setTilt({ x: factorX, y: factorY });
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const updateLayout = (reference: RefObject<HTMLDivElement>) => {
    const element = reference.current;
    if (!element) {
      return;
    }
    const { top, height, left, width } = element.getBoundingClientRect();
    startTransform(() => {
      setLayout({ top: top, height: height, left: left, width: width });
    });
  };

  const handleScroll = useCallback((event: Event) => {
    if (event.isTrusted) {
      updateLayout(ref);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setDeg(`${(force / 10).toFixed(2)}deg`);
  }, [force]);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    element.style.transform = `perspective(20rem) rotateX(calc(${deg} * ${
      tilt.y * pointerEffectMap[pointerEffect]
    }))
    rotateY(calc(${deg} * ${-tilt.x * pointerEffectMap[pointerEffect]}))
    ${
      pointerEffect === 'attract'
        ? `translateZ(calc(${Math.max(
            Math.abs(tilt.x),
            Math.abs(tilt.y)
          )} * -0.2rem))`
        : ''
    }`;
  }, [tilt.x, tilt.y, pointerEffect, deg]);

  useEffect(() => {
    updateLayout(ref);
  }, [ref]);

  return (
    <Container>
      <Content
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Content>
    </Container>
  );
};

export default HoverTilt;
