'use client';

import React, { useState } from 'react';
import { Modal } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { SubscriptionForm } from '@features/subscribe';
import { PlanFragment } from '@shared/api/graphql';

type Props = {
  plans: PlanFragment[];
};

const SubscribeModal = ({ plans }: Props) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);

  return (
    <Modal
      rootId="modal-root"
      showModal={showModal}
      title={<h2 className="text-xl font-semibold">Subscribe</h2>}
      onClose={() => {
        setShowModal(false);
        router.back();
      }}
    >
      <div className="flex w-screen max-w-screen-lg overflow-hidden">
        {plans.map((plan) => (
          <SubscriptionForm key={plan.id} plan={plan} />
        ))}
      </div>
    </Modal>
  );
};

export default SubscribeModal;
