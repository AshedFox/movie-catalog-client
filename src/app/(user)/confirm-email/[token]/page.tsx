import React from 'react';
import { ConfirmEmailDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    token: string;
  };
};

const client = getClient();

const Page = async ({ params }: Props) => {
  const { data, errors } = await client.mutate({
    mutation: ConfirmEmailDocument,
    variables: {
      token: params.token,
    },
  });

  return (
    <div className="flex container flex-auto">
      <h1 className="text-2xl font-semibold">
        {!data || errors ? 'Failed to confirm email!' : 'Email successfully confirmed!'}
      </h1>
    </div>
  );
};

export default Page;
