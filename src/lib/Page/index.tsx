import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { StyledPage } from './styled';

const Page: FC<HTMLElement & any> = ({ className, children }) => {
  const theme = useThemeContext();

  return (
    <StyledPage theme={theme} role={'main'} className={className}>
      {children}
    </StyledPage>
  );
};

export default Page;
