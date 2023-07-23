'use client';

import React from 'react';
import { useMutation, useSuspenseQuery_experimental } from '@apollo/client';
import {
  CreateSubscriptionsManageLinkDocument,
  HasActiveSubscriptionDocument,
} from '@shared/api/graphql';
import { Button } from '@shared/ui';

const ManageSubscriptionLink = () => {
  const { data } = useSuspenseQuery_experimental(
    HasActiveSubscriptionDocument,
    {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
  );
  const [createLink] = useMutation(CreateSubscriptionsManageLinkDocument);

  if (!data || !data.hasActiveSubscription) {
    return <></>;
  }

  return (
    <Button
      size="sm"
      onClick={async () => {
        const { data } = await createLink();

        if (data) {
          window.open(data.createSubscriptionsManageLink);
        }
      }}
    >
      Manage subscription
    </Button>
  );
};

export default ManageSubscriptionLink;
