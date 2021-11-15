import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { StyledPage } from './styled';

const Page: FC = ({ children }) => {
  const theme = useThemeContext();

  return (
    <StyledPage theme={theme} role={'main'}>
      {children}
    </StyledPage>
  );
};

export default Page;
