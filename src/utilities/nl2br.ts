import { ReactElement, createElement } from 'react';

const newlineRegex = /(\r\n|\r|\n)/g;

export const nl2br = (
  str: string,
  wbr: boolean = false,
): (string | ReactElement)[] => {
  return str.split(newlineRegex).map((line, index) => {
    if (line.match(newlineRegex)) {
      return createElement(wbr ? 'wbr' : 'br', { key: index });
    }

    return line;
  });
};
