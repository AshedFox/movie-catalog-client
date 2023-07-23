'use client';

import React from 'react';
import { useSuspenseQuery_experimental } from '@apollo/client';
import { GetCollectionDocument } from '@shared/api/graphql';
import { EditCollectionForm } from '@features/edit-collection';

type Props = {
  collectionId: string;
};

const ClientSide = ({ collectionId }: Props) => {
  const { data } = useSuspenseQuery_experimental(GetCollectionDocument, {
    variables: {
      id: Number(collectionId),
    },
  });

  if (!data) {
    return <></>;
  }

  return <EditCollectionForm collection={data?.getCollection} />;
};

export default ClientSide;
