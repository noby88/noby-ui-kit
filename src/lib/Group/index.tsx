import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import { IDirection, StyledGroup } from './styles';

interface IProps {
  direction?: IDirection;
}

/**
 *
 * @param direction Control the flow direction of the items within.
 */
const Group: FC<IProps> = ({ children, direction = 'horizontal' }) => {
  const theme = useThemeContext();
  return (
    <StyledGroup theme={theme} direction={direction} role={'group'}>
      {children}
    </StyledGroup>
  );
};

export default Group;
