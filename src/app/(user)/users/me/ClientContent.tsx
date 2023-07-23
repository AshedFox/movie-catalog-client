'use client';

import React from 'react';
import Content from './Content';
import { useUser } from '@entities/user';

const ClientContent = () => {
  const { user: currentUser } = useUser();

  return <Content user={currentUser!} />;
};

export default ClientContent;
