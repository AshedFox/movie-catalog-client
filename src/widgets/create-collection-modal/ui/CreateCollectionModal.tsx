'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Modal } from '@shared/ui';
import { CreateCollectionForm } from '@features/create-collection';

type Props = {
  collectionType: 'custom' | 'system';
};

const CreateCollectionModal = ({ collectionType }: Props) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);

  return (
    <Modal
      rootId="modal-root"
      showModal={showModal}
      title={<div className="text-xl font-semibold">Create collection</div>}
      onClose={() => {
        setShowModal(false);
        router.back();
      }}
    >
      <div className="flex w-screen max-w-screen-lg overflow-auto p-1">
        <CreateCollectionForm collectionType={collectionType} />
      </div>
    </Modal>
  );
};

export default CreateCollectionModal;
