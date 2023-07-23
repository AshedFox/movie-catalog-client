import { AgeRestrictionEnum, SeriesFilter } from '@shared/api/graphql';

type Params = {
  title?: string;
  releaseFrom?: string;
  releaseTo?: string;
  ageRestriction?: string[];
  genre?: string[];
  studio?: string[];
  country?: string[];
};

export const parseParamsToSeriesFilter = (
  searchParams: Params,
): SeriesFilter => {
  const {
    title,
    ageRestriction,
    genre,
    country,
    studio,
    releaseTo,
    releaseFrom,
  } = searchParams;
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
  if (studio && studio.length > 0) {
    filter.studiosConnection = {
      studioId: {
        in: studio,
      },
    };
  }

  if (country && country.length > 0) {
    filter.countriesConnection = {
      countryId: {
        in: country,
      },
    };
  }

  return filter;
};
