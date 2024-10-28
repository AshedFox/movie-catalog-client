import { QueryPageNavigation } from '@features/page-navigation';
import { GetCollectionsDocument, SortDirectionEnum } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import CollectionsGrid from '@widgets/collections-grid/ui/CollectionsGrid';

type Props = {
  params: {
    id: string;
  };
  searchParams?: {
    page?: string;
  };
};

export const generateMetadata = async ({ searchParams }: Props) => {
  return {
    title: `User collections${
      searchParams?.page && Number(searchParams.page) > 1 ? ` - ${searchParams.page}` : ''
    }`,
  };
};

const amountPerPage = 8;

const Page = async ({ searchParams, params }: Props) => {
  const page = Number(searchParams?.page ?? 1);

  const { data } = await getClient().query({
    query: GetCollectionsDocument,
    variables: {
      offset: (page - 1) * amountPerPage,
      limit: amountPerPage,
      filter: {
        ownerId: { eq: params.id },
      },
      sort: {
        createdAt: {
          direction: SortDirectionEnum.DESC,
        },
      },
    },
  });

  return (
    <main className="flex flex-col py-4 container flex-auto gap-2">
      <h1 className="font-semibold text-3xl leading-tight">User collections</h1>
      <CollectionsGrid items={data.getCollections.nodes} />
      <QueryPageNavigation
        amountPerPage={amountPerPage}
        totalCount={data.getCollections.pageInfo.totalCount}
      />
    </main>
  );
};

export default Page;
