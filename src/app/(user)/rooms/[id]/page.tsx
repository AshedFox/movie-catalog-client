import React from 'react';
import ClientSide from './ClientSide';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Room',
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  return <ClientSide roomId={params.id} />;
};

export default Page;
