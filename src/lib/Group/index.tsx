import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { IDirection, StyledGroup } from './styles';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: IDirection;
}

/**
 *
 * @param direction Control the flow direction of the items within.
 */
const Group: FC<IProps> = ({ children, direction = 'horizontal', ...rest }) => {
  const theme = useThemeContext();
  return (
    <StyledGroup
      corners={theme.corners}
      direction={direction}
      role={'group'}
      {...rest}
    >
      {children}
    </StyledGroup>
  );
};

export default Group;
