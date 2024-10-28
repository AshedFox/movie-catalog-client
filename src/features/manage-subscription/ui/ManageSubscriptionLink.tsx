'use client';

import React from 'react';
import { useMutation, useSuspenseQuery } from '@apollo/client';
import {
  CreateSubscriptionsManageLinkDocument,
  HasActiveSubscriptionDocument,
} from '@shared/api/graphql';
import { Button } from '@shared/ui';

const ManageSubscriptionLink = () => {
  const { data } = useSuspenseQuery(HasActiveSubscriptionDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  });
  const [createLink] = useMutation(CreateSubscriptionsManageLinkDocument);

  if (!data || !data.hasActiveSubscription) {
    return null;
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
