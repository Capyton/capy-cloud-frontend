import { css } from '@emotion/react';
import { Theme } from 'types';

export const styles = {
  header: (theme: Theme) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${theme.sizing(18)};
    padding: ${theme.sizing(0, 8)};
    gap: ${theme.sizing(4)};
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 1px;
      background: ${theme.color.divider};
    }
  `,
};
