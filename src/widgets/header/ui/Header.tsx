'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useUser } from '@entities/user';
import HeaderLink from './HeaderLink';
import ThemeSwitch from '@features/switch-theme/ui/ThemeSwitch';
import { SubscribeLinkButton } from '@features/subscribe';

const DEFAULT_LINKS: Array<{
  pathname: string;
  title: string;
}> = [
  { pathname: '/', title: 'Home' },
  { pathname: '/films', title: 'Films' },
  { pathname: '/series', title: 'Series' },
  { pathname: '/collections', title: 'Collections' },
];

const Header = () => {
  const activePathname = usePathname();
  const { user } = useUser();

  return (
    <header className="flex py-2 h-12 items-center container overflow-hidden">
      <nav className="flex items-center w-full gap-1 md:gap-2 xl:gap-3 ">
        {DEFAULT_LINKS.map(({ pathname, title }) => (
          <HeaderLink
            key={pathname}
            pathname={pathname}
            isActive={pathname === activePathname}
          >
            {title}
          </HeaderLink>
        ))}
        {user ? (
          <div className="flex gap-1 ml-auto">
            <HeaderLink
              pathname="/users/me"
              isActive={activePathname === '/users/me'}
            >
              Profile
            </HeaderLink>
          </div>
        ) : (
          <div className="flex gap-1 ml-auto">
            <HeaderLink
              pathname="/login"
              isActive={activePathname === '/login'}
            >
              Login
            </HeaderLink>
          </div>
        )}
        <ThemeSwitch />
        <SubscribeLinkButton />
      </nav>
    </header>
  );
};

export default Header;
