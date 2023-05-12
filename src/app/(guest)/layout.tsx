import React, { ReactNode } from 'react';
import { AuthChecker } from 'features/auth-checker';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthChecker redirect="/" shouldBeAuthorized={false}>
      {children}
    </AuthChecker>
  );
};

export default Layout;
