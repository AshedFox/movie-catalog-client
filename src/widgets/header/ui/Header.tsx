'use client';

import ThemeSwitch from '@features/switch-theme/ui/ThemeSwitch';
import { cn } from '@shared/lib/utils';
import { buttonVariants, Logo } from '@shared/ui';
import { Avatar } from '@shared/ui/Avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shared/ui/DropdownMenu';
import { Settings, User, Warehouse } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import HeaderLink from './HeaderLink';
import { DEFAULT_LINKS } from '../constants/default-links';
import { useSession } from '@features/auth/session';

type Props = {
  className?: string;
  isMini?: boolean;
};

const Header = ({ isMini = false, className }: Props) => {
  const segment = useSelectedLayoutSegment();
  const session = useSession();
  const user = session.data?.user;

  return (
    <header
      className={cn(
        'fixed py-2 h-header w-full flex items-center overflow-hidden z-10 bg-gray-50 dark:bg-gray-900 drop-shadow',
        className,
      )}
    >
      <div className="container flex items-center w-full gap-1.5 md:gap-2 lg:gap-3 xl:gap-4">
        <Link className="cursor-pointer mr-2 md:mr-4 lg:mr-6 xl:mr-10" href="/">
          <Logo className="h-9 w-9" />
        </Link>
        {!isMini && (
          <nav className="flex items-center gap-1.5 md:gap-2 lg:gap-3 xl:gap-4">
            {DEFAULT_LINKS.map(({ pathname, title }) => (
              <HeaderLink
                key={pathname}
                pathname={pathname}
                isActive={pathname.endsWith(segment ?? '/')}
              >
                {title}
              </HeaderLink>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-1 lg:gap-2 ml-auto">
          <ThemeSwitch />
          {!isMini &&
            (session.status === 'authenticated' ? (
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="cursor-pointer">
                  <Avatar className="w-8 h-8">
                    <Image
                      className="object-cover"
                      src={user?.avatar ?? '/blank_profile.png'}
                      alt={'user avatar'}
                      width={32}
                      height={32}
                    />
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link className="flex gap-2 items-center" href={'/users/me'}>
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link className="flex gap-2 items-center" href={'/users/me/settings'}>
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link className="flex gap-2 items-center" href={'/users/me/rooms'}>
                      <Warehouse className="w-4 h-4" />
                      Rooms
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                className={cn(buttonVariants({ size: 'sm', variant: 'outline' }))}
                href="/login"
              >
                Login
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
