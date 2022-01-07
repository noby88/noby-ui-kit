import styled from 'styled-components';
import Card from '../lib/Card';
import { IElevation, IVariant } from '../lib/theme';

export const ShowInline = styled.div<{ min?: string }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.min || '8rem'}, 1fr)
  );
`;

export const ShowGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CenterText = styled.p`
  text-align: center;
`;

export const UsageCard = styled(Card)`
  color: grey;
  background-image: linear-gradient(
      112.5deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(
      157.5deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(
      313deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(268deg, rgb(195, 195, 195), rgb(228, 228, 228));
  background-blend-mode: overlay, overlay, overlay, normal;
`;

export const variants: IVariant[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'dark',
  'light',
];

export const elevations: IElevation[] = [1, 2, 3, 4];
