export type ThemeColorName =
  | 'primary'
  | 'primaryLight'
  | 'background'
  | 'black'
  | 'darkGray'
  | 'gray'
  | 'divider'
  | 'lightGray'
  | 'white';

export type StaticThemeSettings = {
  color: Record<ThemeColorName, string>;
  font: {
    default: string;
    materialIcon: string;
    materialIconOutlined: string;
  };
  unit: number;
};

export type Theme = StaticThemeSettings & {
  sizing: (...sizes: (number | string | undefined)[]) => string;
};
