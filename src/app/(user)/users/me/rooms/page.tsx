import React from 'react';
import { Metadata } from 'next';
import ClientSide from './ClientSide';

export const metadata: Metadata = {
  title: 'My Rooms',
};

const Page = () => {
  return <ClientSide />;
};

export default Page;
