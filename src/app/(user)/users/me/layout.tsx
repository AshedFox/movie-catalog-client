import { AuthChecker } from '@features/auth-checker';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <AuthChecker redirectPath="/login" shouldBeAuthorized>
        {children}
      </AuthChecker>
    </>
  );
};

export default Layout;
