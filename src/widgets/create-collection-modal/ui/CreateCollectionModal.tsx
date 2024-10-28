'use client';

import { CreateCollectionForm } from '@features/create-collection';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@shared/ui';
import { useRouter } from 'next/navigation';

type Props = {
  collectionType: 'custom' | 'system';
};

const CreateCollectionModal = ({ collectionType }: Props) => {
  const router = useRouter();
  return (
    <Dialog defaultOpen onOpenChange={(open) => !open && router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl">Create collection</DialogTitle>
        </DialogHeader>
        <CreateCollectionForm collectionType={collectionType} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateCollectionModal;
