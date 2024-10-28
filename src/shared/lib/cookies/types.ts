export type Cookie = {
  name: string;
  value: string;
};

export type CookieOptions = {
  secure?: boolean;
  path?: string;
  maxAge?: number;
  expires?: Date;
  sameSite?: 'strict' | 'lax' | 'none';
};
