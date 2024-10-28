import { RoleEnum } from '@shared/api/graphql';

export type Session = {
  user: User;
  jwt: JWT;
};

export type User = {
  id: string;
  email: string;
  createdAt: string;
  role: RoleEnum;
  isEmailConfirmed: boolean;
  name: string;
  country?: {
    id: string;
    name: string;
  } | null;
  avatar?: string | null;
};

export type JWT = {
  accessToken: string;
  refreshToken: string;
};
