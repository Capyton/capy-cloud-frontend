import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { lazy } from 'react';
import { UIProvider } from 'components/UIProvider';
import { Routes } from 'constants/routes';
import { Layout } from 'components/Layout';

const Home = lazy(() =>
  import('pages/Home').then((module) => ({
    default: module.Home,
  }))
);

export const App = () => {
  return (
    <UIProvider>
      <BrowserRouter>
        <Switch>
          <Route
            path={Routes.HOME}
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route path={Routes.NOT_FOUND} element={<p>404</p>} />
        </Switch>
      </BrowserRouter>
    </UIProvider>
  );
};
