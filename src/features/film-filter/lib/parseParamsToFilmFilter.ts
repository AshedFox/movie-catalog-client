import { AgeRestrictionEnum, FilmFilter } from '@shared/api/graphql';

type Params = {
  title?: string;
  releaseDateGTE?: string;
  releaseDateLTE?: string;
  ageRestriction?: string[];
  genre?: string[];
  country?: string[];
  studio?: string[];
};

export const parseParamsToFilmFilter = (searchParams: Params): FilmFilter => {
  const {
    title,
    ageRestriction,
    genre,
    country,
    studio,
    releaseDateLTE,
    releaseDateGTE,
  } = searchParams;
  const filter: FilmFilter = {};

  if (title) {
    filter.title = {
      ilike: title,
    };
  }

  if (releaseDateGTE && releaseDateLTE) {
    filter.releaseDate = {
      btwn: {
        start: releaseDateGTE,
        end: releaseDateLTE,
      },
    };
  } else if (releaseDateLTE) {
    filter.releaseDate = {
      lte: releaseDateLTE,
    };
  } else if (releaseDateGTE) {
    filter.releaseDate = {
      gte: releaseDateGTE,
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
