import { css } from '@emotion/react';
import { TypographyProps } from 'components/Typography';
import { Theme } from 'types';
import { IconProps, IconVariant } from './types';

const sizes: Record<
  NonNullable<IconProps['size']>,
  (theme: Theme) => string
> = {
  small: (theme) => theme.sizing(4),
  default: (theme) => theme.sizing(5),
};

const getIconFont = (theme: Theme, variant?: IconVariant) =>
  variant === 'outlined'
    ? theme.font.materialIconOutlined
    : theme.font.materialIcon;

export const styles = {
  icon:
    (
      color: NonNullable<TypographyProps['color']>,
      size: NonNullable<IconProps['size']>,
      semiBold?: boolean,
      variant?: IconVariant
    ) =>
    (theme: Theme) =>
      css`
        position: relative;
        font-family: ${getIconFont(theme, variant)};
        font-size: ${sizes[size](theme)};
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
        ${semiBold && 'font-weight: 600;'}
        line-height: 1;
        speak: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        ${color &&
        `color: ${color !== 'inherit' ? theme.color[color] : color};`}

        width: ${sizes[size](theme)};
        height: ${sizes[size](theme)};
        font-feature-settings: 'liga';
        display: inline-flex;
        justify-content: center;
        align-items: center;
      `,
};
