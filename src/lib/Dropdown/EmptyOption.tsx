import { ReactElement } from 'react';
import { useThemeContext } from '../ThemeContext';
import { Option } from './styles';

interface IProps {
  content?: ReactElement;
}

const EmptyOption = (props: IProps) => {
  const { content } = props;
  const theme = useThemeContext();

  return (
    <Option
      gap={theme.layout.dropdown.options.gap}
      hoverBackground={'none'}
      dummy={true}
    >
      {content || theme.layout.dropdown.options.emptyListText}
    </Option>
  );
};

export default EmptyOption;
