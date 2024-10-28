/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum AccessModeEnum {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

export type AccessModeEnumFilter = {
  eq?: InputMaybe<AccessModeEnum>;
  in?: InputMaybe<Array<AccessModeEnum>>;
  neq?: InputMaybe<AccessModeEnum>;
  nin?: InputMaybe<Array<AccessModeEnum>>;
};

/** Movies age restrictions in MPAA system */
export enum AgeRestrictionEnum {
  G = 'G',
  NC17 = 'NC17',
  PG = 'PG',
  PG13 = 'PG13',
  R = 'R',
}

export type AgeRestrictionEnumFilter = {
  eq?: InputMaybe<AgeRestrictionEnum>;
  in?: InputMaybe<Array<AgeRestrictionEnum>>;
  neq?: InputMaybe<AgeRestrictionEnum>;
  nin?: InputMaybe<Array<AgeRestrictionEnum>>;
};

export enum AudioProfileEnum {
  PROFILE_2k = 'PROFILE_2k',
  PROFILE_4k = 'PROFILE_4k',
  PROFILE_144p = 'PROFILE_144p',
  PROFILE_240p = 'PROFILE_240p',
  PROFILE_360p = 'PROFILE_360p',
  PROFILE_480p = 'PROFILE_480p',
  PROFILE_720p = 'PROFILE_720p',
  PROFILE_1080p = 'PROFILE_1080p',
}

export type AuthResult = {
  __typename?: 'AuthResult';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: User;
};

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Collection = {
  __typename?: 'Collection';
  cover?: Maybe<Media>;
  coverId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isSystem: Scalars['Boolean'];
  movies: Array<Movie>;
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  rating: Scalars['Float'];
  reviews: Array<CollectionReview>;
  updatedAt: Scalars['DateTime'];
};

export type CollectionMoviesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MovieFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MovieSort>;
};

export type CollectionEntity_CollectionReviewFilter = {
  and?: InputMaybe<Array<CollectionEntity_CollectionReviewFilter>>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isSystem?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CollectionEntity_CollectionReviewFilter>>;
  ownerId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type CollectionEntity_CollectionReviewSort = {
  coverId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  isSystem?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
  ownerId?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
};

export type CollectionFilter = {
  and?: InputMaybe<Array<CollectionFilter>>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isSystem?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CollectionFilter>>;
  ownerId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type CollectionMovie = {
  __typename?: 'CollectionMovie';
  collection: Collection;
  collectionId: Scalars['ID'];
  movie: Movie;
  movieId: Scalars['ID'];
};

export type CollectionMovieEntity_FilmFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_FilmFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_FilmFilter>>;
};

export type CollectionMovieEntity_FilmSort = {
  collectionId?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
};

export type CollectionMovieEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MovieImageFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MovieImageFilter>>;
};

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
};

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<
    Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
  >;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
  >;
};

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter =
  {
    and?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    collectionId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
  };

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    and?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    collectionId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
  };

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    and?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    collectionId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
  };

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    and?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    collectionId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
  };

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    collectionId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
  };

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter =
  {
    and?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    collectionId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
  };

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    and?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    collectionId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
  };

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter =
  {
    and?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    collectionId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
  };

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<
    Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
  >;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
  >;
};

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<
    Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
  >;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
  >;
};

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    collectionId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
  };

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
};

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<
    Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
  >;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
  >;
};

export type CollectionMovieEntity_MovieEntity_MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
};

export type CollectionMovieEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MoviePersonFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MoviePersonFilter>>;
};

export type CollectionMovieEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MovieReviewFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MovieReviewFilter>>;
};

export type CollectionMovieEntity_MovieEntity_MovieVisitStatsLastMonthFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
};

export type CollectionMovieEntity_MovieFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_MovieFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_MovieFilter>>;
};

export type CollectionMovieEntity_MovieSort = {
  collectionId?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
};

export type CollectionMovieEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_SeriesEntity_SeasonFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_SeriesEntity_SeasonFilter>>;
};

export type CollectionMovieEntity_SeriesFilter = {
  and?: InputMaybe<Array<CollectionMovieEntity_SeriesFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<CollectionMovieEntity_SeriesFilter>>;
};

export type CollectionMovieEntity_SeriesSort = {
  collectionId?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
};

export type CollectionReview = {
  __typename?: 'CollectionReview';
  collection: Collection;
  collectionId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mark: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type CollectionReviewEdge = {
  __typename?: 'CollectionReviewEdge';
  cursor: Scalars['String'];
  node: CollectionReview;
};

export type CollectionReviewFilter = {
  and?: InputMaybe<Array<CollectionReviewFilter>>;
  collection?: InputMaybe<CollectionEntity_CollectionReviewFilter>;
  collectionId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  mark?: InputMaybe<IntFilter>;
  or?: InputMaybe<Array<CollectionReviewFilter>>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CollectionReviewSort = {
  collection?: InputMaybe<CollectionEntity_CollectionReviewSort>;
  collectionId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  mark?: InputMaybe<SortOptions>;
  text?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
  userId?: InputMaybe<SortOptions>;
};

export type CollectionSort = {
  coverId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  isSystem?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
  ownerId?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
};

export type CollectionUser = {
  __typename?: 'CollectionUser';
  collection: Collection;
  collectionId: Scalars['ID'];
  isBookmarked: Scalars['Boolean'];
  isWatched: Scalars['Boolean'];
  user: User;
  userId: Scalars['ID'];
};

export type CollectionUserFilter = {
  and?: InputMaybe<Array<CollectionUserFilter>>;
  collectionId?: InputMaybe<IdFilter>;
  isBookmarked?: InputMaybe<BooleanFilter>;
  isWatched?: InputMaybe<BooleanFilter>;
  or?: InputMaybe<Array<CollectionUserFilter>>;
  userId?: InputMaybe<IdFilter>;
};

export type CollectionUserSort = {
  collectionId?: InputMaybe<SortOptions>;
  isBookmarked?: InputMaybe<SortOptions>;
  isWatched?: InputMaybe<SortOptions>;
  userId?: InputMaybe<SortOptions>;
};

export type Country = {
  __typename?: 'Country';
  currency: Currency;
  currencyId: Scalars['String'];
  id: Scalars['ID'];
  language: Language;
  languageId: Scalars['String'];
  moviesCount: Scalars['Int'];
  name: Scalars['String'];
};

export type CountryMoviesCountArgs = {
  type?: InputMaybe<MovieTypeEnum>;
};

export type CountryEntity_MovieCountryEntity_FilmFilter = {
  and?: InputMaybe<Array<CountryEntity_MovieCountryEntity_FilmFilter>>;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_FilmFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_FilmFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CountryEntity_MovieCountryEntity_FilmFilter>>;
};

export type CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<Array<CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter>>;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter>>;
};

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<
    Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>
  >;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
};

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    and?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
    currencyId?: InputMaybe<StringFilter>;
    id?: InputMaybe<IdFilter>;
    language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
    languageId?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
  };

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter =
  {
    and?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    currencyId?: InputMaybe<StringFilter>;
    id?: InputMaybe<IdFilter>;
    languageId?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
  };

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter =
  {
    and?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    currencyId?: InputMaybe<StringFilter>;
    id?: InputMaybe<IdFilter>;
    languageId?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
  };

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter =
  {
    and?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    currencyId?: InputMaybe<StringFilter>;
    id?: InputMaybe<IdFilter>;
    languageId?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
  };

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    and?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
    currencyId?: InputMaybe<StringFilter>;
    id?: InputMaybe<IdFilter>;
    language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
    languageId?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
  };

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    and?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
    currencyId?: InputMaybe<StringFilter>;
    id?: InputMaybe<IdFilter>;
    language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
    languageId?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
  };

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    currencyId?: InputMaybe<StringFilter>;
    id?: InputMaybe<IdFilter>;
    language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    languageId?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
  };

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<
    Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>
  >;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>
  >;
};

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    and?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
    currencyId?: InputMaybe<StringFilter>;
    id?: InputMaybe<IdFilter>;
    language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
    languageId?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
  };

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<
    Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
  >;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
  >;
};

export type CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter>>;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter>>;
};

export type CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<Array<CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter>>;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter>>;
};

export type CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter = {
  and?: InputMaybe<
    Array<CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
  >;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
  >;
};

export type CountryEntity_MovieCountryEntity_MovieFilter = {
  and?: InputMaybe<Array<CountryEntity_MovieCountryEntity_MovieFilter>>;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_MovieFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CountryEntity_MovieCountryEntity_MovieFilter>>;
};

export type CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<Array<CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter>>;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter>>;
};

export type CountryEntity_MovieCountryEntity_SeriesFilter = {
  and?: InputMaybe<Array<CountryEntity_MovieCountryEntity_SeriesFilter>>;
  currency?: InputMaybe<CurrencyEntity_CountryEntity_MovieCountryEntity_SeriesFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryEntity_MovieCountryEntity_SeriesFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CountryEntity_MovieCountryEntity_SeriesFilter>>;
};

export type CountryFilter = {
  and?: InputMaybe<Array<CountryFilter>>;
  currency?: InputMaybe<CurrencyEntity_CountryFilter>;
  currencyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<LanguageEntity_CountryFilter>;
  languageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CountryFilter>>;
};

export type CountrySort = {
  currency?: InputMaybe<CurrencyEntity_CountrySort>;
  currencyId?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  language?: InputMaybe<LanguageEntity_CountrySort>;
  languageId?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
};

export type CreateCollectionInput = {
  coverId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  isSystem?: InputMaybe<Scalars['Boolean']>;
  moviesIds?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
};

export type CreateCollectionReviewInput = {
  collectionId: Scalars['Int'];
  mark: Scalars['Int'];
  text?: InputMaybe<Scalars['String']>;
};

export type CreateCollectionUserInput = {
  collectionId: Scalars['Int'];
  isBookmarked?: InputMaybe<Scalars['Boolean']>;
  isWatched?: InputMaybe<Scalars['Boolean']>;
};

export type CreateCountryInput = {
  currencyId: Scalars['String'];
  id: Scalars['String'];
  languageId: Scalars['String'];
  name: Scalars['String'];
};

export type CreateCurrencyInput = {
  id: Scalars['String'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type CreateEpisodeInput = {
  accessMode?: InputMaybe<AccessModeEnum>;
  ageRestriction?: InputMaybe<AgeRestrictionEnum>;
  coverId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  numberInSeason: Scalars['Int'];
  numberInSeries: Scalars['Int'];
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  seasonId: Scalars['String'];
  seriesId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['Float']>;
};

export type CreateFilmInput = {
  accessMode: AccessModeEnum;
  ageRestriction?: InputMaybe<AgeRestrictionEnum>;
  countriesIds?: InputMaybe<Array<Scalars['String']>>;
  coverId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  genresIds?: InputMaybe<Array<Scalars['String']>>;
  productId?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  studiosIds?: InputMaybe<Array<Scalars['Int']>>;
  title: Scalars['String'];
  videoId?: InputMaybe<Scalars['Int']>;
};

export type CreateGenreInput = {
  name: Scalars['String'];
};

export type CreateLanguageInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type CreateMovieImageInput = {
  imageId: Scalars['String'];
  movieId: Scalars['String'];
  typeId: Scalars['Int'];
};

export type CreateMovieImageTypeInput = {
  name: Scalars['String'];
};

export type CreateMoviePersonInput = {
  movieId: Scalars['String'];
  personId: Scalars['Int'];
  role?: InputMaybe<Scalars['String']>;
  typeId: Scalars['Int'];
};

export type CreateMoviePersonTypeInput = {
  name: Scalars['String'];
};

export type CreateMovieReviewInput = {
  mark: Scalars['Int'];
  movieId: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
};

export type CreateMovieUserInput = {
  isBookmarked?: InputMaybe<Scalars['Boolean']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  isWatched?: InputMaybe<Scalars['Boolean']>;
  movieId: Scalars['String'];
};

export type CreatePersonInput = {
  countryId?: InputMaybe<Scalars['String']>;
  imageId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreatePlanInput = {
  name: Scalars['String'];
  prices: Array<CreatePlanInput_Price>;
};

export type CreatePlanInput_Price = {
  amount: Scalars['Int'];
  currencyId: Scalars['String'];
  interval: PlanIntervalEnum;
};

export type CreatePriceInput = {
  amount: Scalars['Int'];
  currencyId: Scalars['String'];
  interval?: InputMaybe<PlanIntervalEnum>;
  productId: Scalars['String'];
};

export type CreateProductInput = {
  movieId: Scalars['String'];
  prices: Array<CreateProductInput_Price>;
};

export type CreateProductInput_Price = {
  amount: Scalars['Int'];
  currencyId: Scalars['String'];
};

export type CreateRoomInput = {
  name: Scalars['String'];
};

export type CreateRoomMovieInput = {
  episodeNumber?: InputMaybe<Scalars['Int']>;
  movieId: Scalars['String'];
  roomId: Scalars['String'];
};

export type CreateSeasonInput = {
  accessMode?: InputMaybe<AccessModeEnum>;
  ageRestriction?: InputMaybe<AgeRestrictionEnum>;
  description?: InputMaybe<Scalars['String']>;
  endReleaseDate?: InputMaybe<Scalars['DateTime']>;
  numberInSeries: Scalars['Int'];
  seriesId: Scalars['String'];
  startReleaseDate?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateSeriesInput = {
  accessMode: AccessModeEnum;
  ageRestriction?: InputMaybe<AgeRestrictionEnum>;
  countriesIds?: InputMaybe<Array<Scalars['String']>>;
  coverId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endReleaseDate?: InputMaybe<Scalars['DateTime']>;
  genresIds?: InputMaybe<Array<Scalars['String']>>;
  productId?: InputMaybe<Scalars['String']>;
  startReleaseDate?: InputMaybe<Scalars['DateTime']>;
  studiosIds?: InputMaybe<Array<Scalars['Int']>>;
  title: Scalars['String'];
};

export type CreateStudioInput = {
  countriesIds?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
};

export type CreateSubtitlesInput = {
  fileId: Scalars['String'];
  languageId: Scalars['String'];
  videoId: Scalars['Int'];
};

export type CreateTrailerInput = {
  movieId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  videoId: Scalars['Float'];
};

export type CreateUploadResult = {
  __typename?: 'CreateUploadResult';
  mediaId: Scalars['ID'];
  uploadUrl: Scalars['String'];
};

export type CreateVideoVariantInput = {
  mediaId: Scalars['String'];
  profile: VideoProfileEnum;
  videoId: Scalars['Int'];
};

export type Currency = {
  __typename?: 'Currency';
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type CurrencyEntity_CountryEntity_MovieCountryEntity_FilmFilter = {
  and?: InputMaybe<Array<CurrencyEntity_CountryEntity_MovieCountryEntity_FilmFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CurrencyEntity_CountryEntity_MovieCountryEntity_FilmFilter>>;
  symbol?: InputMaybe<StringFilter>;
};

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<
    Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter>
  >;
  symbol?: InputMaybe<StringFilter>;
};

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter =
  {
    and?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    symbol?: InputMaybe<StringFilter>;
  };

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    and?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    symbol?: InputMaybe<StringFilter>;
  };

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    and?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    symbol?: InputMaybe<StringFilter>;
  };

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    and?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    symbol?: InputMaybe<StringFilter>;
  };

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    symbol?: InputMaybe<StringFilter>;
  };

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter =
  {
    and?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    symbol?: InputMaybe<StringFilter>;
  };

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    and?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    symbol?: InputMaybe<StringFilter>;
  };

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter =
  {
    and?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    symbol?: InputMaybe<StringFilter>;
  };

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<
    Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter>
  >;
  symbol?: InputMaybe<StringFilter>;
};

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<
    Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter>
  >;
  symbol?: InputMaybe<StringFilter>;
};

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    symbol?: InputMaybe<StringFilter>;
  };

export type CurrencyEntity_CountryEntity_MovieCountryEntity_MovieFilter = {
  and?: InputMaybe<Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CurrencyEntity_CountryEntity_MovieCountryEntity_MovieFilter>>;
  symbol?: InputMaybe<StringFilter>;
};

export type CurrencyEntity_CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<
    Array<CurrencyEntity_CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CurrencyEntity_CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter>>;
  symbol?: InputMaybe<StringFilter>;
};

export type CurrencyEntity_CountryEntity_MovieCountryEntity_SeriesFilter = {
  and?: InputMaybe<Array<CurrencyEntity_CountryEntity_MovieCountryEntity_SeriesFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CurrencyEntity_CountryEntity_MovieCountryEntity_SeriesFilter>>;
  symbol?: InputMaybe<StringFilter>;
};

export type CurrencyEntity_CountryFilter = {
  and?: InputMaybe<Array<CurrencyEntity_CountryFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CurrencyEntity_CountryFilter>>;
  symbol?: InputMaybe<StringFilter>;
};

export type CurrencyEntity_CountrySort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
  symbol?: InputMaybe<SortOptions>;
};

export type CurrencyFilter = {
  and?: InputMaybe<Array<CurrencyFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<CurrencyFilter>>;
  symbol?: InputMaybe<StringFilter>;
};

export type CurrencySort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
  symbol?: InputMaybe<SortOptions>;
};

export type DateBetween = {
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type DateFilter = {
  btwn?: InputMaybe<DateBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  nbtwn?: InputMaybe<DateBetween>;
  neq?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Episode = {
  __typename?: 'Episode';
  accessMode: AccessModeEnum;
  ageRestriction?: Maybe<AgeRestrictionEnum>;
  cover?: Maybe<Media>;
  coverId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  numberInSeason: Scalars['Int'];
  numberInSeries: Scalars['Int'];
  publicationDate: Scalars['DateTime'];
  releaseDate?: Maybe<Scalars['DateTime']>;
  season: Season;
  seasonId: Scalars['String'];
  series: Series;
  seriesId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  video?: Maybe<Video>;
  videoId?: Maybe<Scalars['Float']>;
};

export type EpisodeFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<EpisodeFilter>>;
  cover?: InputMaybe<MediaEntity_EpisodeFilter>;
  coverId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  numberInSeason?: InputMaybe<IntFilter>;
  numberInSeries?: InputMaybe<IntFilter>;
  or?: InputMaybe<Array<EpisodeFilter>>;
  publicationDate?: InputMaybe<DateFilter>;
  releaseDate?: InputMaybe<DateFilter>;
  seasonId?: InputMaybe<StringFilter>;
  seriesId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type EpisodeSort = {
  accessMode?: InputMaybe<SortOptions>;
  ageRestriction?: InputMaybe<SortOptions>;
  cover?: InputMaybe<MediaEntity_EpisodeSort>;
  coverId?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  numberInSeason?: InputMaybe<SortOptions>;
  numberInSeries?: InputMaybe<SortOptions>;
  publicationDate?: InputMaybe<SortOptions>;
  releaseDate?: InputMaybe<SortOptions>;
  seasonId?: InputMaybe<SortOptions>;
  seriesId?: InputMaybe<SortOptions>;
  title?: InputMaybe<SortOptions>;
  videoId?: InputMaybe<SortOptions>;
};

export type Film = Movie & {
  __typename?: 'Film';
  accessMode: AccessModeEnum;
  ageRestriction?: Maybe<AgeRestrictionEnum>;
  collections: Array<Collection>;
  collectionsConnection: Array<CollectionMovie>;
  countries: Array<Country>;
  countriesConnection: Array<MovieCountry>;
  cover?: Maybe<Media>;
  coverId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  genres: Array<Genre>;
  genresConnection: Array<MovieGenre>;
  id: Scalars['ID'];
  movieImages: Array<MovieImage>;
  moviePersons: Array<MoviePerson>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']>;
  rating: Scalars['Float'];
  releaseDate?: Maybe<Scalars['DateTime']>;
  reviews: Array<MovieReview>;
  studios: Array<Studio>;
  studiosConnection: Array<MovieStudio>;
  title: Scalars['String'];
  trailers: Array<Trailer>;
  type: MovieTypeEnum;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<Video>;
  videoId?: Maybe<Scalars['Float']>;
};

export type FilmFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<FilmFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_FilmFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_FilmFilter>;
  cover?: InputMaybe<MediaEntity_FilmFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_FilmFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_FilmFilter>;
  or?: InputMaybe<Array<FilmFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_FilmFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type FilmSort = {
  accessMode?: InputMaybe<SortOptions>;
  ageRestriction?: InputMaybe<SortOptions>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_FilmSort>;
  countriesConnection?: InputMaybe<MovieCountryEntity_FilmSort>;
  cover?: InputMaybe<MediaEntity_FilmSort>;
  coverId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  genresConnection?: InputMaybe<MovieGenreEntity_FilmSort>;
  id?: InputMaybe<SortOptions>;
  moviePersons?: InputMaybe<MoviePersonEntity_FilmSort>;
  releaseDate?: InputMaybe<SortOptions>;
  studiosConnection?: InputMaybe<MovieStudioEntity_FilmSort>;
  title?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
  videoId?: InputMaybe<SortOptions>;
};

export enum FormatEnum {
  MP4 = 'MP4',
  WEBM = 'WEBM',
}

export type GenerateVideoAudiosInput = {
  format: FormatEnum;
  languageId: Scalars['String'];
  originalMediaUrl: Scalars['String'];
  profiles: Array<VideoProfileEnum>;
  videoId: Scalars['Int'];
};

export type GenerateVideoVariantsInput = {
  format: FormatEnum;
  originalMediaUrl: Scalars['String'];
  profiles: Array<VideoProfileEnum>;
  videoId: Scalars['Int'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID'];
  moviesCount: Scalars['Int'];
  name: Scalars['String'];
};

export type GenreMoviesCountArgs = {
  type?: InputMaybe<MovieTypeEnum>;
};

export type GenreFilter = {
  and?: InputMaybe<Array<GenreFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<GenreFilter>>;
};

export type GenreSort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
};

export type IdBetween = {
  end: Scalars['ID'];
  start: Scalars['ID'];
};

export type IdFilter = {
  btwn?: InputMaybe<IdBetween>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  ilike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  nbtwn?: InputMaybe<IdBetween>;
  neq?: InputMaybe<Scalars['ID']>;
  nilike?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<Scalars['ID']>>;
  nlike?: InputMaybe<Scalars['ID']>;
};

export type IntBetween = {
  end: Scalars['Int'];
  start: Scalars['Int'];
};

export type IntFilter = {
  btwn?: InputMaybe<IntBetween>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  nbtwn?: InputMaybe<IntBetween>;
  neq?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LanguageEntity_CountryEntity_MovieCountryEntity_FilmFilter = {
  and?: InputMaybe<Array<LanguageEntity_CountryEntity_MovieCountryEntity_FilmFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<LanguageEntity_CountryEntity_MovieCountryEntity_FilmFilter>>;
};

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<
    Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter>
  >;
};

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter =
  {
    and?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
  };

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    and?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
  };

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    and?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
  };

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    and?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
  };

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
  };

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter =
  {
    and?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
  };

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    and?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
  };

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter =
  {
    and?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
  };

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<
    Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter>
  >;
};

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<
    Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter>
  >;
};

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
  };

