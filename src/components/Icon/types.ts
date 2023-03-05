import { ComponentProps } from 'react';
import { TypographyProps } from 'components/Typography';

export const icons = [
  'content_copy',
  'expand_more',
  'lightbulb',
  'search',
  'undo',
] as const;

export type IconNames = typeof icons[number];

export type IconVariant = 'filled' | 'outlined';

export type IconProps = ComponentProps<'i'> & {
  name: IconNames;
  className?: string;
  color?: TypographyProps['color'];
  semiBold?: boolean;
  size?: 'small' | 'default';
  variant?: IconVariant;
};
