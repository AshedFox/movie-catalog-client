'use client';

import React from 'react';
import { LoginForm } from '@features/login';
import { Modal } from '@shared/ui';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const router = useRouter();

  return (
    <Modal
      id="login-modal"
      rootId="modal-root"
      title={<h1 className="text-5xl font-bold">Login</h1>}
      closable={true}
      showModal={true}
      onClose={() => router.back()}
    >
      <LoginForm redirect="back" />
    </Modal>
  );
};

export default LoginModal;
