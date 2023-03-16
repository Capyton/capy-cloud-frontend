import { Box } from 'components/Box';
import { Link } from 'components/Link';

export const Navigation = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    height={18}
    px={8}
    py={3}
    width="100vw"
    ml={-13}
  >
    <img src="/images/logo.svg" alt="logo" />

    <Link to="t.me.krau5">Get started</Link>
  </Box>
);
