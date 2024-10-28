'use client';

import { DialogHeader, Dialog, DialogContent, DialogTitle } from '@shared/ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import PurchaseForm from './PurchaseForm';

type Props = {
  title: string;
  productId: string;
  movieId: string;
};

const PurchaseModal = ({ title, movieId, productId }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isOpen = searchParams.has('purchase-open');

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          router.push(pathname);
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl">Purchase</DialogTitle>
        </DialogHeader>
        <PurchaseForm title={title} productId={productId} movieId={movieId} />
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
