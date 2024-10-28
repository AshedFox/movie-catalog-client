import { LoginForm } from '@features/login';
import { ROUTES } from '@shared/constants/routes';
import { cn } from '@shared/lib/utils';
import { buttonVariants } from '@shared/ui/Button';
import { ChevronLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
};

const Page = async () => {
  return (
    <main className="container h-screen py-10">
      <div className="flex flex-col gap-5 lg:gap-8 2xl:gap-12 h-full w-full items-center justify-center">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'text-xs self-start')}
        >
          <ChevronLeft className="w-4 h-4" />
          Home
        </Link>
        <div className="w-full max-w-[480px]">
          <h1 className="text-center text-4xl leading-tight font-bold mb-4 lg:mb-6">Login</h1>
          <LoginForm redirectOnSuccess="/" />
          <Link
            className={cn(buttonVariants({ variant: 'link', size: 'sm' }), 'text-xs')}
            href={ROUTES.signUp}
          >
            Don&apos;t have an account?
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
