import { generatePath } from 'react-router-dom';
import { Link } from 'components/Link';
import { Box } from 'components/Box';
import { Icon } from 'components/Icon';
import { Routes } from 'constants/routes';

export const UserGuide = () => (
  <Link to={generatePath(Routes.GUIDE, { step: 1 })}>
    <Box
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      background="primaryLight"
      width={10}
      height={10}
      radius={25}
    >
      <Icon name="lightbulb" color="primary" />
    </Box>
  </Link>
);
