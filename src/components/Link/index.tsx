import { Link as RouterLink } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

type Props = {
  to: string;
  isExternal?: boolean;
};

const styles = {
  link: css`
    display: inline-block;
    & > a {
      color: inherit;
      text-decoration: none;
    }
  `,
};

export const Link = ({
  children,
  isExternal,
  to,
}: PropsWithChildren<Props>) => {
  if (isExternal) {
    return (
      <div css={styles.link}>
        <a target="_blank" href={to}>
          {children}
        </a>
      </div>
    );
  }

  return (
    <div css={styles.link} className="link">
      <RouterLink to={to}>{children}</RouterLink>
    </div>
  );
};
