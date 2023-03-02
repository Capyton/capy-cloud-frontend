import { HTMLProps } from 'react';
import { IconProps, Icon } from 'components/Icon';
import { Box } from 'components/Box';
import { styles } from './TextField.styles';

type Props = {
  icon?: IconProps['name'];
  iconColor?: IconProps['color'];
} & HTMLProps<HTMLInputElement>;

export const TextField = ({ icon, iconColor, ...props }: Props) => (
  <Box
    display="flex"
    alignItems="center"
    py={2.5}
    px={4}
    height={10}
    width="100%"
    maxWidth={200}
    background="lightGray"
    radius={25}
  >
    {icon && (
      <span css={styles.icon}>
        <Icon name={icon} color={iconColor} />
      </span>
    )}

    <input type="text" css={styles.input} {...props} />
  </Box>
);
