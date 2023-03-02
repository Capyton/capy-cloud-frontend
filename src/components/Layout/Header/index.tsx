import { TextField } from 'components/TextField';
import { Box } from 'components/Box';
import { styles } from './Header.styles';
import { UserGuide } from './UserGuide';
import { UserProfile } from './UserProfile';

export const Header = () => (
  <header css={styles.header}>
    <img src="/images/logo.svg" alt="logo" />

    <TextField icon="search" placeholder="Поиск по файлам" />

    <Box display="inline-flex" gap={4}>
      <UserGuide />

      <UserProfile />
    </Box>
  </header>
);
