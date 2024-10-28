'use client';

import { LoginForm } from '@features/login';
import { ROUTES } from '@shared/constants/routes';
import { cn } from '@shared/lib/utils';
import { buttonVariants, Dialog, DialogContent, DialogHeader, DialogTitle } from '@shared/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={(open) => !open && router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl">Login</DialogTitle>
        </DialogHeader>
        <div>
          <LoginForm redirectOnSuccess="back" />
          <Link
            className={cn(buttonVariants({ variant: 'link', size: 'sm' }), 'text-xs')}
            href={ROUTES.signUp}
            replace
          >
            Don&apos;t have account?
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
