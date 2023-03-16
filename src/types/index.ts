export type ThemeColorName =
  | 'primary'
  | 'primaryLight'
  | 'background'
  | 'black'
  | 'mateBlack'
  | 'darkGray'
  | 'gray'
  | 'divider'
  | 'lightGray'
  | 'white';

export type StaticThemeSettings = {
  color: Record<ThemeColorName, string>;
  font: {
    primary: string;
    secondary: string;
  };
  unit: number;
};

export type Theme = StaticThemeSettings & {
  sizing: (...sizes: (number | string | undefined)[]) => string;
};
