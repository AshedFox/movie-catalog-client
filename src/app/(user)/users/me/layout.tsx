import React, { ReactNode } from 'react';
import ProfileNavLink from './ProfileNavLink';
import { AuthChecker } from '@features/auth-checker';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-without-header container py-4 flex-auto gap-2 divide-x divide-gray-500">
      <div className="flex flex-col gap-1 shrink-0 lg:w-[150px]">
        <ProfileNavLink segment={null}>Profile</ProfileNavLink>
        <ProfileNavLink segment={'settings'}>Settings</ProfileNavLink>
        <ProfileNavLink segment={'rooms'}>Rooms</ProfileNavLink>
      </div>
      <AuthChecker shouldBeAuthorized={true} redirect={'/login'}>
        {children}
      </AuthChecker>
    </div>
  );
};

export default Layout;
