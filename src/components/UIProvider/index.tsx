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
      return sizes.reduce<string>(
        (accumulator, size) =>
          `${accumulator}${
            typeof size === 'string' ? size : `${size * unit}px`
          } `,
        ''
      );
    },
  };
};

const defaultThemeSettings: StaticThemeSettings = {
  color: {
    black: '#000000',
    white: '#ffffff',
  },
  font: "'Roboto Flex', sans-serif",
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
