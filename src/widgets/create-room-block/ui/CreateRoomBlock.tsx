'use client';

import React, { useState } from 'react';
import { Button, Modal } from '@shared/ui';
import { CreateRoomForm } from '@features/create-room';
import { useUser } from '@entities/user';

const CreateRoomBlock = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { user } = useUser();

  if (!user) {
    return <></>;
  }

  return (
    <>
      <Modal
        id={'create-room-modal'}
        showModal={showModal}
        closable
        onClose={async () => {
          setShowModal(false);
        }}
        rootId="modal-root"
        title={<div className="font-semibold text-2xl">Create room</div>}
      >
        <CreateRoomForm userId={user.id} />
      </Modal>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Create room
      </Button>
    </>
  );
};

export default CreateRoomBlock;
