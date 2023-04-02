import React from 'react';
import LoginForm from './LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

const Page = () => {
  return (
    <main className="flex container flex-auto">
      <div className="flex flex-auto items-center justify-center">
        <LoginForm />
      </div>
    </main>
  );
};

export default Page;
