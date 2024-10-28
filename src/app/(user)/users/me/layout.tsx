import { AuthChecker } from '@features/auth-checker';
import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <AuthChecker redirectPath="/login" shouldBeAuthorized>
      {children}
    </AuthChecker>
  );
};

export default Layout;
