import { useInsertionEffect } from 'react';

const appendStaticLink = () => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://fonts.gstatic.com/';
  // @ts-ignore
  link.crossOrigin = true;

  return link;
};

const appendStylesheet = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?' +
    'family=Source Sans Pro:wght@300;400;600;700' +
    '&family=Material Icons' +
    '&family=Material Icons Outlined' +
    '&display=swap';
  // @ts-ignore
  link.crossOrigin = true;
  link.as = 'style';

  return link;
};

export const useIcons = () => {
  useInsertionEffect(() => {
    const staticLink = appendStaticLink();
    const stylesheet = appendStylesheet();

    document.head.prepend(staticLink, stylesheet);
  }, []);
};
