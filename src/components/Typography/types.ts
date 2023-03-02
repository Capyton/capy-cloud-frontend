import { ThemeColorName } from 'types';

export type TypographyVariants = 'bodyText1' | 'bodyText2';

export type TypographyProps = {
  /**
   * Color of text
   */
  color?: ThemeColorName | 'inherit';
  /**
   * HTML tag to use for typography container, e.g `div`, `span`, etc.
   */
  component?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariants;
  /**
   *  Restrict text wrap
   * */
  noWrap?: boolean;
  /**
   * forced fontWeight=400
   * */
  regular?: boolean;
  /**
   * forced fontWeight=500
   * */
  medium?: boolean;
  /**
   * forced fontWeight=600
   * */
  semiBold?: boolean;
  /**
   * forced fontWeight=700
   */
  bold?: boolean;
};
