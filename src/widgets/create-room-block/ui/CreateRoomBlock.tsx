'use client';

import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle } from '@shared/ui';
import { CreateRoomForm } from '@features/create-room';
import { useSession } from '@features/auth/session';

const CreateRoomBlock = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const session = useSession();
  const user = session.data?.user;

  if (!user) {
    return null;
  }

  return (
    <>
      <Dialog open={showModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create room</DialogTitle>
          </DialogHeader>
          <CreateRoomForm userId={user.id} />
        </DialogContent>
      </Dialog>
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