export type LanguageEntity_CountryEntity_MovieCountryEntity_MovieFilter = {
  and?: InputMaybe<Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<LanguageEntity_CountryEntity_MovieCountryEntity_MovieFilter>>;
};

export type LanguageEntity_CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<
    Array<LanguageEntity_CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<LanguageEntity_CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter>>;
};

export type LanguageEntity_CountryEntity_MovieCountryEntity_SeriesFilter = {
  and?: InputMaybe<Array<LanguageEntity_CountryEntity_MovieCountryEntity_SeriesFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<LanguageEntity_CountryEntity_MovieCountryEntity_SeriesFilter>>;
};

export type LanguageEntity_CountryFilter = {
  and?: InputMaybe<Array<LanguageEntity_CountryFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<LanguageEntity_CountryFilter>>;
};

export type LanguageEntity_CountrySort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
};

export type LanguageFilter = {
  and?: InputMaybe<Array<LanguageFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<LanguageFilter>>;
};

export type LanguageSort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  id: Scalars['ID'];
  type: MediaTypeEnum;
  url: Scalars['String'];
};

export type MediaEntity_EpisodeFilter = {
  and?: InputMaybe<Array<MediaEntity_EpisodeFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_EpisodeFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_EpisodeSort = {
  id?: InputMaybe<SortOptions>;
  type?: InputMaybe<SortOptions>;
  url?: InputMaybe<SortOptions>;
};

export type MediaEntity_FilmFilter = {
  and?: InputMaybe<Array<MediaEntity_FilmFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_FilmFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_FilmSort = {
  id?: InputMaybe<SortOptions>;
  type?: InputMaybe<SortOptions>;
  url?: InputMaybe<SortOptions>;
};

export type MediaEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MovieImageFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MovieImageFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<
    Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
  >;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
  >;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    and?: InputMaybe<
      Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    id?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    type?: InputMaybe<MediaTypeEnumFilter>;
    url?: InputMaybe<StringFilter>;
  };

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    and?: InputMaybe<
      Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    id?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    type?: InputMaybe<MediaTypeEnumFilter>;
    url?: InputMaybe<StringFilter>;
  };

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    and?: InputMaybe<
      Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    id?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    type?: InputMaybe<MediaTypeEnumFilter>;
    url?: InputMaybe<StringFilter>;
  };

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    id?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    type?: InputMaybe<MediaTypeEnumFilter>;
    url?: InputMaybe<StringFilter>;
  };

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<
    Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
  >;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
  >;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    and?: InputMaybe<
      Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    id?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    type?: InputMaybe<MediaTypeEnumFilter>;
    url?: InputMaybe<StringFilter>;
  };

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<
    Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
  >;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
  >;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter = {
  and?: InputMaybe<
    Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
  >;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
  >;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MoviePersonFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MovieReviewFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MovieReviewFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieEntity_MovieVisitStatsLastMonthFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieFilter = {
  and?: InputMaybe<Array<MediaEntity_MovieFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_MovieFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_MovieSort = {
  id?: InputMaybe<SortOptions>;
  type?: InputMaybe<SortOptions>;
  url?: InputMaybe<SortOptions>;
};

export type MediaEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<Array<MediaEntity_SeriesEntity_SeasonFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_SeriesEntity_SeasonFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_SeriesFilter = {
  and?: InputMaybe<Array<MediaEntity_SeriesFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaEntity_SeriesFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaEntity_SeriesSort = {
  id?: InputMaybe<SortOptions>;
  type?: InputMaybe<SortOptions>;
  url?: InputMaybe<SortOptions>;
};

export type MediaFilter = {
  and?: InputMaybe<Array<MediaFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MediaFilter>>;
  type?: InputMaybe<MediaTypeEnumFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MediaSort = {
  id?: InputMaybe<SortOptions>;
  type?: InputMaybe<SortOptions>;
  url?: InputMaybe<SortOptions>;
};

export enum MediaTypeEnum {
  IMAGE = 'IMAGE',
  RAW = 'RAW',
  VIDEO = 'VIDEO',
}

export type MediaTypeEnumFilter = {
  eq?: InputMaybe<MediaTypeEnum>;
  in?: InputMaybe<Array<MediaTypeEnum>>;
  neq?: InputMaybe<MediaTypeEnum>;
  nin?: InputMaybe<Array<MediaTypeEnum>>;
};

export type MoveRoomMovieInput = {
  newOrder: Scalars['Int'];
  oldOrder: Scalars['Int'];
};

export type Movie = {
  accessMode: AccessModeEnum;
  ageRestriction?: Maybe<AgeRestrictionEnum>;
  collections: Array<Collection>;
  collectionsConnection: Array<CollectionMovie>;
  countries: Array<Country>;
  countriesConnection: Array<MovieCountry>;
  cover?: Maybe<Media>;
  coverId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  genres: Array<Genre>;
  genresConnection: Array<MovieGenre>;
  id: Scalars['ID'];
  movieImages: Array<MovieImage>;
  moviePersons: Array<MoviePerson>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']>;
  rating: Scalars['Float'];
  reviews: Array<MovieReview>;
  studios: Array<Studio>;
  studiosConnection: Array<MovieStudio>;
  title: Scalars['String'];
  trailers: Array<Trailer>;
  type: MovieTypeEnum;
  updatedAt: Scalars['DateTime'];
};

export type MovieCountry = {
  __typename?: 'MovieCountry';
  country: Country;
  countryId: Scalars['ID'];
  movie: Movie;
  movieId: Scalars['ID'];
};

export type MovieCountryEntity_FilmFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_FilmFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_FilmFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_FilmFilter>>;
};

export type MovieCountryEntity_FilmSort = {
  countryId?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
};

export type MovieCountryEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MovieImageFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MovieImageFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MovieImageFilter>>;
};

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
};

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<
    Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
  >;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
  >;
};

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter =
  {
    and?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
    countryId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
  };

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    and?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    countryId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
  };

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    and?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    countryId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
  };

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    and?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    countryId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
  };

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    countryId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
  };

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter =
  {
    and?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
    countryId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
  };

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    and?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    countryId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
  };

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter =
  {
    and?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
    countryId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
  };

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<
    Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
  >;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
  >;
};

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<
    Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
  >;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
  >;
};

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    countryId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
  };

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
};

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<
    Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
  >;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
  >;
};

export type MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
};

export type MovieCountryEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MoviePersonFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MoviePersonFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MoviePersonFilter>>;
};

export type MovieCountryEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MovieReviewFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MovieReviewFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MovieReviewFilter>>;
};

export type MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
};

export type MovieCountryEntity_MovieFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_MovieFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_MovieFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_MovieFilter>>;
};

export type MovieCountryEntity_MovieSort = {
  countryId?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
};

export type MovieCountryEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_SeriesEntity_SeasonFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_SeriesEntity_SeasonFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_SeriesEntity_SeasonFilter>>;
};

export type MovieCountryEntity_SeriesFilter = {
  and?: InputMaybe<Array<MovieCountryEntity_SeriesFilter>>;
  country?: InputMaybe<CountryEntity_MovieCountryEntity_SeriesFilter>;
  countryId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieCountryEntity_SeriesFilter>>;
};

export type MovieCountryEntity_SeriesSort = {
  countryId?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
};

export type MovieEntity_MovieImageFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MovieImageFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MovieImageFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MovieImageFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MovieImageFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MovieImageFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MovieImageFilter>;
  or?: InputMaybe<Array<MovieEntity_MovieImageFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MovieImageFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MovieImageSort = {
  accessMode?: InputMaybe<SortOptions>;
  ageRestriction?: InputMaybe<SortOptions>;
  coverId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  endReleaseDate?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  releaseDate?: InputMaybe<SortOptions>;
  startReleaseDate?: InputMaybe<SortOptions>;
  title?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
  videoId?: InputMaybe<SortOptions>;
};

export type MovieEntity_MoviePersonEntity_FilmFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_FilmFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_FilmFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    accessMode?: InputMaybe<AccessModeEnumFilter>;
    ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
    and?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
    countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
    cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
    coverId?: InputMaybe<StringFilter>;
    createdAt?: InputMaybe<DateFilter>;
    description?: InputMaybe<StringFilter>;
    endReleaseDate?: InputMaybe<DateFilter>;
    genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
    id?: InputMaybe<IdFilter>;
    moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
    or?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    releaseDate?: InputMaybe<DateFilter>;
    startReleaseDate?: InputMaybe<DateFilter>;
    studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateFilter>;
    videoId?: InputMaybe<NumberFilter>;
  };

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter =
  {
    accessMode?: InputMaybe<AccessModeEnumFilter>;
    ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
    and?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    coverId?: InputMaybe<StringFilter>;
    createdAt?: InputMaybe<DateFilter>;
    description?: InputMaybe<StringFilter>;
    id?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    releaseDate?: InputMaybe<DateFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateFilter>;
    videoId?: InputMaybe<NumberFilter>;
  };

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter =
  {
    accessMode?: InputMaybe<AccessModeEnumFilter>;
    ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
    and?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    coverId?: InputMaybe<StringFilter>;
    createdAt?: InputMaybe<DateFilter>;
    description?: InputMaybe<StringFilter>;
    endReleaseDate?: InputMaybe<DateFilter>;
    id?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    releaseDate?: InputMaybe<DateFilter>;
    startReleaseDate?: InputMaybe<DateFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateFilter>;
    videoId?: InputMaybe<NumberFilter>;
  };

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter =
  {
    accessMode?: InputMaybe<AccessModeEnumFilter>;
    ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
    and?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    coverId?: InputMaybe<StringFilter>;
    createdAt?: InputMaybe<DateFilter>;
    description?: InputMaybe<StringFilter>;
    endReleaseDate?: InputMaybe<DateFilter>;
    id?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    releaseDate?: InputMaybe<DateFilter>;
    startReleaseDate?: InputMaybe<DateFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateFilter>;
    videoId?: InputMaybe<NumberFilter>;
  };

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    accessMode?: InputMaybe<AccessModeEnumFilter>;
    ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
    and?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
    countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
    cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
    coverId?: InputMaybe<StringFilter>;
    createdAt?: InputMaybe<DateFilter>;
    description?: InputMaybe<StringFilter>;
    endReleaseDate?: InputMaybe<DateFilter>;
    genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
    id?: InputMaybe<IdFilter>;
    moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
    or?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    releaseDate?: InputMaybe<DateFilter>;
    startReleaseDate?: InputMaybe<DateFilter>;
    studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateFilter>;
    videoId?: InputMaybe<NumberFilter>;
  };

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    accessMode?: InputMaybe<AccessModeEnumFilter>;
    ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
    and?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
    countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
    cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
    coverId?: InputMaybe<StringFilter>;
    createdAt?: InputMaybe<DateFilter>;
    description?: InputMaybe<StringFilter>;
    endReleaseDate?: InputMaybe<DateFilter>;
    genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
    id?: InputMaybe<IdFilter>;
    moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
    or?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    releaseDate?: InputMaybe<DateFilter>;
    startReleaseDate?: InputMaybe<DateFilter>;
    studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateFilter>;
    videoId?: InputMaybe<NumberFilter>;
  };

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    accessMode?: InputMaybe<AccessModeEnumFilter>;
    ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
    and?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    coverId?: InputMaybe<StringFilter>;
    createdAt?: InputMaybe<DateFilter>;
    description?: InputMaybe<StringFilter>;
    endReleaseDate?: InputMaybe<DateFilter>;
    genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    id?: InputMaybe<IdFilter>;
    moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    or?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    releaseDate?: InputMaybe<DateFilter>;
    startReleaseDate?: InputMaybe<DateFilter>;
    studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateFilter>;
    videoId?: InputMaybe<NumberFilter>;
  };

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    accessMode?: InputMaybe<AccessModeEnumFilter>;
    ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
    and?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
    countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
    cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
    coverId?: InputMaybe<StringFilter>;
    createdAt?: InputMaybe<DateFilter>;
    description?: InputMaybe<StringFilter>;
    endReleaseDate?: InputMaybe<DateFilter>;
    genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
    id?: InputMaybe<IdFilter>;
    moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
    or?: InputMaybe<
      Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    releaseDate?: InputMaybe<DateFilter>;
    startReleaseDate?: InputMaybe<DateFilter>;
    studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<DateFilter>;
    videoId?: InputMaybe<NumberFilter>;
  };

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonEntity_MovieFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_MovieFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonEntity_SeriesFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonEntity_SeriesFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonEntity_SeriesFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MoviePersonFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MoviePersonFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MoviePersonFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MoviePersonFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MoviePersonFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  or?: InputMaybe<Array<MovieEntity_MoviePersonFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MoviePersonFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MoviePersonSort = {
  accessMode?: InputMaybe<SortOptions>;
  ageRestriction?: InputMaybe<SortOptions>;
  coverId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  endReleaseDate?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  releaseDate?: InputMaybe<SortOptions>;
  startReleaseDate?: InputMaybe<SortOptions>;
  title?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
  videoId?: InputMaybe<SortOptions>;
};

export type MovieEntity_MovieReviewFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MovieReviewFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MovieReviewFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MovieReviewFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MovieReviewFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MovieReviewFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  or?: InputMaybe<Array<MovieEntity_MovieReviewFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MovieReviewFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MovieReviewSort = {
  accessMode?: InputMaybe<SortOptions>;
  ageRestriction?: InputMaybe<SortOptions>;
  coverId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  endReleaseDate?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  releaseDate?: InputMaybe<SortOptions>;
  startReleaseDate?: InputMaybe<SortOptions>;
  title?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
  videoId?: InputMaybe<SortOptions>;
};

export type MovieEntity_MovieVisitStatsLastMonthFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieEntity_MovieVisitStatsLastMonthFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  cover?: InputMaybe<MediaEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  or?: InputMaybe<Array<MovieEntity_MovieVisitStatsLastMonthFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieEntity_MovieVisitStatsLastMonthSort = {
  accessMode?: InputMaybe<SortOptions>;
  ageRestriction?: InputMaybe<SortOptions>;
  coverId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  endReleaseDate?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  releaseDate?: InputMaybe<SortOptions>;
  startReleaseDate?: InputMaybe<SortOptions>;
  title?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
  videoId?: InputMaybe<SortOptions>;
};

export type MovieFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<MovieFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieFilter>;
  cover?: InputMaybe<MediaEntity_MovieFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieFilter>;
  or?: InputMaybe<Array<MovieFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type MovieGenre = {
  __typename?: 'MovieGenre';
  genre: Genre;
  genreId: Scalars['ID'];
  movie: Movie;
  movieId: Scalars['ID'];
};

export type MovieGenreEntity_FilmFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_FilmFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_FilmFilter>>;
};

export type MovieGenreEntity_FilmSort = {
  genreId?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
};

export type MovieGenreEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MovieImageFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MovieImageFilter>>;
};

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
};

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<
    Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
  >;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
  >;
};

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter =
  {
    and?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    genreId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
  };

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    and?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    genreId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
  };

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    and?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    genreId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
  };

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    and?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    genreId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
  };

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    genreId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
  };

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter =
  {
    and?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    genreId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
  };

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    and?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    genreId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
  };

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter =
  {
    and?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    genreId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
  };

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<
    Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
  >;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
  >;
};

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<
    Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
  >;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
  >;
};

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    genreId?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
  };

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
};

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>>;
};

export type MovieGenreEntity_MovieEntity_MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
};

export type MovieGenreEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MoviePersonFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MoviePersonFilter>>;
};

export type MovieGenreEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MovieReviewFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MovieReviewFilter>>;
};

export type MovieGenreEntity_MovieEntity_MovieVisitStatsLastMonthFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
};

export type MovieGenreEntity_MovieFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_MovieFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_MovieFilter>>;
};

export type MovieGenreEntity_MovieSort = {
  genreId?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
};

export type MovieGenreEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_SeriesEntity_SeasonFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_SeriesEntity_SeasonFilter>>;
};

export type MovieGenreEntity_SeriesFilter = {
  and?: InputMaybe<Array<MovieGenreEntity_SeriesFilter>>;
  genreId?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieGenreEntity_SeriesFilter>>;
};

export type MovieGenreEntity_SeriesSort = {
  genreId?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
};

export type MovieImage = {
  __typename?: 'MovieImage';
  id: Scalars['ID'];
  image: Media;
  imageId: Scalars['ID'];
  movie: Movie;
  movieId: Scalars['ID'];
  type?: Maybe<MovieImageType>;
  typeId?: Maybe<Scalars['Int']>;
};

export type MovieImageFilter = {
  and?: InputMaybe<Array<MovieImageFilter>>;
  id?: InputMaybe<IdFilter>;
  imageId?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MovieImageFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieImageFilter>>;
  type?: InputMaybe<MovieImageTypeEntity_MovieImageFilter>;
  typeId?: InputMaybe<IntFilter>;
};

export type MovieImageSort = {
  id?: InputMaybe<SortOptions>;
  imageId?: InputMaybe<SortOptions>;
  movie?: InputMaybe<MovieEntity_MovieImageSort>;
  movieId?: InputMaybe<SortOptions>;
  type?: InputMaybe<MovieImageTypeEntity_MovieImageSort>;
  typeId?: InputMaybe<SortOptions>;
};

export type MovieImageType = {
  __typename?: 'MovieImageType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MovieImageTypeEntity_MovieImageFilter = {
  and?: InputMaybe<Array<MovieImageTypeEntity_MovieImageFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MovieImageTypeEntity_MovieImageFilter>>;
};

export type MovieImageTypeEntity_MovieImageSort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
};

export type MovieImageTypeFilter = {
  and?: InputMaybe<Array<MovieImageTypeFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MovieImageTypeFilter>>;
};

export type MovieImageTypeSort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
};

export type MoviePerson = {
  __typename?: 'MoviePerson';
  id: Scalars['ID'];
  movie: Movie;
  movieId: Scalars['String'];
  person: Person;
  personId: Scalars['Float'];
  role?: Maybe<Scalars['String']>;
  type: MoviePersonType;
  typeId: Scalars['Float'];
};

export type MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_FilmFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_FilmFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_FilmFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_FilmFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_FilmSort = {
  id?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
  personId?: InputMaybe<SortOptions>;
  role?: InputMaybe<SortOptions>;
  typeId?: InputMaybe<SortOptions>;
};

export type MoviePersonEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MovieImageFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MovieImageFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<
    Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
  >;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
  >;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    id?: InputMaybe<IdFilter>;
    movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
    movieId?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    personId?: InputMaybe<NumberFilter>;
    role?: InputMaybe<StringFilter>;
    type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>;
    typeId?: InputMaybe<NumberFilter>;
  };

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    id?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    personId?: InputMaybe<NumberFilter>;
    role?: InputMaybe<StringFilter>;
    typeId?: InputMaybe<NumberFilter>;
  };

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    id?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    personId?: InputMaybe<NumberFilter>;
    role?: InputMaybe<StringFilter>;
    typeId?: InputMaybe<NumberFilter>;
  };

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    id?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    personId?: InputMaybe<NumberFilter>;
    role?: InputMaybe<StringFilter>;
    typeId?: InputMaybe<NumberFilter>;
  };

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    id?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    personId?: InputMaybe<NumberFilter>;
    role?: InputMaybe<StringFilter>;
    typeId?: InputMaybe<NumberFilter>;
  };

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    id?: InputMaybe<IdFilter>;
    movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
    movieId?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    personId?: InputMaybe<NumberFilter>;
    role?: InputMaybe<StringFilter>;
    type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
    typeId?: InputMaybe<NumberFilter>;
  };

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    id?: InputMaybe<IdFilter>;
    movieId?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    personId?: InputMaybe<NumberFilter>;
    role?: InputMaybe<StringFilter>;
    typeId?: InputMaybe<NumberFilter>;
  };

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    id?: InputMaybe<IdFilter>;
    movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
    movieId?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    personId?: InputMaybe<NumberFilter>;
    role?: InputMaybe<StringFilter>;
    type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
    typeId?: InputMaybe<NumberFilter>;
  };

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<
    Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
  >;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
  >;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<
    Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
  >;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
  >;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    id?: InputMaybe<IdFilter>;
    movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    movieId?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    personId?: InputMaybe<NumberFilter>;
    role?: InputMaybe<StringFilter>;
    type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
    typeId?: InputMaybe<NumberFilter>;
  };

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<
    Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
  >;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MoviePersonFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MoviePersonFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MovieReviewFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MovieReviewFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_MovieFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_MovieFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_MovieFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_MovieFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_MovieSort = {
  id?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
  personId?: InputMaybe<SortOptions>;
  role?: InputMaybe<SortOptions>;
  typeId?: InputMaybe<SortOptions>;
};

export type MoviePersonEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_SeriesEntity_SeasonFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_SeriesEntity_SeasonFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<Array<MoviePersonEntity_SeriesFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonEntity_SeriesFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonEntity_SeriesFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonEntity_SeriesFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonEntity_SeriesSort = {
  id?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
  personId?: InputMaybe<SortOptions>;
  role?: InputMaybe<SortOptions>;
  typeId?: InputMaybe<SortOptions>;
};

export type MoviePersonFilter = {
  and?: InputMaybe<Array<MoviePersonFilter>>;
  id?: InputMaybe<IdFilter>;
  movie?: InputMaybe<MovieEntity_MoviePersonFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonFilter>>;
  personId?: InputMaybe<NumberFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonFilter>;
  typeId?: InputMaybe<NumberFilter>;
};

