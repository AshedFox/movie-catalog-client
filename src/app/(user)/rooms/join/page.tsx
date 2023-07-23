import React from 'react';
import ClientSide from './ClientSide';
import { notFound } from 'next/navigation';

type Props = {
  searchParams?: {
    inviteToken?: string;
  };
};

const Page = ({ searchParams }: Props) => {
  if (!searchParams || !searchParams.inviteToken) {
    notFound();
  }

  return <ClientSide token={searchParams.inviteToken} />;
};

export default Page;
