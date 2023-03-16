import { UIProvider } from 'components/UIProvider';
import { Navigation } from 'components/Navigation';
import { Box } from 'components/Box';
import { Typography } from 'components/Typography';
import { Link } from 'components/Link';

const advantages = [
  {
    title: 'Secure',
    content: 'Sensitive information as medical or financial is secure now',
  },
  {
    title: 'Blockchain',
    content: 'Sensitive information as medical or financial is secure now',
  },
  {
    title: 'Anonymous',
    content: 'Capy generates unique login key, don’t share and don’t lose it',
  },
  {
    title: '',
    content: '',
  },
];

export const App = () => (
  <UIProvider>
    <Navigation />

    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      mt={32}
      mb={45}
    >
      <Typography color="mateBlack" variant="h1" fontFamily="secondary">
        Keep it safe
      </Typography>

      <Box my={6}>
        <Typography color="darkGray" variant="subtitle2" textAlign="center">
          Capy connects your files with encryption <br />
          system to keep your data safe
        </Typography>
      </Box>

      <Link to="t.me.krau5">Get started</Link>
    </Box>

    <Typography variant="h2">
      We{' '}
      <Typography
        color="primary"
        variant="h2"
        fontFamily="secondary"
        component="span"
      >
        do not distribute, collect or store
      </Typography>{' '}
      your information on our servers, simply because we don’t know it. All
      thanks to{' '}
      <Typography
        color="primary"
        variant="h2"
        fontFamily="secondary"
        component="span"
      >
        blockchain technologies
      </Typography>{' '}
      and our IT-specialists. Ave decentralized data storage
    </Typography>

    <Box display="flex" gap={3} my={24}>
      <Box display="inline-flex" width="45%" gap={3} flexWrap="wrap">
        {advantages.map((item) => (
          <Box
            display="inline-flex"
            justifyContent="space-between"
            flexDirection="column"
            width="calc(50% - 6px)"
            alignSelf="stretch"
            background="lightGray"
            px={4}
            py={6}
            radius={4}
            opacity={item.content === '' ? 0.5 : 1}
            key={item.title}
          >
            <Typography variant="subtitle1">{item.title}</Typography>

            <Typography variant="bodyText1">{item.content}</Typography>
          </Box>
        ))}
      </Box>

      <Box width="55%" height={125} background="lightGray" radius={4} />
    </Box>

    <Navigation />
  </UIProvider>
);
