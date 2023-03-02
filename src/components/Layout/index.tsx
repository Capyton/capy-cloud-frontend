import { PropsWithChildren } from 'react';
import { Header } from './Header';

export const Layout = ({ children }: PropsWithChildren) => (
  <div>
    <Header />
    {children}
  </div>
);
