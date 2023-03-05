import { css } from '@emotion/react';
import { typographyStyles } from 'components/Typography';
import { Theme } from 'types';

export const styles = {
  icon: (theme: Theme) => css`
    margin-right: ${theme.sizing(6)};
    height: ${theme.sizing(5)};
  `,
  input: (theme: Theme) => css`
    ${typographyStyles.bodyText2({ color: 'gray' })(theme)};
    width: 100%;
    background: transparent;
    height: ${theme.sizing(10)};
    outline: none;
    border: none;
  `,
};
