import clsx from 'clsx';
import React, { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  pathname: string;
  isActive?: boolean;
};

const HeaderLink = ({ pathname, isActive = false, children }: Props) => {
  return (
    <Link
      className={clsx(
        'border-b-2 pb-0.5 text-sm duration-200 transition',
        isActive
          ? 'text-gray-900 border-gray-900 dark:text-gray-50 dark:border-gray-50'
          : 'border-transparent text-gray-600 dark:text-gray-400 hover:border-gray-600 dark:hover:border-gray-400',
      )}
      href={pathname}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
