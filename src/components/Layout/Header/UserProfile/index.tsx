import { css } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Theme } from 'types';
import { Box } from 'components/Box';
import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';
import { isTypeOf } from 'utils';

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

const data = [
  { name: '5AJ9b2465k08Y9742032c', canCopy: true },
  { name: 'Загружено файлов', value: 54 },
  { name: 'Баланс', value: '354 TON' },
  { name: 'SML', value: 100 },
];

export const UserProfile = () => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  const handleCopy = useCallback(
    (value: unknown) => () => {
      if (!isTypeOf(value, 'undefined')) {
        navigator.clipboard.writeText(String(value));
      }
    },
    []
  );

  useEffect(() => {
    if (isOpened) {
      const listener = (event: Event) => {
        if (
          !contentRef.current ||
          contentRef.current.contains(event.target as Node) ||
          ref.current?.contains(event.target as Node)
        ) {
          return;
        }

        handleToggle();
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      document.addEventListener('scroll', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
        document.removeEventListener('scroll', listener);
      };
    }
  }, [handleToggle, isOpened]);

  return (
    <Box position="relative">
      <Box
        display="inline-flex"
        alignItems="center"
        gap={1}
        cursor="pointer"
        onClick={handleToggle}
        ref={ref}
      >
        <div css={styles.container}>
          <img css={styles.avatar} src="/images/avatar.png" alt="avatar" />
        </div>

        <Icon color="primary" name="expand_more" />
      </Box>

      {isOpened && (
        <Box
          display="flex"
          flexDirection="column"
          position="absolute"
          right="0px"
          py={4}
          px={3}
          width={60}
          zIndex={1}
          gap={2.5}
          boxShadow="0px 4px 9px rgba(0, 0, 0, 0.07)"
          radius={2}
          background="white"
          ref={contentRef}
        >
          {data.map((item, index) => (
            <Box display="flex" justifyContent="space-between" key={index}>
              <Typography
                color={item.canCopy ? 'primary' : undefined}
                semiBold={item.canCopy}
                component="span"
                variant="bodyText2"
              >
                {item.name}
              </Typography>

              {!isTypeOf(item.value, 'undefined') && (
                <Typography
                  color="darkGray"
                  component="span"
                  variant="bodyText2"
                >
                  {item.value}
                </Typography>
              )}

              {item.canCopy && (
                <Box cursor="pointer" onClick={handleCopy(item.value)}>
                  <Icon
                    semiBold
                    color="primary"
                    name="content_copy"
                    size="small"
                  />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
