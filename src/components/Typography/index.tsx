import { PropsWithChildren } from 'react';
import { ThemeColorName } from 'types';
import { typographyStyle, typographyMap } from './Typography.styles';
import { TypographyVariants } from './types';

type TypographyProps = {
  color?: ThemeColorName | 'inherit';
  nowrap?: boolean;
  notSelectable?: boolean;
  variant?: TypographyVariants;
};

const TypographyTags: Record<
  NonNullable<TypographyProps['variant']>,
  keyof JSX.IntrinsicElements
> = {
  bodyText1: 'p',
  bodyText2: 'p',
};

export const Typography = ({
  children,
  variant = 'bodyText1',
  ...rest
}: PropsWithChildren<TypographyProps>) => {
  const TypographyTag = TypographyTags[variant];

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
