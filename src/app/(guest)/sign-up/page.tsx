import React from 'react';
import SignUpForm from './SignUpForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign-Up',
};

const Page = () => {
  return (
    <main className="flex container flex-auto">
      <div className="flex flex-auto items-center justify-center">
        <SignUpForm />
      </div>
    </main>
  );
};

export default Page;
