import { GetOneSeriesDocument, GetSeasonsDocument, SortDirectionEnum } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ClientSide from './ClientSide';

type Props = {
  params: {
    id: string;
  };
};

const client = getClient();

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { data } = await client.query({
    query: GetOneSeriesDocument,
    variables: {
      id: params.id,
    },
  });

  if (!data) {
    notFound();
  }

  return {
    title: `Watch "${data.getOneSeries.title}"`,
    description: data.getOneSeries.description,
  };
};

const Page = async ({ params }: Props) => {
  const { data: seriesData } = await client.query({
    query: GetOneSeriesDocument,
    variables: {
      id: params.id,
    },
  });

  const { data: seasonsData } = await client.query({
    query: GetSeasonsDocument,
    variables: {
      limit: 9999,
      offset: 0,
      filter: {
        seriesId: {
          eq: params.id,
        },
      },
      sort: {
        numberInSeries: {
          direction: SortDirectionEnum.ASC,
        },
      },
    },
  });

  if (!seriesData || !seasonsData) {
    notFound();
  }

  return <ClientSide series={seriesData.getOneSeries} seasons={seasonsData.getSeasons.nodes} />;
};

export default Page;
