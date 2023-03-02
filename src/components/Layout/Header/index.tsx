import { TextField } from 'components/TextField';
import { styles } from './Header.styles';

export const Header = () => (
  <header css={styles.header}>
    <img src="/images/logo.svg" alt="logo" />
    <TextField icon="search" placeholder="Поиск по файлам" />
  </header>
);
