import { css } from '@emotion/react';
import { ComponentProps, memo, PropsWithChildren } from 'react';
import { Theme } from '../../types';
import { TypographyProps } from '../Typography';

const sizes: Record<
  NonNullable<IconProps['size']>,
  (theme: Theme) => string
> = {
  default: (theme: Theme) => theme.sizing(5),
};

type IconVariant = 'filled' | 'outlined';

const getIconFont = (theme: Theme, variant?: IconVariant) =>
  variant === 'outlined'
    ? theme.font.materialIconOutlined
    : theme.font.materialIcon;

const styles = {
  icon:
    (
      color: NonNullable<TypographyProps['color']>,
      size: NonNullable<IconProps['size']>,
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

export const icons = ['lightbulb', 'search', 'undo'] as const;

export type IconNames = typeof icons[number];

export type IconProps = ComponentProps<'i'> & {
  name: IconNames;
  className?: string;
  color?: TypographyProps['color'];
  size?: 'default';
  variant?: IconVariant;
};

export const Icon = memo(
  ({
    className = '',
    color = 'inherit',
    name,
    size = 'default',
    variant = 'filled',
    ...props
  }: PropsWithChildren<IconProps>) => (
    <i
      css={styles.icon(color, size, variant)}
      className={`icon ${className}`}
      {...props}
    >
      {name}
    </i>
  )
);
