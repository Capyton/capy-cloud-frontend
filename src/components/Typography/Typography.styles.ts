import { css } from '@emotion/react';
import { Theme } from '../../types';
import { TypographyVariants, TypographyProps } from './types';

type TypographyStyleProps = {
  regular?: TypographyProps['regular'];
  medium?: TypographyProps['medium'];
  semiBold?: TypographyProps['semiBold'];
  bold?: TypographyProps['bold'];
  color?: TypographyProps['color'];
  fontSize: number;
  lineHeight: number;
  noWrap?: boolean;
};

type TypographyMap = Record<TypographyVariants, TypographyStyleProps>;

export const typographyMap: TypographyMap = {
  bodyText1: {
    fontSize: 4,
    semiBold: true,
    lineHeight: 6,
  },
  bodyText2: {
    fontSize: 3.5,
    medium: true,
    lineHeight: 5,
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
    lineHeight,
    noWrap,
  }: TypographyStyleProps) =>
  (theme: Theme) =>
    css`
      font-family: ${theme.font.default};
      font-size: ${theme.sizing(fontSize)};
      line-height: ${theme.sizing(lineHeight)};
      color: ${color === 'inherit' ? color : theme.color[color]};
      ${regular && 'font-weight: 400'};
      ${medium && 'font-weight: 500'};
      ${semiBold && 'font-weight: 600'};
      ${bold && 'font-weight: 700'};
      ${noWrap && 'white-space: nowrap'};
    `;

export const typographyStyles = {
  bodyText1: (props: Partial<TypographyStyleProps>) =>
    typographyStyle({ ...typographyMap.bodyText1, ...props }),
  bodyText2: (props: Partial<TypographyStyleProps>) =>
    typographyStyle({ ...typographyMap.bodyText2, ...props }),
};
