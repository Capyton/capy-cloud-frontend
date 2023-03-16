import { css } from '@emotion/react';
import { Theme } from '../../types';
import { TypographyVariants, TypographyProps } from './types';

type TypographyStyleProps = {
  regular?: TypographyProps['regular'];
  medium?: TypographyProps['medium'];
  semiBold?: TypographyProps['semiBold'];
  bold?: TypographyProps['bold'];
  color?: TypographyProps['color'];
  fontFamily?: TypographyProps['fontFamily'];
  textAlign?: TypographyProps['textAlign'];
  fontSize: number;
  lineHeight: number;
  noWrap?: boolean;
};

type TypographyMap = Record<TypographyVariants, TypographyStyleProps>;

export const typographyMap: TypographyMap = {
  h1: {
    fontSize: 20,
    regular: true,
    lineHeight: 27,
  },
  h2: {
    fontSize: 15,
    bold: true,
    lineHeight: 22,
  },
  subtitle1: {
    fontSize: 10,
    bold: true,
    lineHeight: 13,
  },
  subtitle2: {
    fontSize: 6,
    regular: true,
    lineHeight: 8,
  },
  bodyText1: {
    fontSize: 4.5,
    regular: true,
    lineHeight: 6,
  },
};

export const typographyStyle =
  ({
    regular,
    medium,
    semiBold,
    bold,
    color = 'inherit',
    fontSize,
    fontFamily = 'primary',
    lineHeight,
    noWrap,
    textAlign = 'left',
  }: TypographyStyleProps) =>
  (theme: Theme) =>
    css`
      font-family: ${theme.font[fontFamily]};
      font-size: ${theme.sizing(fontSize)};
      line-height: ${theme.sizing(lineHeight)};
      color: ${color === 'inherit' ? color : theme.color[color]};
      ${textAlign && `text-align: ${textAlign}`};
      ${regular && 'font-weight: 400'};
      ${medium && 'font-weight: 500'};
      ${semiBold && 'font-weight: 600'};
      ${bold && 'font-weight: 700'};
      ${noWrap && 'white-space: nowrap'};
    `;

export const typographyStyles = {
  h1: (props: Partial<TypographyStyleProps>) =>
    typographyStyle({ ...typographyMap.h1, ...props }),
  subtitle2: (props: Partial<TypographyStyleProps>) =>
    typographyStyle({ ...typographyMap.subtitle2, ...props }),
};
