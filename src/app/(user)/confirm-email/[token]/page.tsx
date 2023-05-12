import React from 'react';
import { ConfirmEmailDocument, initializeApollo } from '@shared/api/graphql';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    token: string;
  };
};

const client = initializeApollo();

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
        {!data || errors
          ? 'Failed to confirm email!'
          : 'Email successfully confirmed!'}
      </h1>
    </div>
  );
};

export default Page;
