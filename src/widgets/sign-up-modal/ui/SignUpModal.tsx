'use client';

import { SignUpForm } from '@features/sign-up';
import { ROUTES } from '@shared/constants/routes';
import { cn } from '@shared/lib/utils';
import { buttonVariants, Dialog, DialogContent, DialogHeader, DialogTitle } from '@shared/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignUpModal = () => {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={(open) => !open && router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl">Sign Up</DialogTitle>
        </DialogHeader>
        <div>
          <SignUpForm redirectOnSuccess="back" />
          <Link
            className={cn(buttonVariants({ variant: 'link', size: 'sm' }), 'text-xs')}
            href={ROUTES.login}
            replace
          >
            Already have account?
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
