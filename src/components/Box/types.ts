import { ThemeColorName } from 'types';

type Common = 'normal' | 'stretch' | 'unset';

type AlignItems =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline';

type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type BoxSpacingProps = {
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;

  m?: number | string;
  mx?: number | string;
  my?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
};

type BoxContainerProps = {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block';
  alignItems?: AlignItems | Common;
  justifyContent?: JustifyContent | Common;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap';
  gap?: number;

  width?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;

  height?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;

  radius?: number;
};

type BoxPositionProps = {
  position?: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky';
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  transform?: string;
  zIndex?: number;
};

type Cursor = 'auto' | 'default' | 'none' | 'pointer';

type UserSelect = 'none' | 'auto' | 'text' | 'all';

export type BoxProps = BoxSpacingProps &
  BoxContainerProps &
  BoxPositionProps & {
    background?: ThemeColorName;
    fullWidth?: boolean;
    cursor?: Cursor;
    filter?: string;
    userSelect?: UserSelect;
    color?: string;
  };
