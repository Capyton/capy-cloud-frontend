import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { Theme } from 'types';

type Props = {
  to: string;
};

const styles = {
  link: (theme: Theme) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${theme.color.primary};
    border-radius: ${theme.sizing(25)};
    height: ${theme.sizing(12)};
    padding: ${theme.sizing(0, 8)};
    color: ${theme.color.white};
    font-weight: 800;
    text-decoration: none;
    font-family: ${theme.font.primary};
  `,
};

export const Link = ({ children, to }: PropsWithChildren<Props>) => (
  <a target="_blank" href={to} css={styles.link}>
    {children}
  </a>
);
