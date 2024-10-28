import { CreateSystemCollectionLink } from '@features/create-collection';
import { QueryPageNavigation } from '@features/page-navigation';
import { GetCollectionsDocument, SortDirectionEnum } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import CollectionsGrid from '@widgets/collections-grid/ui/CollectionsGrid';

type Props = {
  searchParams?: {
    page?: string;
    sort?: string;
    name?: string;
  };
};

export const generateMetadata = async ({ searchParams }: Props) => {
  return {
    title: `System Collections${
      searchParams?.page && Number(searchParams.page) > 1 ? ` - ${searchParams.page}` : ''
    }`,
  };
};

const amountPerPage = 4;

const Page = async ({ searchParams }: Props) => {
  const page = Number(searchParams?.page ?? 1);

  const { data } = await getClient().query({
    query: GetCollectionsDocument,
    variables: {
      limit: amountPerPage,
      offset: (page - 1) * amountPerPage,
      sort: {
        createdAt: {
          direction: SortDirectionEnum.DESC,
        },
      },
      filter: {
        isSystem: {
          eq: true,
        },
      },
    },
  });

  return (
    <main className="flex flex-col py-4 container flex-auto gap-2">
      <div className="flex gap-2 items-center justify-between">
        <h1 className="font-semibold text-3xl leading-tight">Collections</h1>
        {/* @ts-expect-error Async Server Component */}
        <CreateSystemCollectionLink />
      </div>
      <div className="flex-auto">
        <CollectionsGrid items={data.getCollections.nodes} />
      </div>
      <QueryPageNavigation
        amountPerPage={amountPerPage}
        totalCount={data.getCollections.pageInfo.totalCount}
      />
    </main>
  );
};

export default Page;
