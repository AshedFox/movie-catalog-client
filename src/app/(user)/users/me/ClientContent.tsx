'use client';

import React from 'react';
import Content from './Content';
import { useUser } from '@entities/user';
import { useRouter } from 'next/navigation';

const ClientContent = () => {
  const { user: currentUser } = useUser();
  const router = useRouter();

  if (!currentUser) {
    router.replace(`/login`);
    return <></>;
  }

  return <Content user={currentUser} />;
};

export default ClientContent;
