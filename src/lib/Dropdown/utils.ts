import { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';

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
