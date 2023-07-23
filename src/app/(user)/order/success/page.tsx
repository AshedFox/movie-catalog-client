import React from 'react';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout result',
};

type Props = {
  searchParams: {
    session_id?: string;
  };
};

const Page = async ({ searchParams }: Props) => {
  if (!searchParams.session_id) {
    redirect('/');
  }

  return (
    <main className="flex flex-col py-4 container flex-auto">
      <h1 className="text-2xl font-bold">Successfully completed payment!</h1>
    </main>
  );
};

export default Page;
