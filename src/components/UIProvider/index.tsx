import { PropsWithChildren } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { StaticThemeSettings, Theme } from 'types';
import { styles } from './Global.styles';

const makeTheme = (themeSettings: StaticThemeSettings): Theme => {
  const { unit, ...theme } = themeSettings;

  return {
    ...theme,
    unit,
    sizing: (...sizes) => {
      return sizes.reduce<string>((accumulator, size) => {
        if (size === undefined) {
          return `${accumulator}`;
        }

        return `${accumulator}${
          typeof size === 'string' ? size : `${size * unit}px`
        } `;
      }, '');
    },
  };
};

const defaultThemeSettings: StaticThemeSettings = {
  color: {
    primary: 'rgb(82, 110, 211)',
    primaryLight: 'rgb(235, 239, 255)',
    background: 'rgb(251, 251, 251)',
    black: 'rgb(0, 0, 0)',
    mateBlack: 'rgb(32, 32, 32)',
    darkGray: 'rgb(98, 98, 98)',
    gray: 'rgb(188, 188, 188)',
    divider: 'rgb(223, 223, 223)',
    lightGray: 'rgb(241, 241, 241)',
    white: 'rgb(255, 255, 255)',
  },
  font: {
    primary: "'Manrope', sans-serif",
    secondary: "'Climate Crisis', cursive",
  },
  unit: 4,
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const theme: Theme = makeTheme(defaultThemeSettings);

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <Global styles={styles.global(theme)} />
    </>
  );
};
