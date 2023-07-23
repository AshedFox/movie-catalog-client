'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Modal } from '@shared/ui';
import { EditCollectionForm } from '@features/edit-collection';
import { CollectionItem_CollectionFragment } from '@shared/api/graphql';

type Props = {
  collection: CollectionItem_CollectionFragment;
};

const EditCollectionModal = ({ collection }: Props) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);

  return (
    <Modal
      rootId="modal-root"
      showModal={showModal}
      title={<div className="text-xl font-semibold">Edit collection</div>}
      onClose={() => {
        setShowModal(false);
        router.back();
      }}
    >
      <div className="flex w-screen max-w-screen-lg overflow-auto p-1">
        <EditCollectionForm collection={collection} />
      </div>
    </Modal>
  );
};

export default EditCollectionModal;
