'use client';

import React from 'react';
import { Modal } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { SignUpForm } from '@features/sign-up';

const SignUpModal = () => {
  const router = useRouter();

  return (
    <Modal
      id="sign-up-modal"
      rootId="modal-root"
      title={<h1 className="text-5xl font-bold">Sign Up</h1>}
      closable={true}
      showModal={true}
      onClose={() => router.back()}
    >
      <SignUpForm redirect="back" />
    </Modal>
  );
};

export default SignUpModal;
