'use client';

import React from 'react';
import HeaderLink from '@components/common/HeaderLink';
import { usePathname } from 'next/navigation';

type LinkDescription = {
  pathname: string;
  title: string;
};

const DEFAULT_LINKS: LinkDescription[] = [
  { pathname: '/', title: 'Home' },
  { pathname: '/films', title: 'Films' },
];

const Header = () => {
  const activePathname = usePathname();

  return (
    <header className="py-2 container">
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
        <div className="ml-auto">
          <HeaderLink
            pathname={'/login'}
            isActive={activePathname === '/login'}
          >
            Login
          </HeaderLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
