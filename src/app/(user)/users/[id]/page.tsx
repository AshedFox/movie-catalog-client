import { graphql } from '@lib/graphql/__generated__';
import { initializeApollo } from '@lib/graphql/apollo-client';
import Image from 'next/image';
import blankProfile from '@assets/blank_profile.png';
import { formatDate } from '@lib/helpers/format.helper';
import React from 'react';

export const generateMetadata = async ({ params }: Props) => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetUserDocument,
    variables: {
      id: params.id,
    },
  });

  return { title: data.getUser.name };
};

const GetUserDocument = graphql(/* GraphQL */ `
  query GetUser($id: String!) {
    getUser(id: $id) {
      id
      createdAt
      name
      email
      role
      isEmailConfirmed
      avatar {
        url
      }
      country {
        id
        name
      }
    }
  }
`);

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetUserDocument,
    variables: {
      id: params.id,
    },
  });

  if (!data) {
    return;
  }

  const user = data.getUser;

  return (
    <main className="flex flex-col py-4 container flex-auto gap-2 md:gap-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <Image
          src={user.avatar?.url ?? blankProfile}
          alt="profile avatar"
          priority={true}
          className={
            'rounded-full object-cover w-full md:w-32 md:h-32 xl:w-48 xl:h-48'
          }
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-3xl leading-tight">{user.name}</h1>
          <div className="flex flex-col gap-1 px-4 py-1">
            <div>
              <span className="font-semibold">Email: </span>
              <span className="text-sm px-4">{user.email}</span>
            </div>
            <div>
              <span className="font-semibold">Registration date: </span>
              <span>{formatDate(user.createdAt)}</span>
            </div>
            {user.country && (
              <div>
                <span className="font-semibold">Country: </span>
                <span>{user.country?.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
