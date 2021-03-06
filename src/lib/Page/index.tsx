import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { StyledPage } from './styled';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Page: FC<IProps> = ({ children, ...rest }) => {
  const theme = useThemeContext();

  return (
    <StyledPage
      pageTheme={theme.layout.page}
      surface={theme.surface[theme.layout.page.background]}
      role={'main'}
      {...rest}
    >
      {children}
    </StyledPage>
  );
};

export default Page;
