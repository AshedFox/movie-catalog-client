import { LoginModal } from '@widgets/login-modal';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Login',
};

const Page = () => {
  return <LoginModal />;
};

export default Page;
