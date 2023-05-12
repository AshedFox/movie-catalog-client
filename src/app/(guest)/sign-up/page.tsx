import React from 'react';
import { Metadata } from 'next';
import { SignUpForm } from '@features/sign-up';

export const metadata: Metadata = {
  title: 'Sign-Up',
};

const Page = () => {
  return (
    <main className="flex container items-center justify-center flex-auto">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold">Sign Up</h1>
        <SignUpForm redirect="/" />
      </div>
    </main>
  );
};

export default Page;
