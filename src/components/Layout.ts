import styled from 'styled-components';
import { IElevation, IShadowVariant, IVariant } from '../lib/theme';

export const ShowInline = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
`;

export const CenterText = styled.p`
  text-align: center;
`;

export const variants: IVariant[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
];

export const shadowVariants: IShadowVariant[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'gray',
];

export const elevations: IElevation[] = [1, 2, 3, 4];
