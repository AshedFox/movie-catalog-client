import { cn } from '@shared/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
  pathname: string;
  isActive?: boolean;
};

const HeaderLink = ({ pathname, isActive = false, children, className }: Props) => {
  return (
    <Link
      className={cn(
        'border-b-2 pb-0.5 text-sm duration-200 transition',
        isActive
          ? 'text-gray-900 border-gray-900 dark:text-gray-50 dark:border-gray-50 font-medium'
          : 'border-transparent text-gray-600 dark:text-gray-400 hover:border-gray-600 dark:hover:border-gray-400',
        className,
      )}
      href={pathname}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
