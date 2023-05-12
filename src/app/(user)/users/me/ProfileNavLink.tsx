'use client';

import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';

type Props = PropsWithChildren<{
  segment: string | null;
}>;

const ProfileNavLink = ({ segment, children }: Props) => {
  const selectedSegment = useSelectedLayoutSegment();
  const isActive = selectedSegment === segment;

  return (
    <Link
      href={`/users/me/${segment ?? ''}`}
      className={clsx(
        'rounded text-sm px-3 py-1 duration-200 transition',
        isActive
          ? 'font-bold bg-gray-700 text-gray-900 dark:text-gray-50'
          : 'text-gray-600 dark:text-gray-400',
      )}
    >
      {children}
    </Link>
  );
};

export default ProfileNavLink;
