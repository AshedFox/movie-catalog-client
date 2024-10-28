import { Header } from '@widgets/header';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="container pt-header h-screen flex flex-col">{children}</div>
    </>
  );
};

export default Layout;
