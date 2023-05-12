import { AgeRestrictionEnum, FilmFilter } from '@shared/api/graphql';

type Params = {
  title?: string;
  releaseDateGTE?: string;
  releaseDateLTE?: string;
  ageRestriction?: string[];
  genre?: string[];
};

export const parseParamsToFilmFilter = (searchParams: Params): FilmFilter => {
  const { title, ageRestriction, genre, releaseDateLTE, releaseDateGTE } =
    searchParams;
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

  return filter;
};