export type MoviePersonSort = {
  id?: InputMaybe<SortOptions>;
  movie?: InputMaybe<MovieEntity_MoviePersonSort>;
  movieId?: InputMaybe<SortOptions>;
  personId?: InputMaybe<SortOptions>;
  role?: InputMaybe<SortOptions>;
  type?: InputMaybe<MoviePersonTypeEntity_MoviePersonSort>;
  typeId?: InputMaybe<SortOptions>;
};

export type MoviePersonType = {
  __typename?: 'MoviePersonType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MoviePersonTypeEntity_MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_FilmFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_FilmFilter>>;
};

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>>;
};

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<
    Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
  >;
};

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
  };

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
  };

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
  };

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
  };

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
  };

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
  };

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
  };

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<
    Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
  >;
};

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    and?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    id?: InputMaybe<IdFilter>;
    name?: InputMaybe<StringFilter>;
    or?: InputMaybe<
      Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
  };

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<
    Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
  >;
};

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>>;
};

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>>;
};

export type MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter = {
  and?: InputMaybe<
    Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
  >;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<
    Array<MoviePersonTypeEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
  >;
};

export type MoviePersonTypeEntity_MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_MovieFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_MovieFilter>>;
};

export type MoviePersonTypeEntity_MoviePersonEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>>;
};

export type MoviePersonTypeEntity_MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_SeriesFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonEntity_SeriesFilter>>;
};

export type MoviePersonTypeEntity_MoviePersonFilter = {
  and?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonTypeEntity_MoviePersonFilter>>;
};

export type MoviePersonTypeEntity_MoviePersonSort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
};

export type MoviePersonTypeFilter = {
  and?: InputMaybe<Array<MoviePersonTypeFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MoviePersonTypeFilter>>;
};

export type MoviePersonTypeSort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
};

export type MovieReview = {
  __typename?: 'MovieReview';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mark: Scalars['Int'];
  movie: Movie;
  movieId: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type MovieReviewEdge = {
  __typename?: 'MovieReviewEdge';
  cursor: Scalars['String'];
  node: MovieReview;
};

export type MovieReviewFilter = {
  and?: InputMaybe<Array<MovieReviewFilter>>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  mark?: InputMaybe<IntFilter>;
  movie?: InputMaybe<MovieEntity_MovieReviewFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieReviewFilter>>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userId?: InputMaybe<IdFilter>;
};

export type MovieReviewSort = {
  createdAt?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  mark?: InputMaybe<SortOptions>;
  movie?: InputMaybe<MovieEntity_MovieReviewSort>;
  movieId?: InputMaybe<SortOptions>;
  text?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
  userId?: InputMaybe<SortOptions>;
};

export type MovieSort = {
  accessMode?: InputMaybe<SortOptions>;
  ageRestriction?: InputMaybe<SortOptions>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_MovieSort>;
  countriesConnection?: InputMaybe<MovieCountryEntity_MovieSort>;
  cover?: InputMaybe<MediaEntity_MovieSort>;
  coverId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  endReleaseDate?: InputMaybe<SortOptions>;
  genresConnection?: InputMaybe<MovieGenreEntity_MovieSort>;
  id?: InputMaybe<SortOptions>;
  moviePersons?: InputMaybe<MoviePersonEntity_MovieSort>;
  releaseDate?: InputMaybe<SortOptions>;
  startReleaseDate?: InputMaybe<SortOptions>;
  studiosConnection?: InputMaybe<MovieStudioEntity_MovieSort>;
  title?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
  videoId?: InputMaybe<SortOptions>;
};

export type MovieStudio = {
  __typename?: 'MovieStudio';
  movie: Movie;
  movieId: Scalars['ID'];
  studio: Studio;
  studioId: Scalars['ID'];
};

export type MovieStudioEntity_FilmFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_FilmFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_FilmFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_FilmSort = {
  movieId?: InputMaybe<SortOptions>;
  studioId?: InputMaybe<SortOptions>;
};

export type MovieStudioEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MovieImageFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MovieImageFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_FilmFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_FilmFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter = {
  and?: InputMaybe<
    Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
  >;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
  >;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter =
  {
    and?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_FilmFilter>
    >;
    studioId?: InputMaybe<IdFilter>;
  };

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter =
  {
    and?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieImageFilter>
    >;
    studioId?: InputMaybe<IdFilter>;
  };

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter =
  {
    and?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
    >;
    studioId?: InputMaybe<IdFilter>;
  };

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter =
  {
    and?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
    >;
    studioId?: InputMaybe<IdFilter>;
  };

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    studioId?: InputMaybe<IdFilter>;
  };

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter =
  {
    and?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_MovieFilter>
    >;
    studioId?: InputMaybe<IdFilter>;
  };

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter =
  {
    and?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
    >;
    studioId?: InputMaybe<IdFilter>;
  };

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter =
  {
    and?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonEntity_SeriesFilter>
    >;
    studioId?: InputMaybe<IdFilter>;
  };

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<
    Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
  >;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MoviePersonFilter>
  >;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<
    Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
  >;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<
    Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieReviewFilter>
  >;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter =
  {
    and?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    movieId?: InputMaybe<IdFilter>;
    or?: InputMaybe<
      Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieEntity_MovieVisitStatsLastMonthFilter>
    >;
    studioId?: InputMaybe<IdFilter>;
  };

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_MovieFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<
    Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>
  >;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_SeriesEntity_SeasonFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieEntity_MoviePersonEntity_SeriesFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MoviePersonEntity_SeriesFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieEntity_MoviePersonFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MoviePersonFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MoviePersonFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieEntity_MovieReviewFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MovieReviewFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MovieReviewFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieEntity_MovieVisitStatsLastMonthFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_MovieEntity_MovieVisitStatsLastMonthFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_MovieFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_MovieFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_MovieSort = {
  movieId?: InputMaybe<SortOptions>;
  studioId?: InputMaybe<SortOptions>;
};

export type MovieStudioEntity_SeriesEntity_SeasonFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_SeriesEntity_SeasonFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_SeriesEntity_SeasonFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_SeriesFilter = {
  and?: InputMaybe<Array<MovieStudioEntity_SeriesFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieStudioEntity_SeriesFilter>>;
  studioId?: InputMaybe<IdFilter>;
};

export type MovieStudioEntity_SeriesSort = {
  movieId?: InputMaybe<SortOptions>;
  studioId?: InputMaybe<SortOptions>;
};

export enum MovieTypeEnum {
  Film = 'Film',
  Series = 'Series',
}

export type MovieUser = {
  __typename?: 'MovieUser';
  isBookmarked: Scalars['Boolean'];
  isFavorite: Scalars['Boolean'];
  isWatched: Scalars['Boolean'];
  movie: Movie;
  movieId: Scalars['ID'];
  user: User;
  userId: Scalars['ID'];
};

export type MovieUserFilter = {
  and?: InputMaybe<Array<MovieUserFilter>>;
  isBookmarked?: InputMaybe<BooleanFilter>;
  isFavorite?: InputMaybe<BooleanFilter>;
  isWatched?: InputMaybe<BooleanFilter>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<MovieUserFilter>>;
  userId?: InputMaybe<IdFilter>;
};

export type MovieUserSort = {
  isBookmarked?: InputMaybe<SortOptions>;
  isFavorite?: InputMaybe<SortOptions>;
  isWatched?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
  userId?: InputMaybe<SortOptions>;
};

export type MovieVisitStatsLastMonth = {
  __typename?: 'MovieVisitStatsLastMonth';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  movie: Movie;
  movieId: Scalars['String'];
};

export type MovieVisitStatsLastMonthFilter = {
  and?: InputMaybe<Array<MovieVisitStatsLastMonthFilter>>;
  createdAt?: InputMaybe<DateFilter>;
  movie?: InputMaybe<MovieEntity_MovieVisitStatsLastMonthFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<MovieVisitStatsLastMonthFilter>>;
};

export type MovieVisitStatsLastMonthSort = {
  createdAt?: InputMaybe<SortOptions>;
  movie?: InputMaybe<MovieEntity_MovieVisitStatsLastMonthSort>;
  movieId?: InputMaybe<SortOptions>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelSubscription: Scalars['Boolean'];
  confirmEmail: Scalars['Boolean'];
  createCollection: Collection;
  createCollectionMovie: CollectionMovie;
  createCollectionReview: CollectionReview;
  createCollectionUser: CollectionUser;
  createCountry: Country;
  createCurrency: Currency;
  createEpisode: Episode;
  createFilm: Film;
  createGenre: Genre;
  createLanguage: Language;
  createMovieCountry: MovieCountry;
  createMovieGenre: MovieGenre;
  createMovieImage: MovieImage;
  createMovieImageType: MovieImageType;
  createMoviePerson: MoviePerson;
  createMoviePersonType: MoviePersonType;
  createMovieReview: MovieReview;
  createMovieStudio: MovieStudio;
  createMovieUser: MovieUser;
  createPerson: Person;
  createPlan: Plan;
  createPlanPrice: PlanPrice;
  createPrice: Price;
  createProduct: Product;
  createProductPrice: ProductPrice;
  createPurchaseSession: Scalars['String'];
  createRoom: Room;
  createRoomMovie: RoomMovie;
  createRoomParticipant: RoomParticipant;
  createSeason: Season;
  createSeries: Series;
  createStudio: Studio;
  createStudioCountry: StudioCountry;
  createSubscriptionsManageLink: Scalars['String'];
  createSubtitles: Subtitles;
  createTrailer: Trailer;
  createUpload: CreateUploadResult;
  createVideo: Video;
  createVideoVariant: VideoVariant;
  deleteCollection: Collection;
  deleteCollectionMovie: CollectionMovie;
  deleteCollectionReview: CollectionReview;
  deleteCollectionUser: CollectionUser;
  deleteCountry: Country;
  deleteCurrency: Currency;
  deleteEpisode: Episode;
  deleteFilm: Film;
  deleteGenre: Genre;
  deleteLanguage: Language;
  deleteMedia: Media;
  deleteMovie: Movie;
  deleteMovieCountry: Movie;
  deleteMovieGenre: MovieGenre;
  deleteMovieImage: MovieImage;
  deleteMovieImageType: MovieImageType;
  deleteMoviePerson: MoviePerson;
  deleteMoviePersonType: MoviePersonType;
  deleteMovieReview: MovieReview;
  deleteMovieStudio: MovieStudio;
  deleteMovieUser: MovieUser;
  deletePerson: Person;
  deleteRoom: Room;
  deleteRoomMovie: RoomMovie;
  deleteRoomParticipant: RoomParticipant;
  deleteSeason: Season;
  deleteSeries: Series;
  deleteStudio: Studio;
  deleteStudioCountry: StudioCountry;
  deleteSubtitles: Subtitles;
  deleteTrailer: Trailer;
  deleteUser: User;
  deleteVideoVariant: VideoVariant;
  endRoomPlayback: Scalars['Boolean'];
  generateRoomInvite: Scalars['String'];
  generateStreamingForVideo: Scalars['Boolean'];
  generateVideoAudios: Scalars['Boolean'];
  generateVideoVariants: Scalars['Boolean'];
  increaseMovieVisits: Scalars['Boolean'];
  joinRoom: Room;
  leaveRoom: Room;
  login: AuthResult;
  logout: Scalars['Boolean'];
  moveRoomMovie: RoomMovie;
  refresh: AuthResult;
  removeVideo: Video;
  sendConfirmation: Scalars['Boolean'];
  signUp: AuthResult;
  startRoomMovie: RoomMovie;
  startRoomPlayback: Scalars['Boolean'];
  subscribe: Scalars['String'];
  updateAvatar: User;
  updateCollection: Collection;
  updateCollectionReview: CollectionReview;
  updateCollectionUser: CollectionUser;
  updateCountry: Country;
  updateCurrency: Currency;
  updateEpisode: Episode;
  updateFilm: Film;
  updateGenre: Genre;
  updateLanguage: Language;
  updateLastMonthView: Scalars['Boolean'];
  updateMe: User;
  updateMovie: Movie;
  updateMovieImage: MovieImage;
  updateMovieImageType: MovieImageType;
  updateMoviePerson: MoviePerson;
  updateMoviePersonType: MoviePersonType;
  updateMovieReview: MovieReview;
  updateMovieUser: MovieUser;
  updatePassword: User;
  updatePerson: Person;
  updateRoom: Room;
  updateSeason: Season;
  updateSeries: Series;
  updateStudio: Studio;
  updateSubtitles: Subtitles;
  updateTrailer: Trailer;
  updateUser: User;
  updateVideoVariant: VideoVariant;
  uploadFile: Media;
  uploadImage: Media;
};

export type MutationCancelSubscriptionArgs = {
  id: Scalars['String'];
};

export type MutationConfirmEmailArgs = {
  token: Scalars['String'];
};

export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};

export type MutationCreateCollectionMovieArgs = {
  collectionId: Scalars['Int'];
  movieId: Scalars['String'];
};

export type MutationCreateCollectionReviewArgs = {
  input: CreateCollectionReviewInput;
};

export type MutationCreateCollectionUserArgs = {
  input: CreateCollectionUserInput;
};

export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};

export type MutationCreateCurrencyArgs = {
  input: CreateCurrencyInput;
};

export type MutationCreateEpisodeArgs = {
  input: CreateEpisodeInput;
};

export type MutationCreateFilmArgs = {
  input: CreateFilmInput;
};

export type MutationCreateGenreArgs = {
  input: CreateGenreInput;
};

export type MutationCreateLanguageArgs = {
  input: CreateLanguageInput;
};

export type MutationCreateMovieCountryArgs = {
  countryId: Scalars['String'];
  movieId: Scalars['String'];
};

export type MutationCreateMovieGenreArgs = {
  genreId: Scalars['String'];
  movieId: Scalars['String'];
};

export type MutationCreateMovieImageArgs = {
  input: CreateMovieImageInput;
};

export type MutationCreateMovieImageTypeArgs = {
  input: CreateMovieImageTypeInput;
};

export type MutationCreateMoviePersonArgs = {
  input: CreateMoviePersonInput;
};

export type MutationCreateMoviePersonTypeArgs = {
  input: CreateMoviePersonTypeInput;
};

export type MutationCreateMovieReviewArgs = {
  input: CreateMovieReviewInput;
};

export type MutationCreateMovieStudioArgs = {
  movieId: Scalars['String'];
  studioId: Scalars['Int'];
};

export type MutationCreateMovieUserArgs = {
  input: CreateMovieUserInput;
};

export type MutationCreatePersonArgs = {
  input: CreatePersonInput;
};

export type MutationCreatePlanArgs = {
  input: CreatePlanInput;
};

export type MutationCreatePlanPriceArgs = {
  planId: Scalars['String'];
  priceId: Scalars['String'];
};

export type MutationCreatePriceArgs = {
  input: CreatePriceInput;
};

export type MutationCreateProductArgs = {
  input: CreateProductInput;
};

export type MutationCreateProductPriceArgs = {
  priceId: Scalars['String'];
  productId: Scalars['String'];
};

export type MutationCreatePurchaseSessionArgs = {
  movieId: Scalars['String'];
  priceId: Scalars['String'];
};

export type MutationCreateRoomArgs = {
  input: CreateRoomInput;
};

export type MutationCreateRoomMovieArgs = {
  input: CreateRoomMovieInput;
};

