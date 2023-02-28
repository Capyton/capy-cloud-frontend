export type ThemeColorName = 'black' | 'white';

export type StaticThemeSettings = {
  color: Record<ThemeColorName, string>;
  font: string;
  unit: number;
};

export type Theme = StaticThemeSettings & {
  sizing: (...sizes: (number | string)[]) => string;
};
