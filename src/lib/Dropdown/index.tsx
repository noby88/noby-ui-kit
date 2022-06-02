import React, { FC, useRef, useState } from 'react';
import Input from '../Input';
import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';
import {
  DropdownContainer,
  MainContainer,
  Option,
  Options,
  RotatingChevron,
} from './styles';

interface IOption {
  value: string | number;
  content: React.ReactNode;
}

interface IProps {
  variant?: IVariant;
  textVariant?: IVariant;
  label?: string;
  labelVariant?: IVariant;
  placeholder?: string;
  placeholderVariant?: IVariant;
  chevron?: React.ReactNode;
  options: IOption[];
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
const Dropdown: FC<IProps> = ({ chevron, options, ...rest }) => {
  const theme = useThemeContext();
  const mainContainerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const chevronTheme = theme.layout.dropdown.chevron;
  const chevronContent = chevron || chevronTheme.content;
  const colorVariant = theme.colors[rest.variant || 'primary'];

  const optionsTheme = theme.layout.dropdown.options;
  const offset = `calc(${optionsTheme.offset} + ${mainContainerRef.current?.clientHeight}px)`;

  return (
    <DropdownContainer>
      <MainContainer
        ref={mainContainerRef}
        onClick={toggleOpen}
        variant={colorVariant}
        theme={theme.layout.button}
        corners={theme.corners || 'none'}
        role={'listbox'}
      >
        <Input {...rest} />
        <RotatingChevron
          isOpen={isOpen}
          rotation={chevronTheme.rotation}
          axis={chevronTheme.rotationAxis}
          chevronColor={colorVariant}
          duration={theme.transitionsTime}
        >
          {chevronContent}
        </RotatingChevron>
      </MainContainer>
      <Options
        isOpen={isOpen}
        background={theme.surface.middle}
        corners={theme.corners}
        offset={offset}
        duration={theme.transitionsTime}
        boxShadow={optionsTheme.boxShadow}
        zIndex={optionsTheme.zIndex}
        className={isOpen ? 'show' : undefined}
      >
        {options.map((option) => (
          <Option
            key={option.value}
            hoverBackground={theme.surface.high}
            gap={optionsTheme.gap}
          >
            {option.content}
          </Option>
        ))}
      </Options>
    </DropdownContainer>
  );
};

export default Dropdown;
