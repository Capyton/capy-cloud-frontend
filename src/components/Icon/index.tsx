import { memo, PropsWithChildren } from 'react';
import { IconProps } from './types';
import { styles } from './Icon.styles';

export const Icon = memo(
  ({
    className = '',
    color = 'inherit',
    name,
    semiBold,
    size = 'default',
    variant = 'filled',
    ...props
  }: PropsWithChildren<IconProps>) => (
    <i
      css={styles.icon(color, size, semiBold, variant)}
      className={`icon ${className}`}
      {...props}
    >
      {name}
    </i>
  )
);

export * from './types';
