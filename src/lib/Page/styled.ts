import styled from 'styled-components';
import { IPageTheme } from '../theme';

export const StyledPage = styled.main<{
  pageTheme: IPageTheme;
  surface: string;
}>`
  ${(props) => `
    background-color: ${props.surface};
    padding: ${props.pageTheme.padding};
    max-width: ${props.pageTheme.maxWidth};
    margin-left: auto;
    margin-right: auto;
  `}
`;
