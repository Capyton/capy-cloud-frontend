import { css } from '@emotion/react';
import { Theme } from 'types';
import { Box } from 'components/Box';
import { Icon } from 'components/Icon';

const styles = {
  container: (theme: Theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.sizing(10)};
    height: ${theme.sizing(10)};
    border: 1px solid ${theme.color.primary};
    border-radius: ${theme.sizing(25)};
    overflow: hidden;
  `,
  avatar: (theme: Theme) => css`
    width: ${theme.sizing(10)};
    height: ${theme.sizing(10)};
  `,
};

export const UserProfile = () => (
  <Box display="inline-flex" alignItems="center" gap={1} cursor="pointer">
    <div css={styles.container}>
      <img css={styles.avatar} src="/images/avatar.png" alt="avatar" />
    </div>

    <Icon color="primary" name="expand_more" />
  </Box>
);
