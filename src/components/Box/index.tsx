import { forwardRef, HTMLProps, PropsWithChildren } from 'react';
import { boxStyles } from './Box.styles';
import { BoxProps } from './types';

export const Box = forwardRef<
  HTMLDivElement,
  PropsWithChildren<BoxProps> & HTMLProps<HTMLDivElement>
>(
  (
    {
      children,
      display = 'block',
      alignItems = 'stretch',
      justifyContent = 'flex-start',
      flexDirection = 'row',
      flexWrap = 'nowrap',
      gap,
      fullWidth = false,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      width,
      height,
      radius,
      background,
      position,
      top,
      right,
      bottom,
      left,
      cursor,
      transform,
      zIndex,
      color,
      maxHeight,
      maxWidth,
      userSelect,
      filter,
      minWidth,
      minHeight,
      boxShadow,
      ...attributes
    },
    ref
  ) => (
    <div
      css={boxStyles({
        display,
        alignItems,
        justifyContent,
        flexDirection,
        flexWrap,
        gap,
        fullWidth,
        p,
        px,
        py,
        pt,
        pr,
        pb,
        pl,
        m,
        mx,
        my,
        mt,
        mr,
        mb,
        ml,
        width,
        height,
        radius,
        background,
        position,
        top,
        right,
        bottom,
        left,
        cursor,
        transform,
        zIndex,
        color,
        maxHeight,
        maxWidth,
        userSelect,
        filter,
        minWidth,
        minHeight,
        boxShadow,
      })}
      {...attributes}
      ref={ref}
    >
      {children}
    </div>
  )
);
