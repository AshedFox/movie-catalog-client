'use client';

import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

export const useUser = () => {
  return useContext(UserContext);
};
