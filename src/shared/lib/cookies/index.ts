import { CookieOptions } from './types';
import { cookies } from 'next/dist/client/components/headers';

export const getCookie = (name: string): string | undefined => {
  if (typeof window === 'undefined') {
    return cookies().get(name)?.value;
  }
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
};

export const setCookie = (name: string, value: string, options?: CookieOptions): void => {
  if (typeof window === 'undefined') {
    cookies().set(name, value, options);
  } else {
    const optionsValue = options
      ? (Object.keys(options) as (keyof CookieOptions)[])
          .reduce((prev, key) => {
            if (options[key]) {
              switch (key) {
                case 'secure':
                  prev.push(';secure');
                  break;
                case 'path':
                  prev.push(`;path=${options[key]}`);
                  break;
                case 'maxAge':
                  prev.push(`;max-age=${options[key]}`);
                  break;
                case 'expires':
                  prev.push(`;expires=${options[key]?.toUTCString()}`);
                  break;
                case 'sameSite':
                  prev.push(`;samesite=${options[key]}`);
                  break;
              }
            }
            return prev;
          }, [] as string[])
          .join('')
      : '';
    document.cookie = `${name}=${encodeURIComponent(value)}${optionsValue}`;
  }
};

export const deleteCookie = (name: string) => {
  if (typeof window === 'undefined') {
    cookies().delete(name);
  } else {
    document.cookie = `${name}=;expires=${new Date(0)};path=/`;
  }
};
