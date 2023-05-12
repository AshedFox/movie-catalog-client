import React from 'react';
import { Metadata } from 'next';
import { LoginForm } from '@features/login';

export const metadata: Metadata = {
  title: 'Login',
};

const Page = () => {
  return (
    <main className="flex container items-center justify-center flex-auto">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold">Login</h1>
        <LoginForm redirect="/" />
      </div>
    </main>
  );
};

export default Page;
