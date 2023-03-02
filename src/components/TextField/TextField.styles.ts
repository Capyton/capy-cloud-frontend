import { css } from '@emotion/react';
import { typographyStyles } from 'components/Typography';
import { Theme } from 'types';

export const styles = {
  icon: (theme: Theme) => css`
    margin-right: ${theme.sizing(6)};
  `,
  input: (theme: Theme) => css`
    ${typographyStyles.bodyText2({ color: 'gray' })(theme)};
    background: transparent;
    outline: none;
    border: none;
  `,
};
