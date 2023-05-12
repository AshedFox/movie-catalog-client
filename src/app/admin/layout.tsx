import React, { ReactNode } from 'react';
import { AuthChecker } from '@features/auth-checker';
import { RoleEnum } from '@shared/api/graphql';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthChecker shouldBeAuthorized={true} shouldBeOfRole={[RoleEnum.Admin]}>
      {children}
    </AuthChecker>
  );
};

export default Layout;
