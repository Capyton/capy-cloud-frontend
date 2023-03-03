import { css } from '@emotion/react';
import { Theme } from 'types';
import { isTypeOf } from 'utils';
import { BoxProps } from './types';

export const boxStyles =
  ({
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
    borderRadius,
    color,
    maxHeight,
    maxWidth,
    userSelect,
    filter,
    minWidth,
    minHeight,
  }: BoxProps) =>
  (theme: Theme) =>
    css`
      ${display && `display: ${display};`}
      ${alignItems && `align-items: ${alignItems};`}
      ${justifyContent && `justify-content: ${justifyContent};`}
      ${flexDirection && `flex-direction: ${flexDirection};`}
      ${flexWrap && `flex-wrap: ${flexWrap};`}
      ${gap && `gap: ${theme.sizing(gap)};`}
      
      ${width && `width: ${theme.sizing(width)};`}
      ${maxWidth && `max-width: ${theme.sizing(maxWidth)};`}
      ${minWidth && `min-width: ${theme.sizing(minWidth)};`}
      
      ${height && `height: ${theme.sizing(height)};`}
      ${maxHeight && `max-height: ${theme.sizing(maxHeight)};`}
      ${minHeight && `min-height: ${theme.sizing(minHeight)};`}
      

      ${fullWidth && 'width: 100%;'}

      ${!isTypeOf(p || py || pt, 'undefined') &&
      `padding-top: ${theme.sizing(p || py || pt)};`};
      ${!isTypeOf(p || py || pb, 'undefined') &&
      `padding-bottom: ${theme.sizing(p || py || pb)};`}
      ${!isTypeOf(p || px || pl, 'undefined') &&
      `padding-left: ${theme.sizing(p || px || pl)};`}
      ${!isTypeOf(p || px || pr, 'undefined') &&
      `padding-right: ${theme.sizing(p || px || pr)};`}

      ${!isTypeOf(m || my || mt, 'undefined') &&
      `margin-top: ${theme.sizing(m || my || mt)};`}
      ${!isTypeOf(m || my || mb, 'undefined') &&
      `margin-bottom: ${theme.sizing(m || my || mb)};`}
      ${!isTypeOf(m || mx || ml, 'undefined') &&
      `margin-left: ${theme.sizing(m || mx || ml)};`}
      ${!isTypeOf(m || mx || mr, 'undefined') &&
      `margin-right: ${theme.sizing(m || mx || mr)};`}
        
      ${radius && `border-radius: ${theme.sizing(radius)};`}
      ${background && `background: ${theme.color[background]};`}
      
      ${position && `position: ${position};`}
      ${top && `top: ${theme.sizing(top)};`}
      ${right && `right: ${theme.sizing(right)};`}
      ${bottom && `bottom: ${theme.sizing(bottom)};`}
      ${left && `left: ${theme.sizing(left)};`}
      ${transform && `transform: ${theme.sizing(transform)};`}
      ${zIndex && `z-index: ${zIndex};`}
      
      ${borderRadius && `border-radius: ${theme.sizing(borderRadius)};`}
      ${color && `color: ${color};`}
      ${cursor && `cursor: ${cursor};`}
      ${filter && `filter: ${filter};`}
      ${userSelect && `user-select: ${userSelect};`}
    `;
