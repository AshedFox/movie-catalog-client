import React from 'react';
import { getClient } from '@shared/api/graphql/client';
import { GetPlansDocument } from '@shared/api/graphql';
import ClientSide from './ClientSide';

export const dynamic = 'force-dynamic';

const Page = async () => {
  const { data } = await getClient().query({
    query: GetPlansDocument,
  });

  return <ClientSide plans={data.getPlans} />;
};

export default Page;
