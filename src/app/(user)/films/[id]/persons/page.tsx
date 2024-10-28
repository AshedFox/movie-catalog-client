import { MoviePersonCard } from '@entities/movie-person';
import { QueryPageNavigation } from '@features/page-navigation';
import { GetMoviesPersonsDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';

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
    title: `Movie Persons${
      searchParams?.page && Number(searchParams.page) > 1 ? ` - ${searchParams.page}` : ''
    }`,
  };
};

const amountPerPage = 8;

const Page = async ({ searchParams, params }: Props) => {
  const page = Number(searchParams?.page ?? 1);

  const { data } = await getClient().query({
    query: GetMoviesPersonsDocument,
    variables: {
      offset: (page - 1) * amountPerPage,
      limit: amountPerPage,
      filter: {
        movieId: { eq: params.id },
      },
    },
  });

  return (
    <main className="flex flex-col py-4 flex-1 gap-2">
      <h1 className="font-semibold text-3xl leading-tight">Persons</h1>
      <div className="flex flex-col gap-3 flex-1">
        {data.getMoviesPersons.nodes.length > 0 ? (
          <div className="flex flex-col flex-1">
            <div className="flex flex-row flex-wrap gap-2 lg:gap-3 xl:gap-4">
              {data.getMoviesPersons.nodes.map((item) => (
                <MoviePersonCard key={item.id} moviePerson={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 text-gray-500 text-xl flex items-center justify-center">
            Nothing here...
          </div>
        )}
        <QueryPageNavigation
          amountPerPage={amountPerPage}
          totalCount={data.getMoviesPersons.pageInfo.totalCount}
        />
      </div>
    </main>
  );
};

export default Page;
