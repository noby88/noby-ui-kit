import styled from 'styled-components';
import { ITheme } from '../theme';

export const StyledPage = styled.main<{ theme: ITheme }>`
  ${(props) => `
    background-color: ${props.theme.layout.surface.base};
    padding: ${props.theme.layout.page.padding};
  `}
`;
