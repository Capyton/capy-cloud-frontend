import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { UIProvider } from 'components/UIProvider';

export const App = () => {
  return (
    <UIProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<p>Hello, world!</p>}></Route>
        </Switch>
      </BrowserRouter>
    </UIProvider>
  );
};
