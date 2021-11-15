import styled from 'styled-components';
import { IElevation, IVariant } from '../lib/theme';

export const ShowInline = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
`;

export const ShowGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
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
  'dark',
  'light',
];

export const elevations: IElevation[] = [1, 2, 3, 4];
