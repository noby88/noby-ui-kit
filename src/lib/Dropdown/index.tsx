import React, { FC, useState } from 'react';
import Input from '../Input';
import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';
import { MainContainer, RotatingChevron } from './styles';

interface IProps {
  variant?: IVariant;
  textVariant?: IVariant;
  label?: string;
  labelVariant?: IVariant;
  placeholder?: string;
  placeholderVariant?: IVariant;
  chevron?: React.ReactNode;
}

/**
 *
 * @param variant Color variant. Effects the border.
 * @param textVariant Color variant. Effects the input text.
 * @param label String to be displayed as the label.
 * @param labelVariant Color variant. Effects the text in the label.
 * @param placeholder The text to be used as the placeholder text.
 * @param placeholderVariant Color variant. Effects the placeholder text.
 * @param orientation Flag to place the label and input inline or stacked on top of each other.
 * @param chevron A component to be rendered as the chevron.
 */
const Dropdown: FC<IProps> = ({ chevron, ...rest }) => {
  const theme = useThemeContext();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const chevronTheme = theme.layout.dropdown.chevron;

  const chevronContent = chevron || chevronTheme.content;

  const colorVariant = theme.colors[rest.variant || 'primary'];

  return (
    <div>
      <MainContainer
        onClick={toggleOpen}
        variant={colorVariant}
        theme={theme.layout.button}
        corners={theme.corners || 'none'}
      >
        <Input {...rest} />
        <RotatingChevron
          isOpen={isOpen}
          rotation={chevronTheme.rotation}
          chevronColor={colorVariant}
        >
          {chevronContent}
        </RotatingChevron>
      </MainContainer>
    </div>
  );
};

export default Dropdown;
