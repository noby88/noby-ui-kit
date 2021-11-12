import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { StyledPage } from './styled';

const Page: FC = ({ children }) => {
  const theme = useThemeContext();

  return <StyledPage theme={theme}>{children}</StyledPage>;
};

export default Page;
