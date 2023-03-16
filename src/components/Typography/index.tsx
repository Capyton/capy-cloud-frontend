import { PropsWithChildren } from 'react';
import { typographyStyle, typographyMap } from './Typography.styles';
import { TypographyProps } from './types';

const TypographyTags: Record<
  NonNullable<TypographyProps['variant']>,
  keyof JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  subtitle1: 'h5',
  subtitle2: 'h6',
  bodyText1: 'p',
};

export const Typography = ({
  children,
  component,
  variant = 'subtitle2',
  ...rest
}: PropsWithChildren<TypographyProps>) => {
  const TypographyTag = component || TypographyTags[variant];

  return (
    <TypographyTag
      css={typographyStyle({ ...typographyMap[variant], ...rest })}
      className={variant}
    >
      {children}
    </TypographyTag>
  );
};

export * from './types';
export * from './Typography.styles';
