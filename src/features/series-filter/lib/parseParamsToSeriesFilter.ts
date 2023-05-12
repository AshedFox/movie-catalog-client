import { AgeRestrictionEnum, SeriesFilter } from '@shared/api/graphql';

type Params = {
  title?: string;
  releaseFrom?: string;
  releaseTo?: string;
  ageRestriction?: string[];
  genre?: string[];
};

export const parseParamsToSeriesFilter = (
  searchParams: Params,
): SeriesFilter => {
  const { title, ageRestriction, genre, releaseTo, releaseFrom } = searchParams;
  const filter: SeriesFilter = {};

  if (title) {
    filter.title = {
      ilike: title,
    };
  }

  if (releaseFrom && releaseTo) {
    filter.or = [
      {
        startReleaseDate: {
          btwn: {
            start: releaseFrom,
            end: releaseTo,
          },
        },
      },
      {
        endReleaseDate: {
          btwn: {
            start: releaseFrom,
            end: releaseTo,
          },
        },
      },
    ];
  } else if (releaseTo) {
    filter.endReleaseDate = {
      lte: releaseTo,
    };
  } else if (releaseFrom) {
    filter.startReleaseDate = {
      gte: releaseFrom,
    };
  }

  if (ageRestriction && ageRestriction.length > 0) {
    filter.ageRestriction = {
      in: ageRestriction as AgeRestrictionEnum[],
    };
  }

  if (genre && genre.length > 0) {
    filter.genresConnection = {
      genreId: {
        in: genre,
      },
    };
  }

  return filter;
};