export type MutationCreateRoomParticipantArgs = {
  roomId: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationCreateSeasonArgs = {
  input: CreateSeasonInput;
};

export type MutationCreateSeriesArgs = {
  input: CreateSeriesInput;
};

export type MutationCreateStudioArgs = {
  input: CreateStudioInput;
};

export type MutationCreateStudioCountryArgs = {
  countryId: Scalars['String'];
  studioId: Scalars['Int'];
};

export type MutationCreateSubtitlesArgs = {
  input: CreateSubtitlesInput;
};

export type MutationCreateTrailerArgs = {
  input: CreateTrailerInput;
};

export type MutationCreateUploadArgs = {
  type: MediaTypeEnum;
};

export type MutationCreateVideoVariantArgs = {
  input: CreateVideoVariantInput;
};

export type MutationDeleteCollectionArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteCollectionMovieArgs = {
  collectionId: Scalars['Int'];
  movieId: Scalars['String'];
};

export type MutationDeleteCollectionReviewArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteCollectionUserArgs = {
  collectionId: Scalars['Int'];
  userId: Scalars['String'];
};

export type MutationDeleteCountryArgs = {
  id: Scalars['String'];
};

export type MutationDeleteCurrencyArgs = {
  id: Scalars['String'];
};

export type MutationDeleteEpisodeArgs = {
  id: Scalars['String'];
};

export type MutationDeleteFilmArgs = {
  id: Scalars['String'];
};

export type MutationDeleteGenreArgs = {
  id: Scalars['String'];
};

export type MutationDeleteLanguageArgs = {
  id: Scalars['String'];
};

export type MutationDeleteMediaArgs = {
  id: Scalars['String'];
};

export type MutationDeleteMovieArgs = {
  id: Scalars['String'];
};

export type MutationDeleteMovieCountryArgs = {
  countryId: Scalars['String'];
  movieId: Scalars['String'];
};

export type MutationDeleteMovieGenreArgs = {
  genreId: Scalars['String'];
  movieId: Scalars['String'];
};

export type MutationDeleteMovieImageArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteMovieImageTypeArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteMoviePersonArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteMoviePersonTypeArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteMovieReviewArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteMovieStudioArgs = {
  movieId: Scalars['String'];
  studioId: Scalars['Int'];
};

export type MutationDeleteMovieUserArgs = {
  movieId: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationDeletePersonArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteRoomArgs = {
  id: Scalars['String'];
};

export type MutationDeleteRoomMovieArgs = {
  movieId: Scalars['String'];
  roomId: Scalars['String'];
};

export type MutationDeleteRoomParticipantArgs = {
  roomId: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationDeleteSeasonArgs = {
  id: Scalars['String'];
};

export type MutationDeleteSeriesArgs = {
  id: Scalars['String'];
};

export type MutationDeleteStudioArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteStudioCountryArgs = {
  countryId: Scalars['String'];
  studioId: Scalars['Int'];
};

export type MutationDeleteSubtitlesArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteTrailerArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type MutationDeleteVideoVariantArgs = {
  id: Scalars['Float'];
};

export type MutationEndRoomPlaybackArgs = {
  id: Scalars['String'];
};

export type MutationGenerateRoomInviteArgs = {
  id: Scalars['String'];
};

export type MutationGenerateStreamingForVideoArgs = {
  id: Scalars['Int'];
};

export type MutationGenerateVideoAudiosArgs = {
  input: GenerateVideoAudiosInput;
};

export type MutationGenerateVideoVariantsArgs = {
  input: GenerateVideoVariantsInput;
};

export type MutationIncreaseMovieVisitsArgs = {
  movieId: Scalars['String'];
};

export type MutationJoinRoomArgs = {
  inviteToken: Scalars['String'];
};

export type MutationLeaveRoomArgs = {
  id: Scalars['String'];
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationMoveRoomMovieArgs = {
  input: MoveRoomMovieInput;
  roomId: Scalars['String'];
};

export type MutationRemoveVideoArgs = {
  id: Scalars['Int'];
};

export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type MutationStartRoomMovieArgs = {
  roomId: Scalars['String'];
};

export type MutationStartRoomPlaybackArgs = {
  id: Scalars['String'];
};

export type MutationSubscribeArgs = {
  priceId: Scalars['String'];
};

export type MutationUpdateAvatarArgs = {
  file: Scalars['Upload'];
};

export type MutationUpdateCollectionArgs = {
  id: Scalars['Int'];
  input: UpdateCollectionInput;
};

export type MutationUpdateCollectionReviewArgs = {
  id: Scalars['Int'];
  input: UpdateCollectionReviewInput;
};

export type MutationUpdateCollectionUserArgs = {
  collectionId: Scalars['Int'];
  input: UpdateCollectionUserInput;
  userId: Scalars['String'];
};

export type MutationUpdateCountryArgs = {
  id: Scalars['String'];
  input: UpdateCountryInput;
};

export type MutationUpdateCurrencyArgs = {
  id: Scalars['String'];
  input: UpdateCurrencyInput;
};

export type MutationUpdateEpisodeArgs = {
  id: Scalars['String'];
  input: UpdateEpisodeInput;
};

export type MutationUpdateFilmArgs = {
  id: Scalars['String'];
  input: UpdateFilmInput;
};

export type MutationUpdateGenreArgs = {
  id: Scalars['String'];
  input: UpdateGenreInput;
};

export type MutationUpdateLanguageArgs = {
  id: Scalars['String'];
  input: UpdateLanguageInput;
};

export type MutationUpdateMeArgs = {
  input: UpdateUserInput;
};

export type MutationUpdateMovieArgs = {
  id: Scalars['String'];
  input: UpdateMovieInput;
};

export type MutationUpdateMovieImageArgs = {
  id: Scalars['Int'];
  input: UpdateMovieImageInput;
};

export type MutationUpdateMovieImageTypeArgs = {
  id: Scalars['Int'];
  input: UpdateMovieImageTypeInput;
};

export type MutationUpdateMoviePersonArgs = {
  id: Scalars['Int'];
  input: UpdateMoviePersonInput;
};

export type MutationUpdateMoviePersonTypeArgs = {
  id: Scalars['Int'];
  input: UpdateMoviePersonTypeInput;
};

export type MutationUpdateMovieReviewArgs = {
  id: Scalars['Int'];
  input: UpdateMovieReviewInput;
};

export type MutationUpdateMovieUserArgs = {
  input: UpdateMovieUserInput;
  movieId: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type MutationUpdatePersonArgs = {
  id: Scalars['Int'];
  input: UpdatePersonInput;
};

export type MutationUpdateRoomArgs = {
  id: Scalars['String'];
  input: UpdateRoomInput;
};

export type MutationUpdateSeasonArgs = {
  id: Scalars['String'];
  input: UpdateSeasonInput;
};

export type MutationUpdateSeriesArgs = {
  id: Scalars['String'];
  input: UpdateSeriesInput;
};

export type MutationUpdateStudioArgs = {
  id: Scalars['Int'];
  input: UpdateStudioInput;
};

export type MutationUpdateSubtitlesArgs = {
  id: Scalars['Int'];
  input: UpdateSubtitlesInput;
};

export type MutationUpdateTrailerArgs = {
  id: Scalars['Int'];
  input: UpdateTrailerInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  input: UpdateUserInput;
};

export type MutationUpdateVideoVariantArgs = {
  id: Scalars['Int'];
  input: UpdateVideoVariantInput;
};

export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type MutationUploadImageArgs = {
  file: Scalars['Upload'];
};

export type NumberFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  neq?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<Scalars['Float']>>;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  totalCount: Scalars['Float'];
};

export type OffsetPaginatedCollectionsReviews = {
  __typename?: 'OffsetPaginatedCollectionsReviews';
  nodes: Array<CollectionReview>;
  pageInfo: OffsetPageInfo;
};

export type OffsetPaginatedMovies = {
  __typename?: 'OffsetPaginatedMovies';
  nodes: Array<Movie>;
  pageInfo: OffsetPageInfo;
};

export type OffsetPaginatedMoviesReviews = {
  __typename?: 'OffsetPaginatedMoviesReviews';
  nodes: Array<MovieReview>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedCollections = {
  __typename?: 'PaginatedCollections';
  nodes: Array<Collection>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedCollectionsUsers = {
  __typename?: 'PaginatedCollectionsUsers';
  nodes: Array<CollectionUser>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedCountries = {
  __typename?: 'PaginatedCountries';
  nodes: Array<Country>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedCurrencies = {
  __typename?: 'PaginatedCurrencies';
  nodes: Array<Currency>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedEpisodes = {
  __typename?: 'PaginatedEpisodes';
  nodes: Array<Episode>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedFilms = {
  __typename?: 'PaginatedFilms';
  nodes: Array<Film>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedGenres = {
  __typename?: 'PaginatedGenres';
  nodes: Array<Genre>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedLanguages = {
  __typename?: 'PaginatedLanguages';
  nodes: Array<Language>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedMedia = {
  __typename?: 'PaginatedMedia';
  nodes: Array<Media>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedMovieImageTypes = {
  __typename?: 'PaginatedMovieImageTypes';
  nodes: Array<MovieImageType>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedMoviePersonTypes = {
  __typename?: 'PaginatedMoviePersonTypes';
  nodes: Array<MoviePersonType>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedMoviesImages = {
  __typename?: 'PaginatedMoviesImages';
  nodes: Array<MovieImage>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedMoviesPersons = {
  __typename?: 'PaginatedMoviesPersons';
  nodes: Array<MoviePerson>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedMoviesUsers = {
  __typename?: 'PaginatedMoviesUsers';
  nodes: Array<MovieUser>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedMoviesVisits = {
  __typename?: 'PaginatedMoviesVisits';
  nodes: Array<MovieVisitStatsLastMonth>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedPersons = {
  __typename?: 'PaginatedPersons';
  nodes: Array<Person>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedRooms = {
  __typename?: 'PaginatedRooms';
  nodes: Array<Room>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedRoomsMovies = {
  __typename?: 'PaginatedRoomsMovies';
  nodes: Array<RoomMovie>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedSeasons = {
  __typename?: 'PaginatedSeasons';
  nodes: Array<Season>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedSeries = {
  __typename?: 'PaginatedSeries';
  nodes: Array<Series>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedStudios = {
  __typename?: 'PaginatedStudios';
  nodes: Array<Studio>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedTrailers = {
  __typename?: 'PaginatedTrailers';
  nodes: Array<Trailer>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  nodes: Array<User>;
  pageInfo: OffsetPageInfo;
};

export type PaginatedVideos = {
  __typename?: 'PaginatedVideos';
  nodes: Array<Video>;
  pageInfo: OffsetPageInfo;
};

export type Person = {
  __typename?: 'Person';
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type PersonFilter = {
  and?: InputMaybe<Array<PersonFilter>>;
  countryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  imageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<PersonFilter>>;
};

export type PersonSort = {
  countryId?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  imageId?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
};

export type Plan = {
  __typename?: 'Plan';
  id: Scalars['ID'];
  name: Scalars['String'];
  prices: Array<Price>;
};

export enum PlanIntervalEnum {
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export type PlanPrice = {
  __typename?: 'PlanPrice';
  plan: Plan;
  planId: Scalars['ID'];
  price: Price;
  priceId: Scalars['ID'];
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Int'];
  currency: Currency;
  currencyId: Scalars['String'];
  id: Scalars['ID'];
  interval?: Maybe<PlanIntervalEnum>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  movie: Movie;
  movieId: Scalars['ID'];
  prices: Array<Price>;
};

export type ProductPrice = {
  __typename?: 'ProductPrice';
  price: Price;
  priceId: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
};

export type Purchase = {
  __typename?: 'Purchase';
  id: Scalars['ID'];
  madeAt: Scalars['DateTime'];
  movie: Movie;
  movieId: Scalars['String'];
  price: Price;
  priceId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllCountries: Array<Country>;
  getAllEpisodes: Array<Episode>;
  getAllGenres: Array<Genre>;
  getAllSeasons: Array<Season>;
  getAllStudios: Array<Studio>;
  getCollection: Collection;
  getCollectionReview: CollectionReview;
  getCollectionUser: CollectionUser;
  getCollections: PaginatedCollections;
  getCollectionsReviewsOffset: OffsetPaginatedCollectionsReviews;
  getCollectionsReviewsRelay: RelayPaginatedCollectionsReviews;
  getCollectionsUsers: PaginatedCollectionsUsers;
  getCountries: PaginatedCountries;
  getCountry: Country;
  getCurrencies: PaginatedCurrencies;
  getCurrency: Currency;
  getEpisode: Episode;
  getEpisodeBySeasonAndNum: Episode;
  getEpisodeBySeriesAndNum: Episode;
  getEpisodes: PaginatedEpisodes;
  getEpisodesProtected: PaginatedEpisodes;
  getFilm: Film;
  getFilms: PaginatedFilms;
  getFilmsProtected: PaginatedFilms;
  getGenre: Genre;
  getGenres: PaginatedGenres;
  getLanguage: Language;
  getLanguages: PaginatedLanguages;
  getLastMonthMoviesVisits: PaginatedMoviesVisits;
  getManyMedia: PaginatedMedia;
  getManySeries: PaginatedSeries;
  getManySeriesProtected: PaginatedSeries;
  getManySubtitles: Array<Subtitles>;
  getMe: User;
  getMostReviewedMovies: Array<Movie>;
  getMostViewedMovies: Array<Movie>;
  getMovie: Movie;
  getMovieImage: MovieImage;
  getMovieImageType: MovieImageType;
  getMovieImageTypes: PaginatedMovieImageTypes;
  getMoviePerson: MoviePerson;
  getMoviePersonType: MoviePersonType;
  getMoviePersonTypes: PaginatedMoviePersonTypes;
  getMovieReview: MovieReview;
  getMovieUser: MovieUser;
  getMoviesImages: PaginatedMoviesImages;
  getMoviesOffset: OffsetPaginatedMovies;
  getMoviesPersons: PaginatedMoviesPersons;
  getMoviesProtectedOffset: OffsetPaginatedMovies;
  getMoviesProtectedRelay: RelayPaginatedMovies;
  getMoviesRelay: RelayPaginatedMovies;
  getMoviesReviewsOffset: OffsetPaginatedMoviesReviews;
  getMoviesReviewsRelay: RelayPaginatedMoviesReviews;
  getMoviesUsers: PaginatedMoviesUsers;
  getOneMedia: Media;
  getOneSeries: Series;
  getOneSubtitles: Subtitles;
  getPerson: Person;
  getPersons: PaginatedPersons;
  getPlan: Plan;
  getPlanPrice: PlanPrice;
  getPlans: Array<Plan>;
  getProduct: Product;
  getProductPrice: ProductPrice;
  getPurchase: Purchase;
  getRandomMovies: Array<Movie>;
  getRoom: Room;
  getRoomCurrentPlayback: Scalars['Int'];
  getRoomMovie: RoomMovie;
  getRooms: PaginatedRooms;
  getRoomsMovies: PaginatedRoomsMovies;
  getSeason: Season;
  getSeasons: PaginatedSeasons;
  getSeasonsProtected: PaginatedSeasons;
  getStudio: Studio;
  getStudios: PaginatedStudios;
  getTrailer: Trailer;
  getTrailers: PaginatedTrailers;
  getUser: User;
  getUsers: PaginatedUsers;
  getVideo: Video;
  getVideoVariant: VideoVariant;
  getVideos: PaginatedVideos;
  getVideosVariants: Array<VideoVariant>;
  hasActiveSubscription: Scalars['Boolean'];
  hasCollectionReview: Scalars['Boolean'];
  hasMovieReview: Scalars['Boolean'];
  hasPurchase: Scalars['Boolean'];
};

export type QueryGetAllCountriesArgs = {
  filter?: InputMaybe<CountryFilter>;
  sort?: InputMaybe<CountrySort>;
};

export type QueryGetAllEpisodesArgs = {
  filter?: InputMaybe<EpisodeFilter>;
  sort?: InputMaybe<EpisodeSort>;
};

export type QueryGetAllGenresArgs = {
  filter?: InputMaybe<GenreFilter>;
  sort?: InputMaybe<GenreSort>;
};

export type QueryGetAllSeasonsArgs = {
  filter?: InputMaybe<SeasonFilter>;
  sort?: InputMaybe<SeasonSort>;
};

export type QueryGetAllStudiosArgs = {
  filter?: InputMaybe<StudioFilter>;
  sort?: InputMaybe<StudioSort>;
};

export type QueryGetCollectionArgs = {
  id: Scalars['Int'];
};

export type QueryGetCollectionReviewArgs = {
  id: Scalars['Int'];
};

export type QueryGetCollectionUserArgs = {
  collectionId: Scalars['Int'];
  userId: Scalars['String'];
};

export type QueryGetCollectionsArgs = {
  filter?: InputMaybe<CollectionFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<CollectionSort>;
};

export type QueryGetCollectionsReviewsOffsetArgs = {
  filter?: InputMaybe<CollectionReviewFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<CollectionReviewSort>;
};

export type QueryGetCollectionsReviewsRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CollectionReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<CollectionReviewSort>;
};

export type QueryGetCollectionsUsersArgs = {
  filter?: InputMaybe<CollectionUserFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<CollectionUserSort>;
};

export type QueryGetCountriesArgs = {
  filter?: InputMaybe<CountryFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<CountrySort>;
};

export type QueryGetCountryArgs = {
  id: Scalars['String'];
};

export type QueryGetCurrenciesArgs = {
  filter?: InputMaybe<CurrencyFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<CurrencySort>;
};

export type QueryGetCurrencyArgs = {
  id: Scalars['String'];
};

export type QueryGetEpisodeArgs = {
  id: Scalars['String'];
};

export type QueryGetEpisodeBySeasonAndNumArgs = {
  numInSeason: Scalars['Int'];
  seasonId: Scalars['String'];
};

export type QueryGetEpisodeBySeriesAndNumArgs = {
  numInSeries: Scalars['Int'];
  seriesId: Scalars['String'];
};

export type QueryGetEpisodesArgs = {
  filter?: InputMaybe<EpisodeFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<EpisodeSort>;
};

export type QueryGetEpisodesProtectedArgs = {
  filter?: InputMaybe<EpisodeFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<EpisodeSort>;
};

export type QueryGetFilmArgs = {
  id: Scalars['String'];
};

export type QueryGetFilmsArgs = {
  filter?: InputMaybe<FilmFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<FilmSort>;
};

export type QueryGetFilmsProtectedArgs = {
  filter?: InputMaybe<FilmFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<FilmSort>;
};

export type QueryGetGenreArgs = {
  id: Scalars['String'];
};

export type QueryGetGenresArgs = {
  filter?: InputMaybe<GenreFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<GenreSort>;
};

export type QueryGetLanguageArgs = {
  id: Scalars['String'];
};

export type QueryGetLanguagesArgs = {
  filter?: InputMaybe<LanguageFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<LanguageSort>;
};

export type QueryGetLastMonthMoviesVisitsArgs = {
  filter?: InputMaybe<MovieVisitStatsLastMonthFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MovieVisitStatsLastMonthSort>;
};

export type QueryGetManyMediaArgs = {
  filter?: InputMaybe<MediaFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MediaSort>;
};

export type QueryGetManySeriesArgs = {
  filter?: InputMaybe<SeriesFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<SeriesSort>;
};

export type QueryGetManySeriesProtectedArgs = {
  filter?: InputMaybe<SeriesFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<SeriesSort>;
};

export type QueryGetMostReviewedMoviesArgs = {
  filter?: InputMaybe<MovieFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MovieSort>;
};

export type QueryGetMostViewedMoviesArgs = {
  filter?: InputMaybe<MovieFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MovieSort>;
};

export type QueryGetMovieArgs = {
  id: Scalars['String'];
};

export type QueryGetMovieImageArgs = {
  id: Scalars['Int'];
};

export type QueryGetMovieImageTypeArgs = {
  id: Scalars['Int'];
};

export type QueryGetMovieImageTypesArgs = {
  filter?: InputMaybe<MovieImageTypeFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MovieImageTypeSort>;
};

export type QueryGetMoviePersonArgs = {
  id: Scalars['Int'];
};

export type QueryGetMoviePersonTypeArgs = {
  id: Scalars['Int'];
};

export type QueryGetMoviePersonTypesArgs = {
  filter?: InputMaybe<MoviePersonTypeFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MoviePersonTypeSort>;
};

export type QueryGetMovieReviewArgs = {
  id: Scalars['Int'];
};

export type QueryGetMovieUserArgs = {
  movieId: Scalars['String'];
  userId: Scalars['String'];
};

export type QueryGetMoviesImagesArgs = {
  filter?: InputMaybe<MovieImageFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MovieImageSort>;
};

export type QueryGetMoviesOffsetArgs = {
  filter?: InputMaybe<MovieFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MovieSort>;
};

export type QueryGetMoviesPersonsArgs = {
  filter?: InputMaybe<MoviePersonFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MoviePersonSort>;
};

export type QueryGetMoviesProtectedOffsetArgs = {
  filter?: InputMaybe<MovieFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MovieSort>;
};

export type QueryGetMoviesProtectedRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MovieFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MovieSort>;
};

export type QueryGetMoviesRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MovieFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MovieSort>;
};

export type QueryGetMoviesReviewsOffsetArgs = {
  filter?: InputMaybe<MovieReviewFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MovieReviewSort>;
};

export type QueryGetMoviesReviewsRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MovieReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MovieReviewSort>;
};

export type QueryGetMoviesUsersArgs = {
  filter?: InputMaybe<MovieUserFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MovieUserSort>;
};

export type QueryGetOneMediaArgs = {
  id: Scalars['String'];
};

export type QueryGetOneSeriesArgs = {
  id: Scalars['String'];
};

export type QueryGetOneSubtitlesArgs = {
  id: Scalars['Int'];
};

export type QueryGetPersonArgs = {
  id: Scalars['Int'];
};

export type QueryGetPersonsArgs = {
  filter?: InputMaybe<PersonFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<PersonSort>;
};

export type QueryGetPlanArgs = {
  id: Scalars['String'];
};

export type QueryGetPlanPriceArgs = {
  planId: Scalars['String'];
  priceId: Scalars['String'];
};

export type QueryGetProductArgs = {
  id: Scalars['String'];
};

export type QueryGetProductPriceArgs = {
  priceId: Scalars['String'];
  productId: Scalars['String'];
};

export type QueryGetPurchaseArgs = {
  id: Scalars['Float'];
};

export type QueryGetRandomMoviesArgs = {
  filter?: InputMaybe<MovieFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<MovieSort>;
};

export type QueryGetRoomArgs = {
  id: Scalars['String'];
};

export type QueryGetRoomCurrentPlaybackArgs = {
  id: Scalars['String'];
};

export type QueryGetRoomMovieArgs = {
  movieId: Scalars['String'];
  roomId: Scalars['String'];
};

export type QueryGetRoomsArgs = {
  filter?: InputMaybe<RoomFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<RoomSort>;
};

export type QueryGetRoomsMoviesArgs = {
  filter?: InputMaybe<RoomMovieFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<RoomMovieSort>;
};

export type QueryGetSeasonArgs = {
  id: Scalars['String'];
};

export type QueryGetSeasonsArgs = {
  filter?: InputMaybe<SeasonFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<SeasonSort>;
};

export type QueryGetSeasonsProtectedArgs = {
  filter?: InputMaybe<SeasonFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<SeasonSort>;
};

export type QueryGetStudioArgs = {
  id: Scalars['Int'];
};

export type QueryGetStudiosArgs = {
  filter?: InputMaybe<StudioFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<StudioSort>;
};

export type QueryGetTrailerArgs = {
  id: Scalars['Int'];
};

export type QueryGetTrailersArgs = {
  filter?: InputMaybe<TrailerFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<TrailerSort>;
};

export type QueryGetUserArgs = {
  id: Scalars['String'];
};

export type QueryGetUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<UserSort>;
};

export type QueryGetVideoArgs = {
  id: Scalars['Int'];
};

export type QueryGetVideoVariantArgs = {
  id: Scalars['Int'];
};

export type QueryGetVideosArgs = {
  filter?: InputMaybe<VideoFilter>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: InputMaybe<VideoSort>;
};

export type QueryHasCollectionReviewArgs = {
  collectionId: Scalars['Int'];
};

export type QueryHasMovieReviewArgs = {
  movieId: Scalars['String'];
};

export type QueryHasPurchaseArgs = {
  movieId: Scalars['String'];
};

export type RelayMovieEdge = {
  __typename?: 'RelayMovieEdge';
  cursor: Scalars['String'];
  node: Movie;
};

export type RelayPageInfo = {
  __typename?: 'RelayPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type RelayPaginatedCollectionsReviews = {
  __typename?: 'RelayPaginatedCollectionsReviews';
  edges: Array<CollectionReviewEdge>;
  pageInfo: RelayPageInfo;
};

export type RelayPaginatedMovies = {
  __typename?: 'RelayPaginatedMovies';
  edges: Array<RelayMovieEdge>;
  pageInfo: RelayPageInfo;
};

export type RelayPaginatedMoviesReviews = {
  __typename?: 'RelayPaginatedMoviesReviews';
  edges: Array<MovieReviewEdge>;
  pageInfo: RelayPageInfo;
};

/** User role in app */
export enum RoleEnum {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}

export type RoleEnumFilter = {
  eq?: InputMaybe<RoleEnum>;
  in?: InputMaybe<Array<RoleEnum>>;
  neq?: InputMaybe<RoleEnum>;
  nin?: InputMaybe<Array<RoleEnum>>;
};

export type Room = {
  __typename?: 'Room';
  currentMovie?: Maybe<RoomMovie>;
  id: Scalars['ID'];
  movies: Array<RoomMovie>;
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  participants: Array<User>;
  participantsConnection: Array<RoomParticipant>;
};

export type RoomFilter = {
  and?: InputMaybe<Array<RoomFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<RoomFilter>>;
  ownerId?: InputMaybe<StringFilter>;
  participantsConnection?: InputMaybe<RoomParticipantEntity_RoomFilter>;
};

export type RoomMovie = {
  __typename?: 'RoomMovie';
  episodeNumber?: Maybe<Scalars['Int']>;
  movie: Movie;
  movieId: Scalars['ID'];
  order: Scalars['Int'];
  room: Room;
  roomId: Scalars['ID'];
  showStart?: Maybe<Scalars['DateTime']>;
};

export type RoomMovieFilter = {
  and?: InputMaybe<Array<RoomMovieFilter>>;
  movieId?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<RoomMovieFilter>>;
  roomId?: InputMaybe<IdFilter>;
};

export type RoomMovieSort = {
  movieId?: InputMaybe<SortOptions>;
  roomId?: InputMaybe<SortOptions>;
};

export type RoomParticipant = {
  __typename?: 'RoomParticipant';
  room: Room;
  roomId: Scalars['ID'];
  user: User;
  userId: Scalars['ID'];
};

export type RoomParticipantEntity_RoomFilter = {
  and?: InputMaybe<Array<RoomParticipantEntity_RoomFilter>>;
  or?: InputMaybe<Array<RoomParticipantEntity_RoomFilter>>;
  roomId?: InputMaybe<IdFilter>;
  userId?: InputMaybe<IdFilter>;
};

export type RoomParticipantEntity_RoomSort = {
  roomId?: InputMaybe<SortOptions>;
  userId?: InputMaybe<SortOptions>;
};

export type RoomSort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
  ownerId?: InputMaybe<SortOptions>;
  participantsConnection?: InputMaybe<RoomParticipantEntity_RoomSort>;
};

export type Season = {
  __typename?: 'Season';
  accessMode: AccessModeEnum;
  ageRestriction?: Maybe<AgeRestrictionEnum>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  endReleaseDate?: Maybe<Scalars['DateTime']>;
  episodes: Array<Episode>;
  episodesCount: Scalars['Int'];
  id: Scalars['ID'];
  numberInSeries: Scalars['Int'];
  series: Series;
  seriesId: Scalars['String'];
  startReleaseDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type SeasonFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<SeasonFilter>>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  numberInSeries?: InputMaybe<IntFilter>;
  or?: InputMaybe<Array<SeasonFilter>>;
  series?: InputMaybe<SeriesEntity_SeasonFilter>;
  seriesId?: InputMaybe<StringFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type SeasonSort = {
  accessMode?: InputMaybe<SortOptions>;
  ageRestriction?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  endReleaseDate?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  numberInSeries?: InputMaybe<SortOptions>;
  series?: InputMaybe<SeriesEntity_SeasonSort>;
  seriesId?: InputMaybe<SortOptions>;
  startReleaseDate?: InputMaybe<SortOptions>;
  title?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
};

export type Series = Movie & {
  __typename?: 'Series';
  accessMode: AccessModeEnum;
  ageRestriction?: Maybe<AgeRestrictionEnum>;
  collections: Array<Collection>;
  collectionsConnection: Array<CollectionMovie>;
  countries: Array<Country>;
  countriesConnection: Array<MovieCountry>;
  cover?: Maybe<Media>;
  coverId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  endReleaseDate?: Maybe<Scalars['DateTime']>;
  episodes: Array<Episode>;
  genres: Array<Genre>;
  genresConnection: Array<MovieGenre>;
  id: Scalars['ID'];
  movieImages: Array<MovieImage>;
  moviePersons: Array<MoviePerson>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']>;
  rating: Scalars['Float'];
  reviews: Array<MovieReview>;
  seasons: Array<Season>;
  startReleaseDate?: Maybe<Scalars['DateTime']>;
  studios: Array<Studio>;
  studiosConnection: Array<MovieStudio>;
  title: Scalars['String'];
  trailers: Array<Trailer>;
  type: MovieTypeEnum;
  updatedAt: Scalars['DateTime'];
};

export type SeriesEntity_SeasonFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<SeriesEntity_SeasonFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_SeriesEntity_SeasonFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_SeriesEntity_SeasonFilter>;
  cover?: InputMaybe<MediaEntity_SeriesEntity_SeasonFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_SeriesEntity_SeasonFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_SeriesEntity_SeasonFilter>;
  or?: InputMaybe<Array<SeriesEntity_SeasonFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_SeriesEntity_SeasonFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type SeriesEntity_SeasonSort = {
  accessMode?: InputMaybe<SortOptions>;
  ageRestriction?: InputMaybe<SortOptions>;
  coverId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  endReleaseDate?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  releaseDate?: InputMaybe<SortOptions>;
  startReleaseDate?: InputMaybe<SortOptions>;
  title?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
  videoId?: InputMaybe<SortOptions>;
};

export type SeriesFilter = {
  accessMode?: InputMaybe<AccessModeEnumFilter>;
  ageRestriction?: InputMaybe<AgeRestrictionEnumFilter>;
  and?: InputMaybe<Array<SeriesFilter>>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_SeriesFilter>;
  countriesConnection?: InputMaybe<MovieCountryEntity_SeriesFilter>;
  cover?: InputMaybe<MediaEntity_SeriesFilter>;
  coverId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endReleaseDate?: InputMaybe<DateFilter>;
  genresConnection?: InputMaybe<MovieGenreEntity_SeriesFilter>;
  id?: InputMaybe<IdFilter>;
  moviePersons?: InputMaybe<MoviePersonEntity_SeriesFilter>;
  or?: InputMaybe<Array<SeriesFilter>>;
  releaseDate?: InputMaybe<DateFilter>;
  startReleaseDate?: InputMaybe<DateFilter>;
  studiosConnection?: InputMaybe<MovieStudioEntity_SeriesFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type SeriesSort = {
  accessMode?: InputMaybe<SortOptions>;
  ageRestriction?: InputMaybe<SortOptions>;
  collectionsConnection?: InputMaybe<CollectionMovieEntity_SeriesSort>;
  countriesConnection?: InputMaybe<MovieCountryEntity_SeriesSort>;
  cover?: InputMaybe<MediaEntity_SeriesSort>;
  coverId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  description?: InputMaybe<SortOptions>;
  endReleaseDate?: InputMaybe<SortOptions>;
  genresConnection?: InputMaybe<MovieGenreEntity_SeriesSort>;
  id?: InputMaybe<SortOptions>;
  moviePersons?: InputMaybe<MoviePersonEntity_SeriesSort>;
  releaseDate?: InputMaybe<SortOptions>;
  startReleaseDate?: InputMaybe<SortOptions>;
  studiosConnection?: InputMaybe<MovieStudioEntity_SeriesSort>;
  title?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
  videoId?: InputMaybe<SortOptions>;
};

export type ServiceSubscription = {
  __typename?: 'ServiceSubscription';
  id: Scalars['ID'];
  periodEnd: Scalars['DateTime'];
  periodStart: Scalars['DateTime'];
  price: Price;
  priceId: Scalars['String'];
  status: SubscriptionStatusEnum;
  user: User;
  userId: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
};

export enum SortDirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
  asc = 'asc',
  desc = 'desc',
}

export enum SortNullsEnum {
  FIRST = 'FIRST',
  LAST = 'LAST',
  first = 'first',
  last = 'last',
}

export type SortOptions = {
  direction?: InputMaybe<SortDirectionEnum>;
  nulls?: InputMaybe<SortNullsEnum>;
};

export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  ilike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  like?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nilike?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<Scalars['String']>>;
  nlike?: InputMaybe<Scalars['String']>;
};

export type Studio = {
  __typename?: 'Studio';
  countries: Array<Country>;
  id: Scalars['ID'];
  moviesCount: Scalars['Int'];
  name: Scalars['String'];
};

export type StudioMoviesCountArgs = {
  type?: InputMaybe<MovieTypeEnum>;
};

export type StudioCountry = {
  __typename?: 'StudioCountry';
  country: Country;
  countryId: Scalars['ID'];
  studio: Studio;
  studioId: Scalars['ID'];
};

export type StudioFilter = {
  and?: InputMaybe<Array<StudioFilter>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<StudioFilter>>;
};

export type StudioSort = {
  id?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
};

export type Subscription = {
  __typename?: 'Subscription';
  audioVariantsProgress: Scalars['String'];
  roomDeleted: Room;
  roomPlaybackEnded: RoomMovie;
  roomPlaybackStarted: RoomMovie;
  streamingGenerationProgress: Scalars['String'];
  videoVariantsProgress: Scalars['String'];
};

export type SubscriptionAudioVariantsProgressArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRoomDeletedArgs = {
  id: Scalars['String'];
};

export type SubscriptionRoomPlaybackEndedArgs = {
  id: Scalars['String'];
};

export type SubscriptionRoomPlaybackStartedArgs = {
  id: Scalars['String'];
};

export type SubscriptionStreamingGenerationProgressArgs = {
  id: Scalars['Int'];
};

export type SubscriptionVideoVariantsProgressArgs = {
  id: Scalars['Int'];
};

export enum SubscriptionStatusEnum {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  IN_PROCESS = 'IN_PROCESS',
  PAST_DUE = 'PAST_DUE',
}

export type Subtitles = {
  __typename?: 'Subtitles';
  file: Media;
  fileId: Scalars['String'];
  id: Scalars['ID'];
  language: Language;
  languageId: Scalars['String'];
  video: Video;
  videoId: Scalars['Int'];
};

export type Trailer = {
  __typename?: 'Trailer';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  movie: Movie;
  movieId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  video: Video;
  videoId: Scalars['Float'];
};

export type TrailerFilter = {
  and?: InputMaybe<Array<TrailerFilter>>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  movieId?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<TrailerFilter>>;
  title?: InputMaybe<StringFilter>;
  videoId?: InputMaybe<NumberFilter>;
};

export type TrailerSort = {
  createdAt?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  movieId?: InputMaybe<SortOptions>;
  title?: InputMaybe<SortOptions>;
  videoId?: InputMaybe<SortOptions>;
};

export type UpdateCollectionInput = {
  coverId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  isSystem?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCollectionReviewInput = {
  collectionId?: InputMaybe<Scalars['Int']>;
  mark?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};

export type UpdateCollectionUserInput = {
  collectionId?: InputMaybe<Scalars['Int']>;
  isBookmarked?: InputMaybe<Scalars['Boolean']>;
  isWatched?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateCountryInput = {
  currencyId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  languageId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCurrencyInput = {
  id: Scalars['String'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type UpdateEpisodeInput = {
  accessMode?: InputMaybe<AccessModeEnum>;
  ageRestriction?: InputMaybe<AgeRestrictionEnum>;
  coverId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  numberInSeason?: InputMaybe<Scalars['Int']>;
  numberInSeries?: InputMaybe<Scalars['Int']>;
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  seasonId?: InputMaybe<Scalars['String']>;
  seriesId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['Float']>;
};

export type UpdateFilmInput = {
  accessMode?: InputMaybe<AccessModeEnum>;
  ageRestriction?: InputMaybe<AgeRestrictionEnum>;
  coverId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['Int']>;
};

export type UpdateGenreInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateLanguageInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateMovieImageInput = {
  imageId?: InputMaybe<Scalars['String']>;
  movieId?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['Int']>;
};

export type UpdateMovieImageTypeInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateMovieInput = {
  accessMode?: InputMaybe<AccessModeEnum>;
  ageRestriction?: InputMaybe<AgeRestrictionEnum>;
  coverId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateMoviePersonInput = {
  movieId?: InputMaybe<Scalars['String']>;
  personId?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['Int']>;
};

export type UpdateMoviePersonTypeInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateMovieReviewInput = {
  mark?: InputMaybe<Scalars['Int']>;
  movieId?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type UpdateMovieUserInput = {
  isBookmarked?: InputMaybe<Scalars['Boolean']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  isWatched?: InputMaybe<Scalars['Boolean']>;
  movieId?: InputMaybe<Scalars['String']>;
};

export type UpdatePersonInput = {
  countryId?: InputMaybe<Scalars['String']>;
  imageId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateRoomInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateSeasonInput = {
  accessMode?: InputMaybe<AccessModeEnum>;
  ageRestriction?: InputMaybe<AgeRestrictionEnum>;
  description?: InputMaybe<Scalars['String']>;
  endReleaseDate?: InputMaybe<Scalars['DateTime']>;
  numberInSeries?: InputMaybe<Scalars['Int']>;
  seriesId?: InputMaybe<Scalars['String']>;
  startReleaseDate?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateSeriesInput = {
  accessMode?: InputMaybe<AccessModeEnum>;
  ageRestriction?: InputMaybe<AgeRestrictionEnum>;
  coverId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endReleaseDate?: InputMaybe<Scalars['DateTime']>;
  productId?: InputMaybe<Scalars['String']>;
  startReleaseDate?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateStudioInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateSubtitlesInput = {
  fileId?: InputMaybe<Scalars['String']>;
  languageId?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['Int']>;
};

export type UpdateTrailerInput = {
  movieId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['Float']>;
};

export type UpdateUserInput = {
  avatarId?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateVideoVariantInput = {
  mediaId?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<VideoProfileEnum>;
  videoId?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Media>;
  avatarId?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isEmailConfirmed: Scalars['Boolean'];
  name: Scalars['String'];
  purchases: Array<Purchase>;
  role: RoleEnum;
  rooms: Array<Room>;
  subscriptions: Array<ServiceSubscription>;
  updatedAt: Scalars['DateTime'];
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  avatarId?: InputMaybe<StringFilter>;
  countryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isEmailConfirmed?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<Array<UserFilter>>;
  role?: InputMaybe<RoleEnumFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type UserSort = {
  avatarId?: InputMaybe<SortOptions>;
  countryId?: InputMaybe<SortOptions>;
  createdAt?: InputMaybe<SortOptions>;
  email?: InputMaybe<SortOptions>;
  id?: InputMaybe<SortOptions>;
  isEmailConfirmed?: InputMaybe<SortOptions>;
  name?: InputMaybe<SortOptions>;
  role?: InputMaybe<SortOptions>;
  updatedAt?: InputMaybe<SortOptions>;
};

export type Video = {
  __typename?: 'Video';
  audios: Array<VideoAudio>;
  dashManifestMedia?: Maybe<Media>;
  dashManifestMediaId?: Maybe<Scalars['String']>;
  hlsManifestMedia?: Maybe<Media>;
  hlsManifestMediaId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  subtitles: Array<Subtitles>;
  variants: Array<VideoVariant>;
};

export type VideoAudio = {
  __typename?: 'VideoAudio';
  format: FormatEnum;
  id: Scalars['Float'];
  language: Language;
  languageId: Scalars['String'];
  media: Media;
  mediaId: Scalars['String'];
  profile: AudioProfileEnum;
  video: Video;
  videoId: Scalars['Int'];
};

export type VideoFilter = {
  and?: InputMaybe<Array<VideoFilter>>;
  id?: InputMaybe<IdFilter>;
  or?: InputMaybe<Array<VideoFilter>>;
};

export enum VideoProfileEnum {
  PROFILE_2k = 'PROFILE_2k',
  PROFILE_4k = 'PROFILE_4k',
  PROFILE_144p = 'PROFILE_144p',
  PROFILE_240p = 'PROFILE_240p',
  PROFILE_360p = 'PROFILE_360p',
  PROFILE_480p = 'PROFILE_480p',
  PROFILE_720p = 'PROFILE_720p',
  PROFILE_1080p = 'PROFILE_1080p',
}

export type VideoSort = {
  id?: InputMaybe<SortOptions>;
};

export type VideoVariant = {
  __typename?: 'VideoVariant';
  format: FormatEnum;
  id: Scalars['Float'];
  media: Media;
  mediaId: Scalars['String'];
  profile: VideoProfileEnum;
  video: Video;
  videoId: Scalars['Int'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'AuthResult';
    accessToken: string;
    refreshToken: string;
    user: {
      __typename?: 'User';
      email: string;
      createdAt: string;
      role: RoleEnum;
      isEmailConfirmed: boolean;
      id: string;
      name: string;
      country?: { __typename?: 'Country'; id: string; name: string } | null;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signUp: {
    __typename?: 'AuthResult';
    accessToken: string;
    refreshToken: string;
    user: {
      __typename?: 'User';
      email: string;
      createdAt: string;
      role: RoleEnum;
      isEmailConfirmed: boolean;
      id: string;
      name: string;
      country?: { __typename?: 'Country'; id: string; name: string } | null;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type RefreshMutationVariables = Exact<{ [key: string]: never }>;

export type RefreshMutation = {
  __typename?: 'Mutation';
  refresh: {
    __typename?: 'AuthResult';
    accessToken: string;
    refreshToken: string;
    user: {
      __typename?: 'User';
      email: string;
      createdAt: string;
      role: RoleEnum;
      isEmailConfirmed: boolean;
      id: string;
      name: string;
      country?: { __typename?: 'Country'; id: string; name: string } | null;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean };

export type AddCollectionMovieMutationVariables = Exact<{
  movieId: Scalars['String'];
  collectionId: Scalars['Int'];
}>;

export type AddCollectionMovieMutation = {
  __typename?: 'Mutation';
  createCollectionMovie: {
    __typename?: 'CollectionMovie';
    collectionId: string;
    movie:
      | {
          __typename?: 'Film';
          id: string;
          title: string;
          description?: string | null;
          releaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
      | {
          __typename?: 'Series';
          id: string;
          title: string;
          description?: string | null;
          startReleaseDate?: string | null;
          endReleaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        };
  };
};

export type RemoveCollectionMovieMutationVariables = Exact<{
  movieId: Scalars['String'];
  collectionId: Scalars['Int'];
}>;

export type RemoveCollectionMovieMutation = {
  __typename?: 'Mutation';
  deleteCollectionMovie: { __typename?: 'CollectionMovie'; collectionId: string; movieId: string };
};

export type CollectionReviewFragment = {
  __typename?: 'CollectionReview';
  id: string;
  text?: string | null;
  mark: number;
  createdAt: string;
  collectionId: number;
  user: {
    __typename?: 'User';
    id: string;
    name: string;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
};

export type CreateCollectionReviewMutationVariables = Exact<{
  input: CreateCollectionReviewInput;
}>;

export type CreateCollectionReviewMutation = {
  __typename?: 'Mutation';
  createCollectionReview: {
    __typename?: 'CollectionReview';
    id: string;
    text?: string | null;
    mark: number;
    createdAt: string;
    collectionId: number;
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type GetCollectionReviewQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetCollectionReviewQuery = {
  __typename?: 'Query';
  getCollectionReview: {
    __typename?: 'CollectionReview';
    id: string;
    text?: string | null;
    mark: number;
    createdAt: string;
    collectionId: number;
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type HasCollectionReviewQueryVariables = Exact<{
  collectionId: Scalars['Int'];
}>;

export type HasCollectionReviewQuery = { __typename?: 'Query'; hasCollectionReview: boolean };

export type GetCollectionsReviewsOffsetQueryVariables = Exact<{
  filter?: InputMaybe<CollectionReviewFilter>;
  sort?: InputMaybe<CollectionReviewSort>;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  withCollection?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetCollectionsReviewsOffsetQuery = {
  __typename?: 'Query';
  getCollectionsReviewsOffset: {
    __typename?: 'OffsetPaginatedCollectionsReviews';
    nodes: Array<{
      __typename?: 'CollectionReview';
      id: string;
      text?: string | null;
      mark: number;
      createdAt: string;
      collectionId: number;
      collection?: { __typename?: 'Collection'; id: string; name: string };
      user: {
        __typename?: 'User';
        id: string;
        name: string;
        avatar?: { __typename?: 'Media'; url: string } | null;
      };
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type GetCollectionsReviewsRelayQueryVariables = Exact<{
  filter?: InputMaybe<CollectionReviewFilter>;
  sort?: InputMaybe<CollectionReviewSort>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type GetCollectionsReviewsRelayQuery = {
  __typename?: 'Query';
  getCollectionsReviewsRelay: {
    __typename?: 'RelayPaginatedCollectionsReviews';
    edges: Array<{
      __typename?: 'CollectionReviewEdge';
      cursor: string;
      node: {
        __typename?: 'CollectionReview';
        id: string;
        text?: string | null;
        mark: number;
        createdAt: string;
        collectionId: number;
        user: {
          __typename?: 'User';
          id: string;
          name: string;
          avatar?: { __typename?: 'Media'; url: string } | null;
        };
      };
    }>;
    pageInfo: {
      __typename?: 'RelayPageInfo';
      hasPreviousPage: boolean;
      startCursor?: string | null;
      hasNextPage: boolean;
    };
  };
};

export type CollectionUserFragment = {
  __typename?: 'CollectionUser';
  isBookmarked: boolean;
  isWatched: boolean;
  collectionId: string;
  userId: string;
};

export type CreateCollectionUserMutationVariables = Exact<{
  input: CreateCollectionUserInput;
}>;

export type CreateCollectionUserMutation = {
  __typename?: 'Mutation';
  createCollectionUser: {
    __typename?: 'CollectionUser';
    isBookmarked: boolean;
    isWatched: boolean;
    collectionId: string;
    userId: string;
  };
};

export type UpdateCollectionUserMutationVariables = Exact<{
  userId: Scalars['String'];
  collectionId: Scalars['Int'];
  input: UpdateCollectionUserInput;
}>;

export type UpdateCollectionUserMutation = {
  __typename?: 'Mutation';
  updateCollectionUser: {
    __typename?: 'CollectionUser';
    isBookmarked: boolean;
    isWatched: boolean;
    collectionId: string;
    userId: string;
  };
};

export type GetCollectionUserQueryVariables = Exact<{
  userId: Scalars['String'];
  collectionId: Scalars['Int'];
}>;

export type GetCollectionUserQuery = {
  __typename?: 'Query';
  getCollectionUser: {
    __typename?: 'CollectionUser';
    isBookmarked: boolean;
    isWatched: boolean;
    collectionId: string;
    userId: string;
  };
};

export type BaseCollectionFragment = {
  __typename?: 'Collection';
  id: string;
  name: string;
  isSystem: boolean;
  ownerId: string;
  description?: string | null;
  createdAt: string;
  rating: number;
};

export type CollectionCard_CollectionFragment = {
  __typename?: 'Collection';
  id: string;
  name: string;
  isSystem: boolean;
  ownerId: string;
  description?: string | null;
  createdAt: string;
  rating: number;
  owner: {
    __typename?: 'User';
    id: string;
    name: string;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
  cover?: { __typename?: 'Media'; url: string } | null;
};

export type CollectionItem_CollectionFragment = {
  __typename?: 'Collection';
  id: string;
  name: string;
  isSystem: boolean;
  ownerId: string;
  description?: string | null;
  createdAt: string;
  rating: number;
  cover?: { __typename?: 'Media'; id: string; url: string } | null;
  owner: {
    __typename?: 'User';
    id: string;
    name: string;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
  movies: Array<
    | {
        __typename?: 'Film';
        id: string;
        title: string;
        description?: string | null;
        releaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      }
    | {
        __typename?: 'Series';
        id: string;
        title: string;
        description?: string | null;
        startReleaseDate?: string | null;
        endReleaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      }
  >;
};

export type CreateCollectionMutationVariables = Exact<{
  input: CreateCollectionInput;
}>;

export type CreateCollectionMutation = {
  __typename?: 'Mutation';
  createCollection: {
    __typename?: 'Collection';
    id: string;
    name: string;
    isSystem: boolean;
    ownerId: string;
    description?: string | null;
    createdAt: string;
    rating: number;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
    cover?: { __typename?: 'Media'; url: string } | null;
  };
};

export type UpdateCollectionMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateCollectionInput;
}>;

export type UpdateCollectionMutation = {
  __typename?: 'Mutation';
  updateCollection: {
    __typename?: 'Collection';
    id: string;
    name: string;
    isSystem: boolean;
    ownerId: string;
    description?: string | null;
    createdAt: string;
    rating: number;
    cover?: { __typename?: 'Media'; id: string; url: string } | null;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
    movies: Array<
      | {
          __typename?: 'Film';
          id: string;
          title: string;
          description?: string | null;
          releaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
      | {
          __typename?: 'Series';
          id: string;
          title: string;
          description?: string | null;
          startReleaseDate?: string | null;
          endReleaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
    >;
  };
};

export type DeleteCollectionMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteCollectionMutation = {
  __typename?: 'Mutation';
  deleteCollection: { __typename?: 'Collection'; id: string };
};

export type GetCollectionsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  filter?: InputMaybe<CollectionFilter>;
  sort?: InputMaybe<CollectionSort>;
}>;

export type GetCollectionsQuery = {
  __typename?: 'Query';
  getCollections: {
    __typename?: 'PaginatedCollections';
    nodes: Array<{
      __typename?: 'Collection';
      id: string;
      name: string;
      isSystem: boolean;
      ownerId: string;
      description?: string | null;
      createdAt: string;
      rating: number;
      owner: {
        __typename?: 'User';
        id: string;
        name: string;
        avatar?: { __typename?: 'Media'; url: string } | null;
      };
      cover?: { __typename?: 'Media'; url: string } | null;
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type GetCollectionQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetCollectionQuery = {
  __typename?: 'Query';
  getCollection: {
    __typename?: 'Collection';
    id: string;
    name: string;
    isSystem: boolean;
    ownerId: string;
    description?: string | null;
    createdAt: string;
    rating: number;
    cover?: { __typename?: 'Media'; id: string; url: string } | null;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
    movies: Array<
      | {
          __typename?: 'Film';
          id: string;
          title: string;
          description?: string | null;
          releaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
      | {
          __typename?: 'Series';
          id: string;
          title: string;
          description?: string | null;
          startReleaseDate?: string | null;
          endReleaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
    >;
  };
};

export type BaseCountryFragment = { __typename?: 'Country'; id: string; name: string };

export type CountryFragmentFragment = {
  __typename?: 'Country';
  id: string;
  name: string;
  language: { __typename?: 'Language'; id: string; name: string };
  currency: { __typename?: 'Currency'; id: string; name: string; symbol: string };
};

export type GetAllCountriesQueryVariables = Exact<{
  sort?: InputMaybe<CountrySort>;
  movieType?: InputMaybe<MovieTypeEnum>;
}>;

export type GetAllCountriesQuery = {
  __typename?: 'Query';
  getAllCountries: Array<{ __typename?: 'Country'; moviesCount: number; id: string; name: string }>;
};

export type GetCountriesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  filter?: InputMaybe<CountryFilter>;
  sort?: InputMaybe<CountrySort>;
}>;

export type GetCountriesQuery = {
  __typename?: 'Query';
  getCountries: {
    __typename?: 'PaginatedCountries';
    nodes: Array<{ __typename?: 'Country'; id: string; name: string }>;
  };
};

export type ConfirmEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type ConfirmEmailMutation = { __typename?: 'Mutation'; confirmEmail: boolean };

export type SendEmailConfirmationMutationVariables = Exact<{ [key: string]: never }>;

export type SendEmailConfirmationMutation = { __typename?: 'Mutation'; sendConfirmation: boolean };

export type EpisodeFragment = {
  __typename?: 'Episode';
  id: string;
  title?: string | null;
  description?: string | null;
  releaseDate?: string | null;
  ageRestriction?: AgeRestrictionEnum | null;
  numberInSeries: number;
  numberInSeason: number;
  cover?: { __typename?: 'Media'; url: string } | null;
  video?: {
    __typename?: 'Video';
    id: string;
    dashManifestMedia?: { __typename?: 'Media'; url: string } | null;
    hlsManifestMedia?: { __typename?: 'Media'; url: string } | null;
    subtitles: Array<{
      __typename?: 'Subtitles';
      languageId: string;
      file: { __typename?: 'Media'; url: string };
    }>;
  } | null;
};

export type GetEpisodeBySeriesAndNumQueryVariables = Exact<{
  seriesId: Scalars['String'];
  numberInSeries: Scalars['Int'];
}>;

export type GetEpisodeBySeriesAndNumQuery = {
  __typename?: 'Query';
  getEpisodeBySeriesAndNum: {
    __typename?: 'Episode';
    id: string;
    title?: string | null;
    description?: string | null;
    releaseDate?: string | null;
    ageRestriction?: AgeRestrictionEnum | null;
    numberInSeries: number;
    numberInSeason: number;
    cover?: { __typename?: 'Media'; url: string } | null;
    video?: {
      __typename?: 'Video';
      id: string;
      dashManifestMedia?: { __typename?: 'Media'; url: string } | null;
      hlsManifestMedia?: { __typename?: 'Media'; url: string } | null;
      subtitles: Array<{
        __typename?: 'Subtitles';
        languageId: string;
        file: { __typename?: 'Media'; url: string };
      }>;
    } | null;
  };
};

export type GetEpisodesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<EpisodeSort>;
  filter?: InputMaybe<EpisodeFilter>;
}>;

export type GetEpisodesQuery = {
  __typename?: 'Query';
  getEpisodes: {
    __typename?: 'PaginatedEpisodes';
    nodes: Array<{
      __typename?: 'Episode';
      id: string;
      title?: string | null;
      description?: string | null;
      releaseDate?: string | null;
      ageRestriction?: AgeRestrictionEnum | null;
      numberInSeries: number;
      numberInSeason: number;
      cover?: { __typename?: 'Media'; url: string } | null;
      video?: {
        __typename?: 'Video';
        id: string;
        dashManifestMedia?: { __typename?: 'Media'; url: string } | null;
        hlsManifestMedia?: { __typename?: 'Media'; url: string } | null;
        subtitles: Array<{
          __typename?: 'Subtitles';
          languageId: string;
          file: { __typename?: 'Media'; url: string };
        }>;
      } | null;
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type FilmBaseFragment = {
  __typename?: 'Film';
  id: string;
  title: string;
  description?: string | null;
  releaseDate?: string | null;
  ageRestriction?: AgeRestrictionEnum | null;
  rating: number;
};

export type FilmCard_FilmFragment = {
  __typename?: 'Film';
  id: string;
  title: string;
  description?: string | null;
  releaseDate?: string | null;
  ageRestriction?: AgeRestrictionEnum | null;
  rating: number;
  studios: Array<{ __typename?: 'Studio'; name: string }>;
  countries: Array<{ __typename?: 'Country'; name: string }>;
  genres: Array<{ __typename?: 'Genre'; name: string }>;
  cover?: { __typename?: 'Media'; url: string } | null;
};

export type FilmItem_FilmFragment = {
  __typename?: 'Film';
  productId?: string | null;
  id: string;
  title: string;
  description?: string | null;
  releaseDate?: string | null;
  ageRestriction?: AgeRestrictionEnum | null;
  rating: number;
  studios: Array<{ __typename?: 'Studio'; name: string }>;
  countries: Array<{ __typename?: 'Country'; name: string }>;
  genres: Array<{ __typename?: 'Genre'; name: string }>;
  cover?: { __typename?: 'Media'; url: string } | null;
  video?: {
    __typename?: 'Video';
    id: string;
    dashManifestMedia?: { __typename?: 'Media'; url: string } | null;
    hlsManifestMedia?: { __typename?: 'Media'; url: string } | null;
    subtitles: Array<{
      __typename?: 'Subtitles';
      languageId: string;
      file: { __typename?: 'Media'; url: string };
    }>;
  } | null;
};

export type GetFilmsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<FilmSort>;
  filter?: InputMaybe<FilmFilter>;
}>;

export type GetFilmsQuery = {
  __typename?: 'Query';
  getFilms: {
    __typename?: 'PaginatedFilms';
    nodes: Array<{
      __typename?: 'Film';
      id: string;
      title: string;
      description?: string | null;
      releaseDate?: string | null;
      ageRestriction?: AgeRestrictionEnum | null;
      rating: number;
      studios: Array<{ __typename?: 'Studio'; name: string }>;
      countries: Array<{ __typename?: 'Country'; name: string }>;
      genres: Array<{ __typename?: 'Genre'; name: string }>;
      cover?: { __typename?: 'Media'; url: string } | null;
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number; hasNextPage: boolean };
  };
};

export type GetFilmQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetFilmQuery = {
  __typename?: 'Query';
  getFilm: {
    __typename?: 'Film';
    productId?: string | null;
    id: string;
    title: string;
    description?: string | null;
    releaseDate?: string | null;
    ageRestriction?: AgeRestrictionEnum | null;
    rating: number;
    studios: Array<{ __typename?: 'Studio'; name: string }>;
    countries: Array<{ __typename?: 'Country'; name: string }>;
    genres: Array<{ __typename?: 'Genre'; name: string }>;
    cover?: { __typename?: 'Media'; url: string } | null;
    video?: {
      __typename?: 'Video';
      id: string;
      dashManifestMedia?: { __typename?: 'Media'; url: string } | null;
      hlsManifestMedia?: { __typename?: 'Media'; url: string } | null;
      subtitles: Array<{
        __typename?: 'Subtitles';
        languageId: string;
        file: { __typename?: 'Media'; url: string };
      }>;
    } | null;
  };
};

export type GetAllGenresQueryVariables = Exact<{
  sort?: InputMaybe<GenreSort>;
  movieType?: InputMaybe<MovieTypeEnum>;
}>;

export type GetAllGenresQuery = {
  __typename?: 'Query';
  getAllGenres: Array<{ __typename?: 'Genre'; id: string; name: string; moviesCount: number }>;
};

export type GetGenresQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  filter?: InputMaybe<GenreFilter>;
  sort?: InputMaybe<GenreSort>;
}>;

export type GetGenresQuery = {
  __typename?: 'Query';
  getGenres: {
    __typename?: 'PaginatedGenres';
    nodes: Array<{ __typename?: 'Genre'; id: string; name: string }>;
  };
};

export type UploadImageMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;

export type UploadImageMutation = {
  __typename?: 'Mutation';
  uploadImage: { __typename?: 'Media'; id: string; url: string; type: MediaTypeEnum };
};

export type CreateUploadMutationVariables = Exact<{
  type: MediaTypeEnum;
}>;

export type CreateUploadMutation = {
  __typename?: 'Mutation';
  createUpload: { __typename?: 'CreateUploadResult'; mediaId: string; uploadUrl: string };
};

export type MovieImageCard_MovieImageFragment = {
  __typename?: 'MovieImage';
  id: string;
  type?: { __typename?: 'MovieImageType'; id: string; name: string } | null;
  image: { __typename?: 'Media'; url: string };
};

export type GetMoviesImagesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<MovieImageSort>;
  filter?: InputMaybe<MovieImageFilter>;
}>;

export type GetMoviesImagesQuery = {
  __typename?: 'Query';
  getMoviesImages: {
    __typename?: 'PaginatedMoviesImages';
    nodes: Array<{
      __typename?: 'MovieImage';
      id: string;
      type?: { __typename?: 'MovieImageType'; id: string; name: string } | null;
      image: { __typename?: 'Media'; url: string };
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type MoviePersonCard_MoviePersonFragment = {
  __typename?: 'MoviePerson';
  id: string;
  role?: string | null;
  type: { __typename?: 'MoviePersonType'; id: string; name: string };
  person: {
    __typename?: 'Person';
    id: string;
    name: string;
    image?: { __typename?: 'Media'; url: string } | null;
    country?: { __typename?: 'Country'; id: string; name: string } | null;
  };
};

export type GetMoviesPersonsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<MoviePersonSort>;
  filter?: InputMaybe<MoviePersonFilter>;
}>;

export type GetMoviesPersonsQuery = {
  __typename?: 'Query';
  getMoviesPersons: {
    __typename?: 'PaginatedMoviesPersons';
    nodes: Array<{
      __typename?: 'MoviePerson';
      id: string;
      role?: string | null;
      type: { __typename?: 'MoviePersonType'; id: string; name: string };
      person: {
        __typename?: 'Person';
        id: string;
        name: string;
        image?: { __typename?: 'Media'; url: string } | null;
        country?: { __typename?: 'Country'; id: string; name: string } | null;
      };
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type BaseMovieReviewFragment = {
  __typename?: 'MovieReview';
  id: string;
  text?: string | null;
  mark: number;
  createdAt: string;
  user: {
    __typename?: 'User';
    id: string;
    name: string;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
};

export type MovieReviewFragment = {
  __typename?: 'MovieReview';
  id: string;
  text?: string | null;
  mark: number;
  createdAt: string;
  movie:
    | { __typename?: 'Film'; id: string; title: string }
    | { __typename?: 'Series'; id: string; title: string };
  user: {
    __typename?: 'User';
    id: string;
    name: string;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
};

export type CreateMovieReviewMutationVariables = Exact<{
  input: CreateMovieReviewInput;
}>;

export type CreateMovieReviewMutation = {
  __typename?: 'Mutation';
  createMovieReview: {
    __typename?: 'MovieReview';
    id: string;
    text?: string | null;
    mark: number;
    createdAt: string;
    movie:
      | { __typename?: 'Film'; id: string; title: string }
      | { __typename?: 'Series'; id: string; title: string };
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type GetMovieReviewQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetMovieReviewQuery = {
  __typename?: 'Query';
  getMovieReview: {
    __typename?: 'MovieReview';
    id: string;
    text?: string | null;
    mark: number;
    createdAt: string;
    movie:
      | { __typename?: 'Film'; id: string; title: string }
      | { __typename?: 'Series'; id: string; title: string };
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type HasMovieReviewQueryVariables = Exact<{
  movieId: Scalars['String'];
}>;

export type HasMovieReviewQuery = { __typename?: 'Query'; hasMovieReview: boolean };

export type GetMoviesReviewsOffsetQueryVariables = Exact<{
  filter?: InputMaybe<MovieReviewFilter>;
  sort?: InputMaybe<MovieReviewSort>;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  withMovie?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetMoviesReviewsOffsetQuery = {
  __typename?: 'Query';
  getMoviesReviewsOffset: {
    __typename?: 'OffsetPaginatedMoviesReviews';
    nodes: Array<{
      __typename?: 'MovieReview';
      id: string;
      text?: string | null;
      mark: number;
      createdAt: string;
      movie?:
        | { __typename?: 'Film'; id: string; title: string }
        | { __typename?: 'Series'; id: string; title: string };
      user: {
        __typename?: 'User';
        id: string;
        name: string;
        avatar?: { __typename?: 'Media'; url: string } | null;
      };
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type GetMoviesReviewsRelayQueryVariables = Exact<{
  filter?: InputMaybe<MovieReviewFilter>;
  sort?: InputMaybe<MovieReviewSort>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  withMovie?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetMoviesReviewsRelayQuery = {
  __typename?: 'Query';
  getMoviesReviewsRelay: {
    __typename?: 'RelayPaginatedMoviesReviews';
    edges: Array<{
      __typename?: 'MovieReviewEdge';
      cursor: string;
      node: {
        __typename?: 'MovieReview';
        id: string;
        text?: string | null;
        mark: number;
        createdAt: string;
        movie?:
          | { __typename?: 'Film'; id: string; title: string }
          | { __typename?: 'Series'; id: string; title: string };
        user: {
          __typename?: 'User';
          id: string;
          name: string;
          avatar?: { __typename?: 'Media'; url: string } | null;
        };
      };
    }>;
    pageInfo: {
      __typename?: 'RelayPageInfo';
      hasPreviousPage: boolean;
      startCursor?: string | null;
      hasNextPage: boolean;
    };
  };
};

export type MovieUserFragment = {
  __typename?: 'MovieUser';
  isBookmarked: boolean;
  isWatched: boolean;
  isFavorite: boolean;
  movieId: string;
  userId: string;
};

export type CreateMovieUserMutationVariables = Exact<{
  input: CreateMovieUserInput;
}>;

export type CreateMovieUserMutation = {
  __typename?: 'Mutation';
  createMovieUser: {
    __typename?: 'MovieUser';
    isBookmarked: boolean;
    isWatched: boolean;
    isFavorite: boolean;
    movieId: string;
    userId: string;
  };
};

export type UpdateMovieUserMutationVariables = Exact<{
  userId: Scalars['String'];
  movieId: Scalars['String'];
  input: UpdateMovieUserInput;
}>;

export type UpdateMovieUserMutation = {
  __typename?: 'Mutation';
  updateMovieUser: {
    __typename?: 'MovieUser';
    isBookmarked: boolean;
    isWatched: boolean;
    isFavorite: boolean;
    movieId: string;
    userId: string;
  };
};

export type GetMovieUserQueryVariables = Exact<{
  userId: Scalars['String'];
  movieId: Scalars['String'];
}>;

export type GetMovieUserQuery = {
  __typename?: 'Query';
  getMovieUser: {
    __typename?: 'MovieUser';
    isBookmarked: boolean;
    isWatched: boolean;
    isFavorite: boolean;
    movieId: string;
    userId: string;
  };
};

export type GetMoviesUsersQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<MovieUserSort>;
  filter?: InputMaybe<MovieUserFilter>;
  withMovie?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetMoviesUsersQuery = {
  __typename?: 'Query';
  getMoviesUsers: {
    __typename?: 'PaginatedMoviesUsers';
    nodes: Array<{
      __typename?: 'MovieUser';
      isBookmarked: boolean;
      isWatched: boolean;
      isFavorite: boolean;
      movieId: string;
      userId: string;
      movie?:
        | {
            __typename?: 'Film';
            id: string;
            title: string;
            description?: string | null;
            releaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          }
        | {
            __typename?: 'Series';
            id: string;
            title: string;
            description?: string | null;
            startReleaseDate?: string | null;
            endReleaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          };
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type IncreaseMovieVisitsMutationVariables = Exact<{
  movieId: Scalars['String'];
}>;

export type IncreaseMovieVisitsMutation = { __typename?: 'Mutation'; increaseMovieVisits: boolean };

type Movie_Film_Fragment = {
  __typename?: 'Film';
  id: string;
  title: string;
  description?: string | null;
  releaseDate?: string | null;
  ageRestriction?: AgeRestrictionEnum | null;
  rating: number;
  studios: Array<{ __typename?: 'Studio'; name: string }>;
  countries: Array<{ __typename?: 'Country'; name: string }>;
  genres: Array<{ __typename?: 'Genre'; name: string }>;
  cover?: { __typename?: 'Media'; url: string } | null;
};

type Movie_Series_Fragment = {
  __typename?: 'Series';
  id: string;
  title: string;
  description?: string | null;
  startReleaseDate?: string | null;
  endReleaseDate?: string | null;
  ageRestriction?: AgeRestrictionEnum | null;
  rating: number;
  studios: Array<{ __typename?: 'Studio'; name: string }>;
  countries: Array<{ __typename?: 'Country'; name: string }>;
  genres: Array<{ __typename?: 'Genre'; name: string }>;
  cover?: { __typename?: 'Media'; url: string } | null;
};

export type MovieFragment = Movie_Film_Fragment | Movie_Series_Fragment;

export type GetMovieQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetMovieQuery = {
  __typename?: 'Query';
  getMovie:
    | {
        __typename?: 'Film';
        id: string;
        title: string;
        description?: string | null;
        releaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      }
    | {
        __typename?: 'Series';
        id: string;
        title: string;
        description?: string | null;
        startReleaseDate?: string | null;
        endReleaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      };
};

export type GetRandomMoviesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type GetRandomMoviesQuery = {
  __typename?: 'Query';
  getRandomMovies: Array<
    | {
        __typename?: 'Film';
        id: string;
        title: string;
        description?: string | null;
        releaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      }
    | {
        __typename?: 'Series';
        id: string;
        title: string;
        description?: string | null;
        startReleaseDate?: string | null;
        endReleaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      }
  >;
};

export type GetMostReviewedMoviesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type GetMostReviewedMoviesQuery = {
  __typename?: 'Query';
  getMostReviewedMovies: Array<
    | {
        __typename?: 'Film';
        id: string;
        title: string;
        description?: string | null;
        releaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      }
    | {
        __typename?: 'Series';
        id: string;
        title: string;
        description?: string | null;
        startReleaseDate?: string | null;
        endReleaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      }
  >;
};

export type GetMostViewedMoviesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type GetMostViewedMoviesQuery = {
  __typename?: 'Query';
  getMostViewedMovies: Array<
    | {
        __typename?: 'Film';
        id: string;
        title: string;
        description?: string | null;
        releaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      }
    | {
        __typename?: 'Series';
        id: string;
        title: string;
        description?: string | null;
        startReleaseDate?: string | null;
        endReleaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      }
  >;
};

export type GetMoviesProtectedOffsetQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<MovieSort>;
  filter?: InputMaybe<MovieFilter>;
}>;

export type GetMoviesProtectedOffsetQuery = {
  __typename?: 'Query';
  getMoviesProtectedOffset: {
    __typename?: 'OffsetPaginatedMovies';
    nodes: Array<
      | {
          __typename?: 'Film';
          id: string;
          title: string;
          description?: string | null;
          releaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
      | {
          __typename?: 'Series';
          id: string;
          title: string;
          description?: string | null;
          startReleaseDate?: string | null;
          endReleaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
    >;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type GetMoviesOffsetQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<MovieSort>;
  filter?: InputMaybe<MovieFilter>;
}>;

export type GetMoviesOffsetQuery = {
  __typename?: 'Query';
  getMoviesOffset: {
    __typename?: 'OffsetPaginatedMovies';
    nodes: Array<
      | {
          __typename?: 'Film';
          id: string;
          title: string;
          description?: string | null;
          releaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
      | {
          __typename?: 'Series';
          id: string;
          title: string;
          description?: string | null;
          startReleaseDate?: string | null;
          endReleaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
    >;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type GetMoviesRelayQueryVariables = Exact<{
  sort?: InputMaybe<MovieSort>;
  filter?: InputMaybe<MovieFilter>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type GetMoviesRelayQuery = {
  __typename?: 'Query';
  getMoviesRelay: {
    __typename?: 'RelayPaginatedMovies';
    edges: Array<{
      __typename?: 'RelayMovieEdge';
      cursor: string;
      node:
        | {
            __typename?: 'Film';
            id: string;
            title: string;
            description?: string | null;
            releaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          }
        | {
            __typename?: 'Series';
            id: string;
            title: string;
            description?: string | null;
            startReleaseDate?: string | null;
            endReleaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          };
    }>;
    pageInfo: {
      __typename?: 'RelayPageInfo';
      hasPreviousPage: boolean;
      startCursor?: string | null;
      hasNextPage: boolean;
      endCursor?: string | null;
    };
  };
};

export type PersonFragment = {
  __typename?: 'Person';
  id: string;
  name: string;
  image?: { __typename?: 'Media'; url: string } | null;
  country?: { __typename?: 'Country'; id: string; name: string } | null;
};

export type PlanFragment = {
  __typename?: 'Plan';
  id: string;
  name: string;
  prices: Array<{
    __typename?: 'Price';
    id: string;
    amount: number;
    interval?: PlanIntervalEnum | null;
    currency: { __typename?: 'Currency'; id: string; name: string; symbol: string };
  }>;
};

export type GetPlansQueryVariables = Exact<{ [key: string]: never }>;

export type GetPlansQuery = {
  __typename?: 'Query';
  getPlans: Array<{
    __typename?: 'Plan';
    id: string;
    name: string;
    prices: Array<{
      __typename?: 'Price';
      id: string;
      amount: number;
      interval?: PlanIntervalEnum | null;
      currency: { __typename?: 'Currency'; id: string; name: string; symbol: string };
    }>;
  }>;
};

export type BasePriceFragment = {
  __typename?: 'Price';
  id: string;
  amount: number;
  currencyId: string;
};

export type PlanPriceFragment = {
  __typename?: 'Price';
  id: string;
  amount: number;
  interval?: PlanIntervalEnum | null;
  currency: { __typename?: 'Currency'; id: string; name: string; symbol: string };
};

export type PriceFragment = {
  __typename?: 'Price';
  id: string;
  amount: number;
  currency: { __typename?: 'Currency'; id: string; name: string; symbol: string };
};

export type ProductFragment = {
  __typename?: 'Product';
  id: string;
  movieId: string;
  prices: Array<{
    __typename?: 'Price';
    id: string;
    amount: number;
    currency: { __typename?: 'Currency'; id: string; name: string; symbol: string };
  }>;
};

export type GetProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetProductQuery = {
  __typename?: 'Query';
  getProduct: {
    __typename?: 'Product';
    id: string;
    movieId: string;
    prices: Array<{
      __typename?: 'Price';
      id: string;
      amount: number;
      currency: { __typename?: 'Currency'; id: string; name: string; symbol: string };
    }>;
  };
};

export type CreatePurchaseSessionMutationVariables = Exact<{
  movieId: Scalars['String'];
  priceId: Scalars['String'];
}>;

export type CreatePurchaseSessionMutation = {
  __typename?: 'Mutation';
  createPurchaseSession: string;
};

export type HasPurchaseQueryVariables = Exact<{
  movieId: Scalars['String'];
}>;

export type HasPurchaseQuery = { __typename?: 'Query'; hasPurchase: boolean };

export type BaseRoomMovieFragment = {
  __typename?: 'RoomMovie';
  roomId: string;
  movieId: string;
  episodeNumber?: number | null;
  order: number;
  showStart?: string | null;
};

export type RoomMovieFragment = {
  __typename?: 'RoomMovie';
  roomId: string;
  episodeNumber?: number | null;
  showStart?: string | null;
  order: number;
  movie:
    | {
        __typename?: 'Film';
        id: string;
        title: string;
        description?: string | null;
        releaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      }
    | {
        __typename?: 'Series';
        id: string;
        title: string;
        description?: string | null;
        startReleaseDate?: string | null;
        endReleaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        rating: number;
        studios: Array<{ __typename?: 'Studio'; name: string }>;
        countries: Array<{ __typename?: 'Country'; name: string }>;
        genres: Array<{ __typename?: 'Genre'; name: string }>;
        cover?: { __typename?: 'Media'; url: string } | null;
      };
};

export type CreateRoomMovieMutationVariables = Exact<{
  input: CreateRoomMovieInput;
}>;

export type CreateRoomMovieMutation = {
  __typename?: 'Mutation';
  createRoomMovie: {
    __typename?: 'RoomMovie';
    roomId: string;
    episodeNumber?: number | null;
    showStart?: string | null;
    order: number;
    movie:
      | {
          __typename?: 'Film';
          id: string;
          title: string;
          description?: string | null;
          releaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
      | {
          __typename?: 'Series';
          id: string;
          title: string;
          description?: string | null;
          startReleaseDate?: string | null;
          endReleaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        };
  };
};

export type DeleteRoomMovieMutationVariables = Exact<{
  roomId: Scalars['String'];
  movieId: Scalars['String'];
}>;

export type DeleteRoomMovieMutation = {
  __typename?: 'Mutation';
  deleteRoomMovie: {
    __typename?: 'RoomMovie';
    roomId: string;
    movieId: string;
    episodeNumber?: number | null;
    order: number;
    showStart?: string | null;
  };
};

export type BaseRoomFragment = {
  __typename?: 'Room';
  id: string;
  name: string;
  owner: {
    __typename?: 'User';
    id: string;
    name: string;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
};

export type RoomFragment = {
  __typename?: 'Room';
  id: string;
  name: string;
  currentMovie?: {
    __typename?: 'RoomMovie';
    roomId: string;
    episodeNumber?: number | null;
    showStart?: string | null;
    order: number;
    movie:
      | {
          __typename?: 'Film';
          id: string;
          title: string;
          description?: string | null;
          releaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
      | {
          __typename?: 'Series';
          id: string;
          title: string;
          description?: string | null;
          startReleaseDate?: string | null;
          endReleaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        };
  } | null;
  participants: Array<{
    __typename?: 'User';
    id: string;
    name: string;
    avatar?: { __typename?: 'Media'; url: string } | null;
  }>;
  movies: Array<{
    __typename?: 'RoomMovie';
    roomId: string;
    episodeNumber?: number | null;
    showStart?: string | null;
    order: number;
    movie:
      | {
          __typename?: 'Film';
          id: string;
          title: string;
          description?: string | null;
          releaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
      | {
          __typename?: 'Series';
          id: string;
          title: string;
          description?: string | null;
          startReleaseDate?: string | null;
          endReleaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        };
  }>;
  owner: {
    __typename?: 'User';
    id: string;
    name: string;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
};

export type CreateRoomMutationVariables = Exact<{
  input: CreateRoomInput;
}>;

export type CreateRoomMutation = {
  __typename?: 'Mutation';
  createRoom: {
    __typename?: 'Room';
    id: string;
    name: string;
    currentMovie?: {
      __typename?: 'RoomMovie';
      roomId: string;
      episodeNumber?: number | null;
      showStart?: string | null;
      order: number;
      movie:
        | {
            __typename?: 'Film';
            id: string;
            title: string;
            description?: string | null;
            releaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          }
        | {
            __typename?: 'Series';
            id: string;
            title: string;
            description?: string | null;
            startReleaseDate?: string | null;
            endReleaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          };
    } | null;
    participants: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    }>;
    movies: Array<{
      __typename?: 'RoomMovie';
      roomId: string;
      episodeNumber?: number | null;
      showStart?: string | null;
      order: number;
      movie:
        | {
            __typename?: 'Film';
            id: string;
            title: string;
            description?: string | null;
            releaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          }
        | {
            __typename?: 'Series';
            id: string;
            title: string;
            description?: string | null;
            startReleaseDate?: string | null;
            endReleaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          };
    }>;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type JoinRoomMutationVariables = Exact<{
  inviteToken: Scalars['String'];
}>;

export type JoinRoomMutation = {
  __typename?: 'Mutation';
  joinRoom: {
    __typename?: 'Room';
    id: string;
    name: string;
    currentMovie?: {
      __typename?: 'RoomMovie';
      roomId: string;
      episodeNumber?: number | null;
      showStart?: string | null;
      order: number;
      movie:
        | {
            __typename?: 'Film';
            id: string;
            title: string;
            description?: string | null;
            releaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          }
        | {
            __typename?: 'Series';
            id: string;
            title: string;
            description?: string | null;
            startReleaseDate?: string | null;
            endReleaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          };
    } | null;
    participants: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    }>;
    movies: Array<{
      __typename?: 'RoomMovie';
      roomId: string;
      episodeNumber?: number | null;
      showStart?: string | null;
      order: number;
      movie:
        | {
            __typename?: 'Film';
            id: string;
            title: string;
            description?: string | null;
            releaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          }
        | {
            __typename?: 'Series';
            id: string;
            title: string;
            description?: string | null;
            startReleaseDate?: string | null;
            endReleaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          };
    }>;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type LeaveRoomMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type LeaveRoomMutation = {
  __typename?: 'Mutation';
  leaveRoom: {
    __typename?: 'Room';
    id: string;
    name: string;
    currentMovie?: {
      __typename?: 'RoomMovie';
      roomId: string;
      episodeNumber?: number | null;
      showStart?: string | null;
      order: number;
      movie:
        | {
            __typename?: 'Film';
            id: string;
            title: string;
            description?: string | null;
            releaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          }
        | {
            __typename?: 'Series';
            id: string;
            title: string;
            description?: string | null;
            startReleaseDate?: string | null;
            endReleaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          };
    } | null;
    participants: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    }>;
    movies: Array<{
      __typename?: 'RoomMovie';
      roomId: string;
      episodeNumber?: number | null;
      showStart?: string | null;
      order: number;
      movie:
        | {
            __typename?: 'Film';
            id: string;
            title: string;
            description?: string | null;
            releaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          }
        | {
            __typename?: 'Series';
            id: string;
            title: string;
            description?: string | null;
            startReleaseDate?: string | null;
            endReleaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          };
    }>;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type GenerateRoomInviteMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type GenerateRoomInviteMutation = { __typename?: 'Mutation'; generateRoomInvite: string };

export type DeleteRoomMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteRoomMutation = {
  __typename?: 'Mutation';
  deleteRoom: {
    __typename?: 'Room';
    id: string;
    name: string;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type StartRoomPlaybackMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type StartRoomPlaybackMutation = { __typename?: 'Mutation'; startRoomPlayback: boolean };

export type EndRoomPlaybackMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type EndRoomPlaybackMutation = { __typename?: 'Mutation'; endRoomPlayback: boolean };

export type GetRoomQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetRoomQuery = {
  __typename?: 'Query';
  getRoom: {
    __typename?: 'Room';
    id: string;
    name: string;
    currentMovie?: {
      __typename?: 'RoomMovie';
      roomId: string;
      episodeNumber?: number | null;
      showStart?: string | null;
      order: number;
      movie:
        | {
            __typename?: 'Film';
            id: string;
            title: string;
            description?: string | null;
            releaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          }
        | {
            __typename?: 'Series';
            id: string;
            title: string;
            description?: string | null;
            startReleaseDate?: string | null;
            endReleaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          };
    } | null;
    participants: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    }>;
    movies: Array<{
      __typename?: 'RoomMovie';
      roomId: string;
      episodeNumber?: number | null;
      showStart?: string | null;
      order: number;
      movie:
        | {
            __typename?: 'Film';
            id: string;
            title: string;
            description?: string | null;
            releaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          }
        | {
            __typename?: 'Series';
            id: string;
            title: string;
            description?: string | null;
            startReleaseDate?: string | null;
            endReleaseDate?: string | null;
            ageRestriction?: AgeRestrictionEnum | null;
            rating: number;
            studios: Array<{ __typename?: 'Studio'; name: string }>;
            countries: Array<{ __typename?: 'Country'; name: string }>;
            genres: Array<{ __typename?: 'Genre'; name: string }>;
            cover?: { __typename?: 'Media'; url: string } | null;
          };
    }>;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type GetRoomsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<RoomSort>;
  filter?: InputMaybe<RoomFilter>;
}>;

export type GetRoomsQuery = {
  __typename?: 'Query';
  getRooms: {
    __typename?: 'PaginatedRooms';
    nodes: Array<{
      __typename?: 'Room';
      id: string;
      name: string;
      owner: {
        __typename?: 'User';
        id: string;
        name: string;
        avatar?: { __typename?: 'Media'; url: string } | null;
      };
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type GetRoomCurrentPlaybackQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetRoomCurrentPlaybackQuery = { __typename?: 'Query'; getRoomCurrentPlayback: number };

export type RoomPlaybackStartedSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;

export type RoomPlaybackStartedSubscription = {
  __typename?: 'Subscription';
  roomPlaybackStarted: {
    __typename?: 'RoomMovie';
    roomId: string;
    episodeNumber?: number | null;
    showStart?: string | null;
    order: number;
    movie:
      | {
          __typename?: 'Film';
          id: string;
          title: string;
          description?: string | null;
          releaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        }
      | {
          __typename?: 'Series';
          id: string;
          title: string;
          description?: string | null;
          startReleaseDate?: string | null;
          endReleaseDate?: string | null;
          ageRestriction?: AgeRestrictionEnum | null;
          rating: number;
          studios: Array<{ __typename?: 'Studio'; name: string }>;
          countries: Array<{ __typename?: 'Country'; name: string }>;
          genres: Array<{ __typename?: 'Genre'; name: string }>;
          cover?: { __typename?: 'Media'; url: string } | null;
        };
  };
};

export type RoomPlaybackEndedSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;

export type RoomPlaybackEndedSubscription = {
  __typename?: 'Subscription';
  roomPlaybackEnded: {
    __typename?: 'RoomMovie';
    roomId: string;
    movieId: string;
    episodeNumber?: number | null;
    order: number;
    showStart?: string | null;
  };
};

export type RoomDeletedSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;

export type RoomDeletedSubscription = {
  __typename?: 'Subscription';
  roomDeleted: {
    __typename?: 'Room';
    id: string;
    name: string;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    };
  };
};

export type BaseSeasonFragment = {
  __typename?: 'Season';
  id: string;
  title?: string | null;
  startReleaseDate?: string | null;
  endReleaseDate?: string | null;
  numberInSeries: number;
};

export type SeasonItem_SeasonFragment = {
  __typename?: 'Season';
  id: string;
  title?: string | null;
  startReleaseDate?: string | null;
  endReleaseDate?: string | null;
  numberInSeries: number;
  episodes: Array<{
    __typename?: 'Episode';
    id: string;
    title?: string | null;
    description?: string | null;
    releaseDate?: string | null;
    ageRestriction?: AgeRestrictionEnum | null;
    numberInSeries: number;
    numberInSeason: number;
    cover?: { __typename?: 'Media'; url: string } | null;
    video?: {
      __typename?: 'Video';
      id: string;
      dashManifestMedia?: { __typename?: 'Media'; url: string } | null;
      hlsManifestMedia?: { __typename?: 'Media'; url: string } | null;
      subtitles: Array<{
        __typename?: 'Subtitles';
        languageId: string;
        file: { __typename?: 'Media'; url: string };
      }>;
    } | null;
  }>;
};

export type GetSeasonsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<SeasonSort>;
  filter?: InputMaybe<SeasonFilter>;
}>;

export type GetSeasonsQuery = {
  __typename?: 'Query';
  getSeasons: {
    __typename?: 'PaginatedSeasons';
    nodes: Array<{
      __typename?: 'Season';
      id: string;
      title?: string | null;
      startReleaseDate?: string | null;
      endReleaseDate?: string | null;
      numberInSeries: number;
      episodes: Array<{
        __typename?: 'Episode';
        id: string;
        title?: string | null;
        description?: string | null;
        releaseDate?: string | null;
        ageRestriction?: AgeRestrictionEnum | null;
        numberInSeries: number;
        numberInSeason: number;
        cover?: { __typename?: 'Media'; url: string } | null;
        video?: {
          __typename?: 'Video';
          id: string;
          dashManifestMedia?: { __typename?: 'Media'; url: string } | null;
          hlsManifestMedia?: { __typename?: 'Media'; url: string } | null;
          subtitles: Array<{
            __typename?: 'Subtitles';
            languageId: string;
            file: { __typename?: 'Media'; url: string };
          }>;
        } | null;
      }>;
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type BaseSeriesFragment = {
  __typename?: 'Series';
  id: string;
  title: string;
  description?: string | null;
  startReleaseDate?: string | null;
  endReleaseDate?: string | null;
  ageRestriction?: AgeRestrictionEnum | null;
  rating: number;
};

export type SeriesCard_SeriesFragment = {
  __typename?: 'Series';
  id: string;
  title: string;
  description?: string | null;
  startReleaseDate?: string | null;
  endReleaseDate?: string | null;
  ageRestriction?: AgeRestrictionEnum | null;
  rating: number;
  studios: Array<{ __typename?: 'Studio'; name: string }>;
  countries: Array<{ __typename?: 'Country'; name: string }>;
  genres: Array<{ __typename?: 'Genre'; name: string }>;
  cover?: { __typename?: 'Media'; url: string } | null;
};

export type SeriesItem_SeriesFragment = {
  __typename?: 'Series';
  productId?: string | null;
  id: string;
  title: string;
  description?: string | null;
  startReleaseDate?: string | null;
  endReleaseDate?: string | null;
  ageRestriction?: AgeRestrictionEnum | null;
  rating: number;
  studios: Array<{ __typename?: 'Studio'; name: string }>;
  countries: Array<{ __typename?: 'Country'; name: string }>;
  genres: Array<{ __typename?: 'Genre'; name: string }>;
  cover?: { __typename?: 'Media'; url: string } | null;
};

export type GetManySeriesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<SeriesSort>;
  filter?: InputMaybe<SeriesFilter>;
}>;

export type GetManySeriesQuery = {
  __typename?: 'Query';
  getManySeries: {
    __typename?: 'PaginatedSeries';
    nodes: Array<{
      __typename?: 'Series';
      id: string;
      title: string;
      description?: string | null;
      startReleaseDate?: string | null;
      endReleaseDate?: string | null;
      ageRestriction?: AgeRestrictionEnum | null;
      rating: number;
      studios: Array<{ __typename?: 'Studio'; name: string }>;
      countries: Array<{ __typename?: 'Country'; name: string }>;
      genres: Array<{ __typename?: 'Genre'; name: string }>;
      cover?: { __typename?: 'Media'; url: string } | null;
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number; hasNextPage: boolean };
  };
};

export type GetOneSeriesQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetOneSeriesQuery = {
  __typename?: 'Query';
  getOneSeries: {
    __typename?: 'Series';
    productId?: string | null;
    id: string;
    title: string;
    description?: string | null;
    startReleaseDate?: string | null;
    endReleaseDate?: string | null;
    ageRestriction?: AgeRestrictionEnum | null;
    rating: number;
    studios: Array<{ __typename?: 'Studio'; name: string }>;
    countries: Array<{ __typename?: 'Country'; name: string }>;
    genres: Array<{ __typename?: 'Genre'; name: string }>;
    cover?: { __typename?: 'Media'; url: string } | null;
  };
};

export type BaseStudioFragment = { __typename?: 'Studio'; id: string; name: string };

export type StudioFragment = {
  __typename?: 'Studio';
  id: string;
  name: string;
  countries: Array<{ __typename?: 'Country'; id: string; name: string }>;
};

export type GetAllStudiosQueryVariables = Exact<{
  sort?: InputMaybe<StudioSort>;
  movieType?: InputMaybe<MovieTypeEnum>;
}>;

export type GetAllStudiosQuery = {
  __typename?: 'Query';
  getAllStudios: Array<{ __typename?: 'Studio'; moviesCount: number; id: string; name: string }>;
};

export type GetStudiosQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  filter?: InputMaybe<StudioFilter>;
  sort?: InputMaybe<StudioSort>;
}>;

export type GetStudiosQuery = {
  __typename?: 'Query';
  getStudios: {
    __typename?: 'PaginatedStudios';
    nodes: Array<{ __typename?: 'Studio'; id: string; name: string }>;
  };
};

export type SubscribeMutationVariables = Exact<{
  priceId: Scalars['String'];
}>;

export type SubscribeMutation = { __typename?: 'Mutation'; subscribe: string };

export type CancelSubscriptionMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type CancelSubscriptionMutation = { __typename?: 'Mutation'; cancelSubscription: boolean };

export type CreateSubscriptionsManageLinkMutationVariables = Exact<{ [key: string]: never }>;

export type CreateSubscriptionsManageLinkMutation = {
  __typename?: 'Mutation';
  createSubscriptionsManageLink: string;
};

export type HasActiveSubscriptionQueryVariables = Exact<{ [key: string]: never }>;

export type HasActiveSubscriptionQuery = { __typename?: 'Query'; hasActiveSubscription: boolean };

export type BaseUserFragment = {
  __typename?: 'User';
  id: string;
  name: string;
  avatar?: { __typename?: 'Media'; url: string } | null;
};

export type UserFragment = {
  __typename?: 'User';
  email: string;
  createdAt: string;
  role: RoleEnum;
  isEmailConfirmed: boolean;
  id: string;
  name: string;
  country?: { __typename?: 'Country'; id: string; name: string } | null;
  avatar?: { __typename?: 'Media'; url: string } | null;
};

export type UpdatePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;

export type UpdatePasswordMutation = {
  __typename?: 'Mutation';
  updatePassword: {
    __typename?: 'User';
    email: string;
    createdAt: string;
    role: RoleEnum;
    isEmailConfirmed: boolean;
    id: string;
    name: string;
    country?: { __typename?: 'Country'; id: string; name: string } | null;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
};

export type UpdateMeMutationVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateMeMutation = {
  __typename?: 'Mutation';
  updateMe: {
    __typename?: 'User';
    email: string;
    createdAt: string;
    role: RoleEnum;
    isEmailConfirmed: boolean;
    id: string;
    name: string;
    country?: { __typename?: 'Country'; id: string; name: string } | null;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
};

export type UpdateAvatarMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;

export type UpdateAvatarMutation = {
  __typename?: 'Mutation';
  updateAvatar: {
    __typename?: 'User';
    email: string;
    createdAt: string;
    role: RoleEnum;
    isEmailConfirmed: boolean;
    id: string;
    name: string;
    country?: { __typename?: 'Country'; id: string; name: string } | null;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = {
  __typename?: 'Query';
  getMe: {
    __typename?: 'User';
    email: string;
    createdAt: string;
    role: RoleEnum;
    isEmailConfirmed: boolean;
    id: string;
    name: string;
    country?: { __typename?: 'Country'; id: string; name: string } | null;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser: {
    __typename?: 'User';
    email: string;
    createdAt: string;
    role: RoleEnum;
    isEmailConfirmed: boolean;
    id: string;
    name: string;
    country?: { __typename?: 'Country'; id: string; name: string } | null;
    avatar?: { __typename?: 'Media'; url: string } | null;
  };
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  getUsers: {
    __typename?: 'PaginatedUsers';
    nodes: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      avatar?: { __typename?: 'Media'; url: string } | null;
    }>;
    pageInfo: { __typename?: 'OffsetPageInfo'; totalCount: number };
  };
};

export type VideoFragment = {
  __typename?: 'Video';
  id: string;
  dashManifestMedia?: { __typename?: 'Media'; url: string } | null;
  hlsManifestMedia?: { __typename?: 'Media'; url: string } | null;
  subtitles: Array<{
    __typename?: 'Subtitles';
    languageId: string;
    file: { __typename?: 'Media'; url: string };
  }>;
};

export type GetVideoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetVideoQuery = {
  __typename?: 'Query';
  getVideo: {
    __typename?: 'Video';
    id: string;
    dashManifestMedia?: { __typename?: 'Media'; url: string } | null;
    hlsManifestMedia?: { __typename?: 'Media'; url: string } | null;
    subtitles: Array<{
      __typename?: 'Subtitles';
      languageId: string;
      file: { __typename?: 'Media'; url: string };
    }>;
  };
};

export const BaseUserFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseUserFragment, unknown>;
export const CollectionReviewFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CollectionReviewFragment, unknown>;
export const CollectionUserFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionUser' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'isBookmarked' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isWatched' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CollectionUserFragment, unknown>;
export const BaseCollectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCollection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isSystem' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseCollectionFragment, unknown>;
export const CollectionCard_CollectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionCard_Collection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCollection' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCollection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isSystem' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CollectionCard_CollectionFragment, unknown>;
export const BaseSeriesFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseSeriesFragment, unknown>;
export const SeriesCard_SeriesFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeriesCard_SeriesFragment, unknown>;
export const FilmBaseFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FilmBaseFragment, unknown>;
export const FilmCard_FilmFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FilmCard_FilmFragment, unknown>;
export const CollectionItem_CollectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionItem_Collection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCollection' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCollection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isSystem' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CollectionItem_CollectionFragment, unknown>;
export const BaseCountryFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCountry' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseCountryFragment, unknown>;
export const CountryFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CountryFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCountry' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currency' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCountry' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CountryFragmentFragment, unknown>;
export const VideoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Video' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dashManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hlsManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'languageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'file' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoFragment, unknown>;
export const FilmItem_FilmFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmItem_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Video' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Video' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dashManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hlsManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'languageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'file' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FilmItem_FilmFragment, unknown>;
export const MovieImageCard_MovieImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MovieImageCard_MovieImage' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieImage' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'type' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MovieImageCard_MovieImageFragment, unknown>;
export const PersonFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Person' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Person' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCountry' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCountry' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PersonFragment, unknown>;
export const MoviePersonCard_MoviePersonFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MoviePersonCard_MoviePerson' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MoviePerson' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'type' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'person' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Person' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCountry' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Person' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Person' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCountry' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MoviePersonCard_MoviePersonFragment, unknown>;
export const BaseMovieReviewFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseMovieReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseMovieReviewFragment, unknown>;
export const MovieReviewFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MovieReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseMovieReview' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseMovieReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MovieReviewFragment, unknown>;
export const MovieUserFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MovieUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieUser' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'isBookmarked' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isWatched' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MovieUserFragment, unknown>;
export const MovieFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Movie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Movie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MovieFragment, unknown>;
export const PlanPriceFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PlanPrice' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Price' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'interval' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currency' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlanPriceFragment, unknown>;
export const PlanFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Plan' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Plan' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'prices' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PlanPrice' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PlanPrice' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Price' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'interval' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currency' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlanFragment, unknown>;
export const BasePriceFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BasePrice' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Price' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currencyId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BasePriceFragment, unknown>;
export const PriceFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Price' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Price' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currency' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PriceFragment, unknown>;
export const ProductFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Product' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'prices' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Price' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Price' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Price' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currency' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductFragment, unknown>;
export const BaseRoomMovieFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseRoomMovieFragment, unknown>;
export const BaseRoomFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoom' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseRoomFragment, unknown>;
export const RoomMovieFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RoomMovieFragment, unknown>;
export const RoomFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Room' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseRoom' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currentMovie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'participants' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoom' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RoomFragment, unknown>;
export const BaseSeasonFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeason' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Season' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeries' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseSeasonFragment, unknown>;
export const EpisodeFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Episode' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeries' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeason' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Video' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Video' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dashManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hlsManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'languageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'file' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EpisodeFragment, unknown>;
export const SeasonItem_SeasonFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeasonItem_Season' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Season' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeason' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'episodes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Episode' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Video' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dashManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hlsManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'languageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'file' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeason' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Season' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeries' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Episode' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeries' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeason' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Video' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeasonItem_SeasonFragment, unknown>;
export const SeriesItem_SeriesFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesItem_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeriesItem_SeriesFragment, unknown>;
export const BaseStudioFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseStudio' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Studio' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseStudioFragment, unknown>;
export const StudioFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Studio' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Studio' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseStudio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCountry' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseStudio' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Studio' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCountry' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StudioFragment, unknown>;
export const UserFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'User' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isEmailConfirmed' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserFragment, unknown>;
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'LoginInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'User' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'User' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isEmailConfirmed' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignUp' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SignUpInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signUp' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'User' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'User' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isEmailConfirmed' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const RefreshDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Refresh' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'refresh' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'User' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'User' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isEmailConfirmed' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RefreshMutation, RefreshMutationVariables>;
export const LogoutDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Logout' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'logout' } }],
      },
    },
  ],
} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const AddCollectionMovieDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddCollectionMovie' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'collectionId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCollectionMovie' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'movieId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'collectionId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'collectionId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'movie' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeriesCard_Series' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddCollectionMovieMutation, AddCollectionMovieMutationVariables>;
export const RemoveCollectionMovieDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveCollectionMovie' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'collectionId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteCollectionMovie' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'movieId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'collectionId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'collectionId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RemoveCollectionMovieMutation, RemoveCollectionMovieMutationVariables>;
export const CreateCollectionReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCollectionReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateCollectionReviewInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCollectionReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CollectionReview' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCollectionReviewMutation,
  CreateCollectionReviewMutationVariables
>;
export const GetCollectionReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCollectionReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCollectionReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CollectionReview' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCollectionReviewQuery, GetCollectionReviewQueryVariables>;
export const HasCollectionReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HasCollectionReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'collectionId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hasCollectionReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'collectionId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'collectionId' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HasCollectionReviewQuery, HasCollectionReviewQueryVariables>;
export const GetCollectionsReviewsOffsetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCollectionsReviewsOffset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionReviewFilter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionReviewSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'withCollection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          defaultValue: { kind: 'BooleanValue', value: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCollectionsReviewsOffset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CollectionReview' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'collection' },
                        directives: [
                          {
                            kind: 'Directive',
                            name: { kind: 'Name', value: 'include' },
                            arguments: [
                              {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'if' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'withCollection' },
                                },
                              },
                            ],
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCollectionsReviewsOffsetQuery,
  GetCollectionsReviewsOffsetQueryVariables
>;
export const GetCollectionsReviewsRelayDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCollectionsReviewsRelay' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionReviewFilter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionReviewSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'before' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'last' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCollectionsReviewsRelay' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'before' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'before' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'last' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'last' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'CollectionReview' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'cursor' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCollectionsReviewsRelayQuery,
  GetCollectionsReviewsRelayQueryVariables
>;
export const CreateCollectionUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCollectionUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateCollectionUserInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCollectionUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CollectionUser' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionUser' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'isBookmarked' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isWatched' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateCollectionUserMutation, CreateCollectionUserMutationVariables>;
export const UpdateCollectionUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateCollectionUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'collectionId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateCollectionUserInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateCollectionUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'collectionId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'collectionId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CollectionUser' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionUser' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'isBookmarked' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isWatched' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateCollectionUserMutation, UpdateCollectionUserMutationVariables>;
export const GetCollectionUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCollectionUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'collectionId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCollectionUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'collectionId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'collectionId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CollectionUser' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionUser' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'isBookmarked' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isWatched' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCollectionUserQuery, GetCollectionUserQueryVariables>;
export const CreateCollectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateCollectionInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CollectionCard_Collection' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCollection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isSystem' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionCard_Collection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCollection' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateCollectionMutation, CreateCollectionMutationVariables>;
export const UpdateCollectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateCollectionInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CollectionItem_Collection' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCollection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isSystem' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionItem_Collection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCollection' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateCollectionMutation, UpdateCollectionMutationVariables>;
export const DeleteCollectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteCollectionMutation, DeleteCollectionMutationVariables>;
export const GetCollectionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCollections' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionFilter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CollectionSort' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCollections' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'CollectionCard_Collection' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCollection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isSystem' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionCard_Collection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCollection' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCollectionsQuery, GetCollectionsQueryVariables>;
export const GetCollectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CollectionItem_Collection' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCollection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isSystem' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CollectionItem_Collection' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Collection' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCollection' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCollectionQuery, GetCollectionQueryVariables>;
export const GetAllCountriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllCountries' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CountrySort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieType' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieTypeEnum' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAllCountries' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCountry' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'moviesCount' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'type' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'movieType' } },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCountry' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllCountriesQuery, GetAllCountriesQueryVariables>;
export const GetCountriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCountries' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CountryFilter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CountrySort' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCountries' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCountry' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCountry' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCountriesQuery, GetCountriesQueryVariables>;
export const ConfirmEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ConfirmEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'token' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'confirmEmail' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'token' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'token' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConfirmEmailMutation, ConfirmEmailMutationVariables>;
export const SendEmailConfirmationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendEmailConfirmation' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'sendConfirmation' } }],
      },
    },
  ],
} as unknown as DocumentNode<SendEmailConfirmationMutation, SendEmailConfirmationMutationVariables>;
export const GetEpisodeBySeriesAndNumDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEpisodeBySeriesAndNum' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'seriesId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'numberInSeries' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getEpisodeBySeriesAndNum' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'seriesId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'seriesId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'numInSeries' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'numberInSeries' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Episode' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Video' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dashManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hlsManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'languageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'file' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Episode' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeries' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeason' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Video' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEpisodeBySeriesAndNumQuery, GetEpisodeBySeriesAndNumQueryVariables>;
export const GetEpisodesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEpisodes' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'EpisodeSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'EpisodeFilter' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getEpisodes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Episode' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Video' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dashManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hlsManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'languageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'file' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Episode' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeries' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeason' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Video' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEpisodesQuery, GetEpisodesQueryVariables>;
export const GetFilmsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFilms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilmSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilmFilter' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getFilms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetFilmsQuery, GetFilmsQueryVariables>;
export const GetFilmDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFilm' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getFilm' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmItem_Film' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Video' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dashManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hlsManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'languageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'file' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmItem_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Video' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetFilmQuery, GetFilmQueryVariables>;
export const GetAllGenresDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllGenres' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'GenreSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieType' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieTypeEnum' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAllGenres' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'moviesCount' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'type' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'movieType' } },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllGenresQuery, GetAllGenresQueryVariables>;
export const GetGenresDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetGenres' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'GenreFilter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'GenreSort' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getGenres' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetGenresQuery, GetGenresQueryVariables>;
export const UploadImageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UploadImage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Upload' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'uploadImage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'file' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UploadImageMutation, UploadImageMutationVariables>;
export const CreateUploadDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUpload' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'MediaTypeEnum' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUpload' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'type' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'mediaId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uploadUrl' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUploadMutation, CreateUploadMutationVariables>;
export const GetMoviesImagesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMoviesImages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieImageSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieImageFilter' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMoviesImages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'MovieImageCard_MovieImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MovieImageCard_MovieImage' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieImage' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'type' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMoviesImagesQuery, GetMoviesImagesQueryVariables>;
export const GetMoviesPersonsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMoviesPersons' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MoviePersonSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MoviePersonFilter' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMoviesPersons' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'MoviePersonCard_MoviePerson' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCountry' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Person' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Person' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseCountry' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MoviePersonCard_MoviePerson' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MoviePerson' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'type' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'person' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Person' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMoviesPersonsQuery, GetMoviesPersonsQueryVariables>;
export const CreateMovieReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateMovieReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateMovieReviewInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createMovieReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'MovieReview' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseMovieReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MovieReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseMovieReview' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>;
export const GetMovieReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMovieReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMovieReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'MovieReview' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseMovieReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MovieReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseMovieReview' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMovieReviewQuery, GetMovieReviewQueryVariables>;
export const HasMovieReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HasMovieReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hasMovieReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'movieId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HasMovieReviewQuery, HasMovieReviewQueryVariables>;
export const GetMoviesReviewsOffsetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMoviesReviewsOffset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReviewFilter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReviewSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'withMovie' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          defaultValue: { kind: 'BooleanValue', value: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMoviesReviewsOffset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseMovieReview' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'movie' },
                        directives: [
                          {
                            kind: 'Directive',
                            name: { kind: 'Name', value: 'include' },
                            arguments: [
                              {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'if' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'withMovie' },
                                },
                              },
                            ],
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseMovieReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMoviesReviewsOffsetQuery, GetMoviesReviewsOffsetQueryVariables>;
export const GetMoviesReviewsRelayDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMoviesReviewsRelay' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReviewFilter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReviewSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'before' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'last' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'withMovie' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          defaultValue: { kind: 'BooleanValue', value: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMoviesReviewsRelay' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'before' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'before' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'last' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'last' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'BaseMovieReview' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'movie' },
                              directives: [
                                {
                                  kind: 'Directive',
                                  name: { kind: 'Name', value: 'include' },
                                  arguments: [
                                    {
                                      kind: 'Argument',
                                      name: { kind: 'Name', value: 'if' },
                                      value: {
                                        kind: 'Variable',
                                        name: { kind: 'Name', value: 'withMovie' },
                                      },
                                    },
                                  ],
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'cursor' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseMovieReview' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieReview' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMoviesReviewsRelayQuery, GetMoviesReviewsRelayQueryVariables>;
export const CreateMovieUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateMovieUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateMovieUserInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createMovieUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MovieUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MovieUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieUser' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'isBookmarked' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isWatched' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateMovieUserMutation, CreateMovieUserMutationVariables>;
export const UpdateMovieUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateMovieUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateMovieUserInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateMovieUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'movieId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MovieUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MovieUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieUser' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'isBookmarked' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isWatched' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateMovieUserMutation, UpdateMovieUserMutationVariables>;
export const GetMovieUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMovieUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMovieUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'movieId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MovieUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MovieUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieUser' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'isBookmarked' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isWatched' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMovieUserQuery, GetMovieUserQueryVariables>;
export const GetMoviesUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMoviesUsers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieUserSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieUserFilter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'withMovie' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          defaultValue: { kind: 'BooleanValue', value: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMoviesUsers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'MovieUser' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'movie' },
                        directives: [
                          {
                            kind: 'Directive',
                            name: { kind: 'Name', value: 'include' },
                            arguments: [
                              {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'if' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'withMovie' },
                                },
                              },
                            ],
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'FilmCard_Film' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'SeriesCard_Series' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MovieUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieUser' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'isBookmarked' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isWatched' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMoviesUsersQuery, GetMoviesUsersQueryVariables>;
export const IncreaseMovieVisitsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'IncreaseMovieVisits' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'increaseMovieVisits' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'movieId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IncreaseMovieVisitsMutation, IncreaseMovieVisitsMutationVariables>;
export const GetMovieDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMovie' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMovie' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMovieQuery, GetMovieQueryVariables>;
export const GetRandomMoviesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRandomMovies' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getRandomMovies' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetRandomMoviesQuery, GetRandomMoviesQueryVariables>;
export const GetMostReviewedMoviesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMostReviewedMovies' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMostReviewedMovies' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMostReviewedMoviesQuery, GetMostReviewedMoviesQueryVariables>;
export const GetMostViewedMoviesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMostViewedMovies' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMostViewedMovies' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMostViewedMoviesQuery, GetMostViewedMoviesQueryVariables>;
export const GetMoviesProtectedOffsetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMoviesProtectedOffset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieFilter' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMoviesProtectedOffset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeriesCard_Series' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMoviesProtectedOffsetQuery, GetMoviesProtectedOffsetQueryVariables>;
export const GetMoviesOffsetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMoviesOffset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieFilter' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMoviesOffset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeriesCard_Series' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMoviesOffsetQuery, GetMoviesOffsetQueryVariables>;
export const GetMoviesRelayDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMoviesRelay' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieFilter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'before' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'last' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMoviesRelay' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'before' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'before' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'last' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'last' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'FilmCard_Film' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'SeriesCard_Series' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'cursor' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMoviesRelayQuery, GetMoviesRelayQueryVariables>;
export const GetPlansDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPlans' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getPlans' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Plan' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PlanPrice' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Price' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'interval' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currency' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Plan' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Plan' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'prices' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PlanPrice' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPlansQuery, GetPlansQueryVariables>;
export const GetProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getProduct' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Product' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Price' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Price' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currency' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Product' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'prices' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Price' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;
export const CreatePurchaseSessionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreatePurchaseSession' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'priceId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createPurchaseSession' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'movieId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'priceId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'priceId' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreatePurchaseSessionMutation, CreatePurchaseSessionMutationVariables>;
export const HasPurchaseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HasPurchase' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hasPurchase' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'movieId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HasPurchaseQuery, HasPurchaseQueryVariables>;
export const CreateRoomMovieDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateRoomMovie' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateRoomMovieInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createRoomMovie' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateRoomMovieMutation, CreateRoomMovieMutationVariables>;
export const DeleteRoomMovieDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteRoomMovie' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'roomId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteRoomMovie' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'roomId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'roomId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'movieId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'movieId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseRoomMovie' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteRoomMovieMutation, DeleteRoomMovieMutationVariables>;
export const CreateRoomDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateRoom' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateRoomInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createRoom' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Room' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoom' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Room' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseRoom' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currentMovie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'participants' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateRoomMutation, CreateRoomMutationVariables>;
export const JoinRoomDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JoinRoom' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'inviteToken' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'joinRoom' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'inviteToken' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'inviteToken' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Room' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoom' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Room' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseRoom' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currentMovie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'participants' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JoinRoomMutation, JoinRoomMutationVariables>;
export const LeaveRoomDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LeaveRoom' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leaveRoom' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Room' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoom' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Room' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseRoom' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currentMovie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'participants' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LeaveRoomMutation, LeaveRoomMutationVariables>;
export const GenerateRoomInviteDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'GenerateRoomInvite' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generateRoomInvite' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GenerateRoomInviteMutation, GenerateRoomInviteMutationVariables>;
export const DeleteRoomDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteRoom' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteRoom' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseRoom' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoom' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteRoomMutation, DeleteRoomMutationVariables>;
export const StartRoomPlaybackDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'StartRoomPlayback' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'startRoomPlayback' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StartRoomPlaybackMutation, StartRoomPlaybackMutationVariables>;
export const EndRoomPlaybackDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EndRoomPlayback' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'endRoomPlayback' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EndRoomPlaybackMutation, EndRoomPlaybackMutationVariables>;
export const GetRoomDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRoom' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getRoom' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Room' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoom' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Room' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseRoom' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currentMovie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'participants' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetRoomQuery, GetRoomQueryVariables>;
export const GetRoomsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRooms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomFilter' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getRooms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseRoom' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoom' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetRoomsQuery, GetRoomsQueryVariables>;
export const GetRoomCurrentPlaybackDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRoomCurrentPlayback' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getRoomCurrentPlayback' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetRoomCurrentPlaybackQuery, GetRoomCurrentPlaybackQueryVariables>;
export const RoomPlaybackStartedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'RoomPlaybackStarted' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roomPlaybackStarted' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomMovie' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmBase' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FilmCard_Film' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Film' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmBase' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'movie' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesCard_Series' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'FilmCard_Film' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RoomPlaybackStartedSubscription,
  RoomPlaybackStartedSubscriptionVariables
>;
export const RoomPlaybackEndedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'RoomPlaybackEnded' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roomPlaybackEnded' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseRoomMovie' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoomMovie' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoomMovie' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'roomId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'movieId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'episodeNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showStart' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RoomPlaybackEndedSubscription, RoomPlaybackEndedSubscriptionVariables>;
export const RoomDeletedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'RoomDeleted' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roomDeleted' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseRoom' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseRoom' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RoomDeletedSubscription, RoomDeletedSubscriptionVariables>;
export const GetSeasonsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSeasons' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'SeasonSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'SeasonFilter' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getSeasons' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeasonItem_Season' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeason' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Season' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeries' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Video' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dashManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hlsManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'languageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'file' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Episode' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'releaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeries' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberInSeason' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Video' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeasonItem_Season' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Season' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeason' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'episodes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Episode' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSeasonsQuery, GetSeasonsQueryVariables>;
export const GetManySeriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManySeries' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'SeriesSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'SeriesFilter' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManySeries' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SeriesCard_Series' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesCard_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetManySeriesQuery, GetManySeriesQueryVariables>;
export const GetOneSeriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetOneSeries' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getOneSeries' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SeriesItem_Series' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseSeries' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endReleaseDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'ageRestriction' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesItem_Series' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Series' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseSeries' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studios' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOneSeriesQuery, GetOneSeriesQueryVariables>;
export const GetAllStudiosDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllStudios' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'StudioSort' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'movieType' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'MovieTypeEnum' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAllStudios' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseStudio' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'moviesCount' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'type' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'movieType' } },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseStudio' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Studio' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllStudiosQuery, GetAllStudiosQueryVariables>;
export const GetStudiosDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetStudios' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'StudioFilter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'StudioSort' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getStudios' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseStudio' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseStudio' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Studio' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetStudiosQuery, GetStudiosQueryVariables>;
export const SubscribeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Subscribe' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'priceId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subscribe' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'priceId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'priceId' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SubscribeMutation, SubscribeMutationVariables>;
export const CancelSubscriptionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CancelSubscription' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cancelSubscription' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CancelSubscriptionMutation, CancelSubscriptionMutationVariables>;
export const CreateSubscriptionsManageLinkDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateSubscriptionsManageLink' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'createSubscriptionsManageLink' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateSubscriptionsManageLinkMutation,
  CreateSubscriptionsManageLinkMutationVariables
>;
export const HasActiveSubscriptionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HasActiveSubscription' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'hasActiveSubscription' } }],
      },
    },
  ],
} as unknown as DocumentNode<HasActiveSubscriptionQuery, HasActiveSubscriptionQueryVariables>;
export const UpdatePasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdatePassword' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'oldPassword' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'newPassword' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updatePassword' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'oldPassword' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'oldPassword' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'newPassword' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'newPassword' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'User' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'User' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isEmailConfirmed' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdateMeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateMe' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateUserInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateMe' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'User' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'User' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isEmailConfirmed' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateMeMutation, UpdateMeMutationVariables>;
export const UpdateAvatarDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateAvatar' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Upload' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateAvatar' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'file' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'User' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'User' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isEmailConfirmed' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateAvatarMutation, UpdateAvatarMutationVariables>;
export const GetMeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'User' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'User' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isEmailConfirmed' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const GetUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'User' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'User' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isEmailConfirmed' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUsers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getUsers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseUser' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'totalCount' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseUser' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avatar' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetVideoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetVideo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getVideo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Video' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Video' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Video' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dashManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hlsManifestMedia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'languageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'file' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetVideoQuery, GetVideoQueryVariables>;
