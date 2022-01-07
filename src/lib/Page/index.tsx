import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { StyledPage } from './styled';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Page: FC<IProps> = ({ children, ...rest }) => {
  const theme = useThemeContext();

  return (
    <StyledPage theme={theme} role={'main'} {...rest}>
      {children}
    </StyledPage>
  );
};

export default Page;
