import { ReactElement, RefObject } from 'react';
import { renderToString } from 'react-dom/server';

export type IValue = string | number;

export interface IOption {
  value: IValue;
  content: ReactElement | string | number;
}

const parser = new DOMParser();

export const getNodeText = (node: ReactElement | string | number): string => {
  if (['string', 'number'].includes(typeof node)) return node?.toString() || '';
  if (node instanceof Array) return node.map(getNodeText).join('');
  if (typeof node === 'object')
    return (
      parser.parseFromString(renderToString(node), 'text/html').body
        .textContent || ''
    );
  return '';
};

export const containsAllWords = (
  optionContent: ReactElement | string | number,
  search: string
) =>
  search
    .toLowerCase()
    .split(' ')
    .every((searchWord) =>
      getNodeText(optionContent).toLowerCase().includes(searchWord)
    );

export const keyboardEvent = (
  event: KeyboardEvent,
  inputRef: RefObject<HTMLInputElement>,
  optionsRef: RefObject<(HTMLDivElement | null)[]>,
  options: IOption[],
  handleSelect: (value: IValue) => void,
  showDropdownContent: () => void,
  hideDropdownContent: () => void
) => {
  if ([' ', 'Enter', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
    document.activeElement === inputRef.current || event.preventDefault();
    showDropdownContent();
  }
  const selectedIndex =
    optionsRef.current?.findIndex((ref) => ref === document.activeElement) ??
    -1;
  if (event.key === 'ArrowDown') {
    if (selectedIndex < (optionsRef.current?.length || 0) - 1) {
      optionsRef.current?.[selectedIndex + 1]?.focus();
    } else {
      optionsRef.current?.[0]?.focus();
    }
  }
  if (event.key === 'ArrowUp') {
    if (selectedIndex > 0) {
      optionsRef.current?.[selectedIndex - 1]?.focus();
    } else {
      optionsRef.current?.[optionsRef.current.length - 1]?.focus();
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
};
