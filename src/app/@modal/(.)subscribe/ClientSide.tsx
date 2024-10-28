'use client';

import { SubscribeForm } from '@features/subscribe';
import { PlanFragment } from '@shared/api/graphql';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@shared/ui/Dialog';
import { useRouter } from 'next/navigation';

type Props = {
  plans: PlanFragment[];
};

const ClientSide = ({ plans }: Props) => {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={(open) => !open && router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl">Login</DialogTitle>
        </DialogHeader>
        <h2>Subscribe to our service!</h2>
        <p>You can choose one of the plans you like.</p>
        <SubscribeForm plans={plans} />
      </DialogContent>
    </Dialog>
  );
};

export default ClientSide;
