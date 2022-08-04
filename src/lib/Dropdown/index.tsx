import {
  ChangeEventHandler,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Input from '../Input';
import { IVariant } from '../theme';
import { useThemeContext } from '../ThemeContext';
import {
  CustomContainer,
  DropdownContainer,
  MainContainer,
  Option,
  Options,
  RotatingChevron,
} from './styles';
import { containsAllWords } from './utils';

type IValue = string | number;

interface IOption {
  value: IValue;
  content: ReactElement | string | number;
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
  selectedValue: IValue;
  onSelect?: (value: IValue) => void;
  searchable?: boolean;
  disabled?: boolean;
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
 * @param options An array of options. { value: string | number, content: React.ReactNode}[].
 * @param selectedValue The selected value from the options.
 * @param onSelect A function receiving the selected items value.
 * @param searchable Flag for the main element to act as a search input.
 * @param disabled Flag to render a disabled dropdown.
 */
const Dropdown: FC<IProps> = ({
  chevron,
  options,
  selectedValue,
  onSelect,
  searchable = false,
  ...rest
}) => {
  const theme = useThemeContext();
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState<string>('');

  const checkOutsideClick = (event: PointerEvent) => {
    if (
      dropdownContainerRef.current &&
      !dropdownContainerRef.current?.contains((event as any)?.target)
    ) {
      hideDropdownContent();
    }
  };

  const hideDropdownContent = () => {
    setIsOpen(false);
    setSearch('');
    document.removeEventListener('pointerdown', checkOutsideClick);
  };

  const showDropdownContent = () => {
    if (rest.disabled) {
      return;
    }
    setIsOpen(true);
    document.addEventListener('pointerdown', checkOutsideClick);
  };

  const toggleOpen = () =>
    isOpen ? hideDropdownContent() : showDropdownContent();

  const handleSelect = (value: IValue) => {
    if (rest.disabled) {
      return;
    }
    onSelect?.(value);
    hideDropdownContent();
  };

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  useEffect(
    () => document.removeEventListener('pointerdown', checkOutsideClick),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (searchable && inputRef && isOpen) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [searchable, isOpen, inputRef]);

  const handleKeyPressed = useCallback((event: KeyboardEvent) => {
    if ([' ', 'Enter', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      document.activeElement === inputRef.current || event.preventDefault();
      showDropdownContent();
    }
    const selectedIndex = optionsRef.current.findIndex(
      (ref) => ref === document.activeElement
    );
    if (event.key === 'ArrowDown') {
      if (selectedIndex < optionsRef.current.length - 1) {
        optionsRef.current[selectedIndex + 1]?.focus();
      } else {
        optionsRef.current[0]?.focus();
      }
    }
    if (event.key === 'ArrowUp') {
      if (selectedIndex > 0) {
        optionsRef.current[selectedIndex - 1]?.focus();
      } else {
        optionsRef.current[optionsRef.current.length - 1]?.focus();
      }
    }
    if ([' ', 'Enter'].includes(event.key)) {
      if (selectedIndex > -1) {
        handleSelect(options[selectedIndex].value);
        hideDropdownContent();
      }
    }
    if (event.key === 'Escape') {
      hideDropdownContent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnFocus = () =>
    document.addEventListener('keydown', handleKeyPressed);

  const handleOnBlur = () => {
    document.removeEventListener('keydown', handleKeyPressed);
  };

  const chevronTheme = theme.layout.dropdown.chevron;
  const chevronContent = chevron || chevronTheme.content;
  const colorVariant = theme.colors[rest.variant || 'primary'];

  const optionsTheme = theme.layout.dropdown.options;
  const offset = `calc(${optionsTheme.offset} + ${mainContainerRef.current?.clientHeight}px)`;

  const selectedItem = options.find((option) => option.value === selectedValue);

  // Ternary operator to avoid computation if not searchable
  const filteredOptions = searchable
    ? options.filter((option) => containsAllWords(option.content, search))
    : options;

  return (
    <DropdownContainer ref={dropdownContainerRef}>
      <MainContainer
        ref={mainContainerRef}
        onClick={toggleOpen}
        variant={colorVariant}
        theme={theme.layout.button}
        corners={theme.corners || 'none'}
        disabled={rest.disabled}
        role={'listbox'}
        aria-disabled={rest.disabled}
        tabIndex={0}
        onFocus={rest.disabled ? undefined : handleOnFocus}
        onBlur={rest.disabled ? undefined : handleOnBlur}
      >
        {['number', 'string', 'undefined'].includes(
          typeof selectedItem?.content
        ) ||
        (searchable && isOpen) ? (
          <Input
            ref={inputRef}
            value={
              searchable
                ? search
                : (selectedItem as IOption)?.content?.toString() || ''
            }
            onChange={handleSearch}
            {...rest}
          />
        ) : (
          <CustomContainer
            inputTheme={theme.layout.input}
            corners={theme.corners}
            variant={theme.colors[rest.variant || 'primary']}
            surface={
              theme.surface[
                rest.disabled
                  ? theme.layout.input.disabledBackground
                  : theme.layout.input.background
              ]
            }
            disabled={rest.disabled}
          >
            {selectedItem?.content}
          </CustomContainer>
        )}
        <RotatingChevron
          isOpen={isOpen}
          rotation={chevronTheme.rotation}
          axis={chevronTheme.rotationAxis}
          chevronColor={colorVariant}
          duration={theme.transitionsTime}
          disabled={rest.disabled}
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
        aria-hidden={!isOpen}
      >
        {filteredOptions.map((option, index) => (
          <Option
            key={option.value}
            ref={(element) => {
              optionsRef.current[index] = element;
            }}
            hoverBackground={theme.surface.high}
            gap={optionsTheme.gap}
            onClick={() => handleSelect(option.value)}
            tabIndex={0}
            onFocus={rest.disabled ? undefined : handleOnFocus}
            onBlur={rest.disabled ? undefined : handleOnBlur}
            role={'option'}
          >
            {option.content}
          </Option>
        ))}
      </Options>
    </DropdownContainer>
  );
};

export default Dropdown;
