import { AuthChecker } from '@features/auth-checker';
import { Header } from '@widgets/header';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <AuthChecker redirectPath="/" shouldBeAuthorized={false}>
        <Header isMini />
        <div className="container pt-header h-screen flex flex-col">{children}</div>
      </AuthChecker>
    </>
  );
};

export default Layout;
