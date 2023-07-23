/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      ...User\n    }\n  }\n}\n\nmutation SignUp($input: RegisterInput!) {\n  register(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      ...User\n    }\n  }\n}\n\nmutation Refresh {\n  refresh {\n    accessToken\n    refreshToken\n  }\n}\n\nmutation Logout {\n  logout\n}':
    types.LoginDocument,
  'mutation AddCollectionMovie($movieId: String!, $collectionId: Int!) {\n  createCollectionMovie(movieId: $movieId, collectionId: $collectionId) {\n    collectionId\n    movie {\n      ...FilmCard_Film\n      ...SeriesCard_Series\n    }\n  }\n}\n\nmutation RemoveCollectionMovie($movieId: String!, $collectionId: Int!) {\n  deleteCollectionMovie(movieId: $movieId, collectionId: $collectionId) {\n    collectionId\n    movieId\n  }\n}':
    types.AddCollectionMovieDocument,
  'fragment CollectionReview on CollectionReview {\n  id\n  text\n  mark\n  createdAt\n  user {\n    ...BaseUser\n  }\n  collectionId\n}':
    types.CollectionReviewFragmentDoc,
  'mutation CreateCollectionReview($input: CreateCollectionReviewInput!) {\n  createCollectionReview(input: $input) {\n    ...CollectionReview\n  }\n}':
    types.CreateCollectionReviewDocument,
  'query GetCollectionReview($id: Int!) {\n  getCollectionReview(id: $id) {\n    ...CollectionReview\n  }\n}\n\nquery HasCollectionReview($collectionId: Int!) {\n  hasCollectionReview(collectionId: $collectionId)\n}\n\nquery GetCollectionsReviewsOffset($filter: CollectionReviewFilter, $sort: CollectionReviewSort, $offset: Int!, $limit: Int!, $withCollection: Boolean = false) {\n  getCollectionsReviewsOffset(\n    filter: $filter\n    sort: $sort\n    offset: $offset\n    limit: $limit\n  ) {\n    nodes {\n      ...CollectionReview\n      collection @include(if: $withCollection) {\n        id\n        name\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetCollectionsReviewsRelay($filter: CollectionReviewFilter, $sort: CollectionReviewSort, $before: String, $last: Int, $after: String, $first: Int) {\n  getCollectionsReviewsRelay(\n    filter: $filter\n    sort: $sort\n    before: $before\n    last: $last\n    first: $first\n    after: $after\n  ) {\n    edges {\n      node {\n        ...CollectionReview\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n      hasNextPage\n    }\n  }\n}':
    types.GetCollectionReviewDocument,
  'fragment CollectionUser on CollectionUser {\n  isBookmarked\n  isWatched\n  collectionId\n  userId\n}':
    types.CollectionUserFragmentDoc,
  'mutation CreateCollectionUser($input: CreateCollectionUserInput!) {\n  createCollectionUser(input: $input) {\n    ...CollectionUser\n  }\n}\n\nmutation UpdateCollectionUser($userId: String!, $collectionId: Int!, $input: UpdateCollectionUserInput!) {\n  updateCollectionUser(\n    userId: $userId\n    collectionId: $collectionId\n    input: $input\n  ) {\n    ...CollectionUser\n  }\n}':
    types.CreateCollectionUserDocument,
  'query GetCollectionUser($userId: String!, $collectionId: Int!) {\n  getCollectionUser(userId: $userId, collectionId: $collectionId) {\n    ...CollectionUser\n  }\n}':
    types.GetCollectionUserDocument,
  'fragment BaseCollection on Collection {\n  id\n  name\n  isSystem\n  ownerId\n  description\n  createdAt\n  rating\n}\n\nfragment CollectionCard_Collection on Collection {\n  ...BaseCollection\n  owner {\n    ...BaseUser\n  }\n  cover {\n    url\n  }\n}\n\nfragment CollectionItem_Collection on Collection {\n  ...BaseCollection\n  cover {\n    id\n    url\n  }\n  owner {\n    ...BaseUser\n  }\n  movies {\n    ...SeriesCard_Series\n    ...FilmCard_Film\n  }\n}':
    types.BaseCollectionFragmentDoc,
  'mutation CreateCollection($input: CreateCollectionInput!) {\n  createCollection(input: $input) {\n    ...CollectionCard_Collection\n  }\n}\n\nmutation UpdateCollection($id: Int!, $input: UpdateCollectionInput!) {\n  updateCollection(id: $id, input: $input) {\n    ...CollectionItem_Collection\n  }\n}\n\nmutation DeleteCollection($id: Int!) {\n  deleteCollection(id: $id) {\n    id\n  }\n}':
    types.CreateCollectionDocument,
  'query GetCollections($limit: Int!, $offset: Int!, $filter: CollectionFilter, $sort: CollectionSort) {\n  getCollections(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      ...CollectionCard_Collection\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetCollection($id: Int!) {\n  getCollection(id: $id) {\n    ...CollectionItem_Collection\n  }\n}':
    types.GetCollectionsDocument,
  'fragment BaseCountry on Country {\n  id\n  name\n}\n\nfragment CountryFragment on Country {\n  ...BaseCountry\n  language {\n    id\n    name\n  }\n  currency {\n    id\n    name\n    symbol\n  }\n}':
    types.BaseCountryFragmentDoc,
  'query GetAllCountries($sort: CountrySort, $movieType: MovieTypeEnum) {\n  getAllCountries(sort: $sort) {\n    ...BaseCountry\n    moviesCount(type: $movieType)\n  }\n}\n\nquery GetCountries($limit: Int!, $offset: Int!, $filter: CountryFilter, $sort: CountrySort) {\n  getCountries(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      ...BaseCountry\n    }\n  }\n}':
    types.GetAllCountriesDocument,
  'mutation ConfirmEmail($token: String!) {\n  confirmEmail(token: $token)\n}\n\nmutation SendEmailConfirmation {\n  sendConfirmation\n}':
    types.ConfirmEmailDocument,
  'fragment Episode on Episode {\n  id\n  title\n  description\n  releaseDate\n  ageRestriction\n  numberInSeries\n  numberInSeason\n  cover {\n    url\n  }\n  video {\n    ...Video\n  }\n}':
    types.EpisodeFragmentDoc,
  'query GetEpisodeBySeriesAndNum($seriesId: String!, $numberInSeries: Int!) {\n  getEpisodeBySeriesAndNum(seriesId: $seriesId, numInSeries: $numberInSeries) {\n    ...Episode\n  }\n}':
    types.GetEpisodeBySeriesAndNumDocument,
  'fragment FilmBase on Film {\n  id\n  title\n  description\n  releaseDate\n  ageRestriction\n  rating\n}\n\nfragment FilmCard_Film on Film {\n  ...FilmBase\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n}\n\nfragment FilmItem_Film on Film {\n  ...FilmBase\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n  productId\n  video {\n    ...Video\n  }\n}':
    types.FilmBaseFragmentDoc,
  'query GetFilms($limit: Int!, $offset: Int!, $sort: FilmSort, $filter: FilmFilter) {\n  getFilms(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...FilmCard_Film\n    }\n    pageInfo {\n      totalCount\n      hasNextPage\n    }\n  }\n}\n\nquery GetFilm($id: String!) {\n  getFilm(id: $id) {\n    ...FilmItem_Film\n  }\n}':
    types.GetFilmsDocument,
  'query GetAllGenres($sort: GenreSort, $movieType: MovieTypeEnum) {\n  getAllGenres(sort: $sort) {\n    id\n    name\n    moviesCount(type: $movieType)\n  }\n}\n\nquery GetGenres($limit: Int!, $offset: Int!, $filter: GenreFilter, $sort: GenreSort) {\n  getGenres(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      id\n      name\n    }\n  }\n}':
    types.GetAllGenresDocument,
  'mutation UploadImage($file: Upload!) {\n  uploadImage(file: $file) {\n    id\n    url\n    type\n  }\n}':
    types.UploadImageDocument,
  'fragment MovieImageCard_MovieImage on MovieImage {\n  id\n  type {\n    id\n    name\n  }\n  image {\n    url\n  }\n}':
    types.MovieImageCard_MovieImageFragmentDoc,
  'query GetMoviesImages($limit: Int!, $offset: Int!, $sort: MovieImageSort, $filter: MovieImageFilter) {\n  getMoviesImages(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...MovieImageCard_MovieImage\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}':
    types.GetMoviesImagesDocument,
  'fragment MoviePersonCard_MoviePerson on MoviePerson {\n  id\n  type {\n    id\n    name\n  }\n  role\n  person {\n    ...Person\n  }\n}':
    types.MoviePersonCard_MoviePersonFragmentDoc,
  'query GetMoviesPersons($limit: Int!, $offset: Int!, $sort: MoviePersonSort, $filter: MoviePersonFilter) {\n  getMoviesPersons(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...MoviePersonCard_MoviePerson\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}':
    types.GetMoviesPersonsDocument,
  'fragment BaseMovieReview on MovieReview {\n  id\n  text\n  mark\n  createdAt\n  user {\n    ...BaseUser\n  }\n}\n\nfragment MovieReview on MovieReview {\n  ...BaseMovieReview\n  movie {\n    id\n    title\n  }\n}':
    types.BaseMovieReviewFragmentDoc,
  'mutation CreateMovieReview($input: CreateMovieReviewInput!) {\n  createMovieReview(input: $input) {\n    ...MovieReview\n  }\n}':
    types.CreateMovieReviewDocument,
  'query GetMovieReview($id: Int!) {\n  getMovieReview(id: $id) {\n    ...MovieReview\n  }\n}\n\nquery HasMovieReview($movieId: String!) {\n  hasMovieReview(movieId: $movieId)\n}\n\nquery GetMoviesReviewsOffset($filter: MovieReviewFilter, $sort: MovieReviewSort, $offset: Int!, $limit: Int!, $withMovie: Boolean = false) {\n  getMoviesReviewsOffset(\n    filter: $filter\n    sort: $sort\n    offset: $offset\n    limit: $limit\n  ) {\n    nodes {\n      ...BaseMovieReview\n      movie @include(if: $withMovie) {\n        id\n        title\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetMoviesReviewsRelay($filter: MovieReviewFilter, $sort: MovieReviewSort, $before: String, $last: Int, $after: String, $first: Int, $withMovie: Boolean = false) {\n  getMoviesReviewsRelay(\n    filter: $filter\n    sort: $sort\n    before: $before\n    last: $last\n    first: $first\n    after: $after\n  ) {\n    edges {\n      node {\n        ...BaseMovieReview\n        movie @include(if: $withMovie) {\n          id\n          title\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n      hasNextPage\n    }\n  }\n}':
    types.GetMovieReviewDocument,
  'fragment MovieUser on MovieUser {\n  isBookmarked\n  isWatched\n  movieId\n  userId\n}':
    types.MovieUserFragmentDoc,
  'mutation CreateMovieUser($input: CreateMovieUserInput!) {\n  createMovieUser(input: $input) {\n    ...MovieUser\n  }\n}\n\nmutation UpdateMovieUser($userId: String!, $movieId: String!, $input: UpdateMovieUserInput!) {\n  updateMovieUser(userId: $userId, movieId: $movieId, input: $input) {\n    ...MovieUser\n  }\n}':
    types.CreateMovieUserDocument,
  'query GetMovieUser($userId: String!, $movieId: String!) {\n  getMovieUser(userId: $userId, movieId: $movieId) {\n    ...MovieUser\n  }\n}\n\nquery GetMoviesUsers($limit: Int!, $offset: Int!, $sort: MovieUserSort, $filter: MovieUserFilter, $withMovie: Boolean = false) {\n  getMoviesUsers(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...MovieUser\n      movie @include(if: $withMovie) {\n        ...FilmCard_Film\n        ...SeriesCard_Series\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}':
    types.GetMovieUserDocument,
  'mutation IncreaseMovieVisits($movieId: String!) {\n  increaseMovieVisits(movieId: $movieId)\n}':
    types.IncreaseMovieVisitsDocument,
  'fragment Movie on Movie {\n  ...FilmCard_Film\n  ...SeriesCard_Series\n}':
    types.MovieFragmentDoc,
  'query GetMovie($id: String!) {\n  getMovie(id: $id) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetRandomMovies($limit: Int!, $offset: Int!) {\n  getRandomMovies(limit: $limit, offset: $offset) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetMostReviewedMovies($limit: Int!, $offset: Int!) {\n  getMostReviewedMovies(limit: $limit, offset: $offset) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetMostViewedMovies($limit: Int!, $offset: Int!) {\n  getMostViewedMovies(limit: $limit, offset: $offset) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetMoviesProtectedOffset($limit: Int!, $offset: Int!, $sort: MovieSort, $filter: MovieFilter) {\n  getMoviesProtectedOffset(\n    limit: $limit\n    offset: $offset\n    sort: $sort\n    filter: $filter\n  ) {\n    nodes {\n      ...FilmCard_Film\n      ...SeriesCard_Series\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetMoviesOffset($limit: Int!, $offset: Int!, $sort: MovieSort, $filter: MovieFilter) {\n  getMoviesOffset(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...FilmCard_Film\n      ...SeriesCard_Series\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetMoviesRelay($sort: MovieSort, $filter: MovieFilter, $before: String, $last: Int, $after: String, $first: Int) {\n  getMoviesRelay(\n    sort: $sort\n    filter: $filter\n    before: $before\n    last: $last\n    first: $first\n    after: $after\n  ) {\n    edges {\n      node {\n        ...FilmCard_Film\n        ...SeriesCard_Series\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n      hasNextPage\n      endCursor\n    }\n  }\n}':
    types.GetMovieDocument,
  'fragment Person on Person {\n  id\n  name\n  image {\n    url\n  }\n  country {\n    ...BaseCountry\n  }\n}':
    types.PersonFragmentDoc,
  'fragment Plan on Plan {\n  id\n  name\n  prices {\n    ...PlanPrice\n  }\n}':
    types.PlanFragmentDoc,
  'query GetPlans {\n  getPlans {\n    ...Plan\n  }\n}': types.GetPlansDocument,
  'fragment BasePrice on Price {\n  id\n  amount\n  currencyId\n}\n\nfragment PlanPrice on Price {\n  id\n  amount\n  interval\n  currency {\n    id\n    name\n    symbol\n  }\n}\n\nfragment Price on Price {\n  id\n  amount\n  currency {\n    id\n    name\n    symbol\n  }\n}':
    types.BasePriceFragmentDoc,
  'fragment Product on Product {\n  id\n  movieId\n  prices {\n    ...Price\n  }\n}':
    types.ProductFragmentDoc,
  'query GetProduct($id: String!) {\n  getProduct(id: $id) {\n    ...Product\n  }\n}':
    types.GetProductDocument,
  'mutation CreatePurchaseSession($movieId: String!, $priceId: String!) {\n  createPurchaseSession(movieId: $movieId, priceId: $priceId)\n}':
    types.CreatePurchaseSessionDocument,
  'query HasPurchase($movieId: String!) {\n  hasPurchase(movieId: $movieId)\n}':
    types.HasPurchaseDocument,
  'fragment BaseRoomMovie on RoomMovie {\n  roomId\n  movieId\n  episodeNumber\n  order\n  showStart\n}\n\nfragment RoomMovie on RoomMovie {\n  roomId\n  movie {\n    ...SeriesCard_Series\n    ...FilmCard_Film\n  }\n  episodeNumber\n  showStart\n  order\n}':
    types.BaseRoomMovieFragmentDoc,
  'mutation CreateRoomMovie($input: CreateRoomMovieInput!) {\n  createRoomMovie(input: $input) {\n    ...RoomMovie\n  }\n}\n\nmutation DeleteRoomMovie($roomId: String!, $movieId: String!) {\n  deleteRoomMovie(roomId: $roomId, movieId: $movieId) {\n    ...BaseRoomMovie\n  }\n}':
    types.CreateRoomMovieDocument,
  'fragment BaseRoom on Room {\n  id\n  name\n  owner {\n    ...BaseUser\n  }\n}\n\nfragment Room on Room {\n  ...BaseRoom\n  currentMovie {\n    ...RoomMovie\n  }\n  participants {\n    ...BaseUser\n  }\n  movies {\n    ...RoomMovie\n  }\n}':
    types.BaseRoomFragmentDoc,
  'mutation CreateRoom($input: CreateRoomInput!) {\n  createRoom(input: $input) {\n    ...Room\n  }\n}\n\nmutation JoinRoom($inviteToken: String!) {\n  joinRoom(inviteToken: $inviteToken) {\n    ...Room\n  }\n}\n\nmutation LeaveRoom($id: String!) {\n  leaveRoom(id: $id) {\n    ...Room\n  }\n}\n\nmutation GenerateRoomInvite($id: String!) {\n  generateRoomInvite(id: $id)\n}\n\nmutation DeleteRoom($id: String!) {\n  deleteRoom(id: $id) {\n    ...BaseRoom\n  }\n}\n\nmutation StartRoomPlayback($id: String!) {\n  startRoomPlayback(id: $id)\n}\n\nmutation EndRoomPlayback($id: String!) {\n  endRoomPlayback(id: $id)\n}':
    types.CreateRoomDocument,
  'query GetRoom($id: String!) {\n  getRoom(id: $id) {\n    ...Room\n  }\n}\n\nquery GetRooms($limit: Int!, $offset: Int!, $sort: RoomSort, $filter: RoomFilter) {\n  getRooms(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...BaseRoom\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetRoomCurrentPlayback($id: String!) {\n  getRoomCurrentPlayback(id: $id)\n}':
    types.GetRoomDocument,
  'subscription RoomPlaybackStarted($id: String!) {\n  roomPlaybackStarted(id: $id) {\n    ...RoomMovie\n  }\n}\n\nsubscription RoomPlaybackEnded($id: String!) {\n  roomPlaybackEnded(id: $id) {\n    ...BaseRoomMovie\n  }\n}\n\nsubscription RoomDeleted($id: String!) {\n  roomDeleted(id: $id) {\n    ...BaseRoom\n  }\n}':
    types.RoomPlaybackStartedDocument,
  'fragment BaseSeason on Season {\n  id\n  title\n  startReleaseDate\n  endReleaseDate\n  numberInSeries\n}\n\nfragment SeasonItem_Season on Season {\n  ...BaseSeason\n  episodes {\n    ...Episode\n  }\n}':
    types.BaseSeasonFragmentDoc,
  'query GetSeasons($limit: Int!, $offset: Int!, $sort: SeasonSort, $filter: SeasonFilter) {\n  getSeasons(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...SeasonItem_Season\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}':
    types.GetSeasonsDocument,
  'fragment BaseSeries on Series {\n  id\n  title\n  description\n  startReleaseDate\n  endReleaseDate\n  ageRestriction\n  rating\n}\n\nfragment SeriesCard_Series on Series {\n  ...BaseSeries\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n}\n\nfragment SeriesItem_Series on Series {\n  ...BaseSeries\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n  productId\n}':
    types.BaseSeriesFragmentDoc,
  'query GetManySeries($limit: Int!, $offset: Int!, $sort: SeriesSort, $filter: SeriesFilter) {\n  getManySeries(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...SeriesCard_Series\n    }\n    pageInfo {\n      totalCount\n      hasNextPage\n    }\n  }\n}\n\nquery GetOneSeries($id: String!) {\n  getOneSeries(id: $id) {\n    ...SeriesItem_Series\n  }\n}':
    types.GetManySeriesDocument,
  'fragment BaseStudio on Studio {\n  id\n  name\n}\n\nfragment Studio on Studio {\n  ...BaseStudio\n  countries {\n    ...BaseCountry\n  }\n}':
    types.BaseStudioFragmentDoc,
  'query GetAllStudios($sort: StudioSort, $movieType: MovieTypeEnum) {\n  getAllStudios(sort: $sort) {\n    ...BaseStudio\n    moviesCount(type: $movieType)\n  }\n}\n\nquery GetStudios($limit: Int!, $offset: Int!, $filter: StudioFilter, $sort: StudioSort) {\n  getStudios(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      ...BaseStudio\n    }\n  }\n}':
    types.GetAllStudiosDocument,
  'mutation Subscribe($priceId: String!) {\n  subscribe(priceId: $priceId)\n}\n\nmutation CancelSubscription($id: String!) {\n  cancelSubscription(id: $id)\n}\n\nmutation CreateSubscriptionsManageLink {\n  createSubscriptionsManageLink\n}':
    types.SubscribeDocument,
  'query HasActiveSubscription {\n  hasActiveSubscription\n}':
    types.HasActiveSubscriptionDocument,
  'fragment BaseUser on User {\n  id\n  name\n  avatar {\n    url\n  }\n}\n\nfragment User on User {\n  ...BaseUser\n  email\n  createdAt\n  country {\n    id\n    name\n  }\n  role\n  isEmailConfirmed\n}':
    types.BaseUserFragmentDoc,
  'mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {\n  updatePassword(oldPassword: $oldPassword, newPassword: $newPassword) {\n    ...User\n  }\n}\n\nmutation UpdateMe($input: UpdateUserInput!) {\n  updateMe(input: $input) {\n    ...User\n  }\n}\n\nmutation UpdateAvatar($file: Upload!) {\n  updateAvatar(file: $file) {\n    ...User\n  }\n}':
    types.UpdatePasswordDocument,
  'query GetMe {\n  getMe {\n    ...User\n  }\n}\n\nquery GetUser($id: String!) {\n  getUser(id: $id) {\n    ...User\n  }\n}\n\nquery GetUsers {\n  getUsers {\n    nodes {\n      ...BaseUser\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}':
    types.GetMeDocument,
  'fragment Video on Video {\n  dashManifestMedia {\n    url\n  }\n  hlsManifestMedia {\n    url\n  }\n  subtitles {\n    languageId\n    file {\n      url\n    }\n  }\n}':
    types.VideoFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      ...User\n    }\n  }\n}\n\nmutation SignUp($input: RegisterInput!) {\n  register(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      ...User\n    }\n  }\n}\n\nmutation Refresh {\n  refresh {\n    accessToken\n    refreshToken\n  }\n}\n\nmutation Logout {\n  logout\n}',
): (typeof documents)['mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      ...User\n    }\n  }\n}\n\nmutation SignUp($input: RegisterInput!) {\n  register(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      ...User\n    }\n  }\n}\n\nmutation Refresh {\n  refresh {\n    accessToken\n    refreshToken\n  }\n}\n\nmutation Logout {\n  logout\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation AddCollectionMovie($movieId: String!, $collectionId: Int!) {\n  createCollectionMovie(movieId: $movieId, collectionId: $collectionId) {\n    collectionId\n    movie {\n      ...FilmCard_Film\n      ...SeriesCard_Series\n    }\n  }\n}\n\nmutation RemoveCollectionMovie($movieId: String!, $collectionId: Int!) {\n  deleteCollectionMovie(movieId: $movieId, collectionId: $collectionId) {\n    collectionId\n    movieId\n  }\n}',
): (typeof documents)['mutation AddCollectionMovie($movieId: String!, $collectionId: Int!) {\n  createCollectionMovie(movieId: $movieId, collectionId: $collectionId) {\n    collectionId\n    movie {\n      ...FilmCard_Film\n      ...SeriesCard_Series\n    }\n  }\n}\n\nmutation RemoveCollectionMovie($movieId: String!, $collectionId: Int!) {\n  deleteCollectionMovie(movieId: $movieId, collectionId: $collectionId) {\n    collectionId\n    movieId\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment CollectionReview on CollectionReview {\n  id\n  text\n  mark\n  createdAt\n  user {\n    ...BaseUser\n  }\n  collectionId\n}',
): (typeof documents)['fragment CollectionReview on CollectionReview {\n  id\n  text\n  mark\n  createdAt\n  user {\n    ...BaseUser\n  }\n  collectionId\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateCollectionReview($input: CreateCollectionReviewInput!) {\n  createCollectionReview(input: $input) {\n    ...CollectionReview\n  }\n}',
): (typeof documents)['mutation CreateCollectionReview($input: CreateCollectionReviewInput!) {\n  createCollectionReview(input: $input) {\n    ...CollectionReview\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetCollectionReview($id: Int!) {\n  getCollectionReview(id: $id) {\n    ...CollectionReview\n  }\n}\n\nquery HasCollectionReview($collectionId: Int!) {\n  hasCollectionReview(collectionId: $collectionId)\n}\n\nquery GetCollectionsReviewsOffset($filter: CollectionReviewFilter, $sort: CollectionReviewSort, $offset: Int!, $limit: Int!, $withCollection: Boolean = false) {\n  getCollectionsReviewsOffset(\n    filter: $filter\n    sort: $sort\n    offset: $offset\n    limit: $limit\n  ) {\n    nodes {\n      ...CollectionReview\n      collection @include(if: $withCollection) {\n        id\n        name\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetCollectionsReviewsRelay($filter: CollectionReviewFilter, $sort: CollectionReviewSort, $before: String, $last: Int, $after: String, $first: Int) {\n  getCollectionsReviewsRelay(\n    filter: $filter\n    sort: $sort\n    before: $before\n    last: $last\n    first: $first\n    after: $after\n  ) {\n    edges {\n      node {\n        ...CollectionReview\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n      hasNextPage\n    }\n  }\n}',
): (typeof documents)['query GetCollectionReview($id: Int!) {\n  getCollectionReview(id: $id) {\n    ...CollectionReview\n  }\n}\n\nquery HasCollectionReview($collectionId: Int!) {\n  hasCollectionReview(collectionId: $collectionId)\n}\n\nquery GetCollectionsReviewsOffset($filter: CollectionReviewFilter, $sort: CollectionReviewSort, $offset: Int!, $limit: Int!, $withCollection: Boolean = false) {\n  getCollectionsReviewsOffset(\n    filter: $filter\n    sort: $sort\n    offset: $offset\n    limit: $limit\n  ) {\n    nodes {\n      ...CollectionReview\n      collection @include(if: $withCollection) {\n        id\n        name\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetCollectionsReviewsRelay($filter: CollectionReviewFilter, $sort: CollectionReviewSort, $before: String, $last: Int, $after: String, $first: Int) {\n  getCollectionsReviewsRelay(\n    filter: $filter\n    sort: $sort\n    before: $before\n    last: $last\n    first: $first\n    after: $after\n  ) {\n    edges {\n      node {\n        ...CollectionReview\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n      hasNextPage\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment CollectionUser on CollectionUser {\n  isBookmarked\n  isWatched\n  collectionId\n  userId\n}',
): (typeof documents)['fragment CollectionUser on CollectionUser {\n  isBookmarked\n  isWatched\n  collectionId\n  userId\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateCollectionUser($input: CreateCollectionUserInput!) {\n  createCollectionUser(input: $input) {\n    ...CollectionUser\n  }\n}\n\nmutation UpdateCollectionUser($userId: String!, $collectionId: Int!, $input: UpdateCollectionUserInput!) {\n  updateCollectionUser(\n    userId: $userId\n    collectionId: $collectionId\n    input: $input\n  ) {\n    ...CollectionUser\n  }\n}',
): (typeof documents)['mutation CreateCollectionUser($input: CreateCollectionUserInput!) {\n  createCollectionUser(input: $input) {\n    ...CollectionUser\n  }\n}\n\nmutation UpdateCollectionUser($userId: String!, $collectionId: Int!, $input: UpdateCollectionUserInput!) {\n  updateCollectionUser(\n    userId: $userId\n    collectionId: $collectionId\n    input: $input\n  ) {\n    ...CollectionUser\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetCollectionUser($userId: String!, $collectionId: Int!) {\n  getCollectionUser(userId: $userId, collectionId: $collectionId) {\n    ...CollectionUser\n  }\n}',
): (typeof documents)['query GetCollectionUser($userId: String!, $collectionId: Int!) {\n  getCollectionUser(userId: $userId, collectionId: $collectionId) {\n    ...CollectionUser\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment BaseCollection on Collection {\n  id\n  name\n  isSystem\n  ownerId\n  description\n  createdAt\n  rating\n}\n\nfragment CollectionCard_Collection on Collection {\n  ...BaseCollection\n  owner {\n    ...BaseUser\n  }\n  cover {\n    url\n  }\n}\n\nfragment CollectionItem_Collection on Collection {\n  ...BaseCollection\n  cover {\n    id\n    url\n  }\n  owner {\n    ...BaseUser\n  }\n  movies {\n    ...SeriesCard_Series\n    ...FilmCard_Film\n  }\n}',
): (typeof documents)['fragment BaseCollection on Collection {\n  id\n  name\n  isSystem\n  ownerId\n  description\n  createdAt\n  rating\n}\n\nfragment CollectionCard_Collection on Collection {\n  ...BaseCollection\n  owner {\n    ...BaseUser\n  }\n  cover {\n    url\n  }\n}\n\nfragment CollectionItem_Collection on Collection {\n  ...BaseCollection\n  cover {\n    id\n    url\n  }\n  owner {\n    ...BaseUser\n  }\n  movies {\n    ...SeriesCard_Series\n    ...FilmCard_Film\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateCollection($input: CreateCollectionInput!) {\n  createCollection(input: $input) {\n    ...CollectionCard_Collection\n  }\n}\n\nmutation UpdateCollection($id: Int!, $input: UpdateCollectionInput!) {\n  updateCollection(id: $id, input: $input) {\n    ...CollectionItem_Collection\n  }\n}\n\nmutation DeleteCollection($id: Int!) {\n  deleteCollection(id: $id) {\n    id\n  }\n}',
): (typeof documents)['mutation CreateCollection($input: CreateCollectionInput!) {\n  createCollection(input: $input) {\n    ...CollectionCard_Collection\n  }\n}\n\nmutation UpdateCollection($id: Int!, $input: UpdateCollectionInput!) {\n  updateCollection(id: $id, input: $input) {\n    ...CollectionItem_Collection\n  }\n}\n\nmutation DeleteCollection($id: Int!) {\n  deleteCollection(id: $id) {\n    id\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetCollections($limit: Int!, $offset: Int!, $filter: CollectionFilter, $sort: CollectionSort) {\n  getCollections(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      ...CollectionCard_Collection\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetCollection($id: Int!) {\n  getCollection(id: $id) {\n    ...CollectionItem_Collection\n  }\n}',
): (typeof documents)['query GetCollections($limit: Int!, $offset: Int!, $filter: CollectionFilter, $sort: CollectionSort) {\n  getCollections(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      ...CollectionCard_Collection\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetCollection($id: Int!) {\n  getCollection(id: $id) {\n    ...CollectionItem_Collection\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment BaseCountry on Country {\n  id\n  name\n}\n\nfragment CountryFragment on Country {\n  ...BaseCountry\n  language {\n    id\n    name\n  }\n  currency {\n    id\n    name\n    symbol\n  }\n}',
): (typeof documents)['fragment BaseCountry on Country {\n  id\n  name\n}\n\nfragment CountryFragment on Country {\n  ...BaseCountry\n  language {\n    id\n    name\n  }\n  currency {\n    id\n    name\n    symbol\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetAllCountries($sort: CountrySort, $movieType: MovieTypeEnum) {\n  getAllCountries(sort: $sort) {\n    ...BaseCountry\n    moviesCount(type: $movieType)\n  }\n}\n\nquery GetCountries($limit: Int!, $offset: Int!, $filter: CountryFilter, $sort: CountrySort) {\n  getCountries(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      ...BaseCountry\n    }\n  }\n}',
): (typeof documents)['query GetAllCountries($sort: CountrySort, $movieType: MovieTypeEnum) {\n  getAllCountries(sort: $sort) {\n    ...BaseCountry\n    moviesCount(type: $movieType)\n  }\n}\n\nquery GetCountries($limit: Int!, $offset: Int!, $filter: CountryFilter, $sort: CountrySort) {\n  getCountries(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      ...BaseCountry\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation ConfirmEmail($token: String!) {\n  confirmEmail(token: $token)\n}\n\nmutation SendEmailConfirmation {\n  sendConfirmation\n}',
): (typeof documents)['mutation ConfirmEmail($token: String!) {\n  confirmEmail(token: $token)\n}\n\nmutation SendEmailConfirmation {\n  sendConfirmation\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Episode on Episode {\n  id\n  title\n  description\n  releaseDate\n  ageRestriction\n  numberInSeries\n  numberInSeason\n  cover {\n    url\n  }\n  video {\n    ...Video\n  }\n}',
): (typeof documents)['fragment Episode on Episode {\n  id\n  title\n  description\n  releaseDate\n  ageRestriction\n  numberInSeries\n  numberInSeason\n  cover {\n    url\n  }\n  video {\n    ...Video\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetEpisodeBySeriesAndNum($seriesId: String!, $numberInSeries: Int!) {\n  getEpisodeBySeriesAndNum(seriesId: $seriesId, numInSeries: $numberInSeries) {\n    ...Episode\n  }\n}',
): (typeof documents)['query GetEpisodeBySeriesAndNum($seriesId: String!, $numberInSeries: Int!) {\n  getEpisodeBySeriesAndNum(seriesId: $seriesId, numInSeries: $numberInSeries) {\n    ...Episode\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment FilmBase on Film {\n  id\n  title\n  description\n  releaseDate\n  ageRestriction\n  rating\n}\n\nfragment FilmCard_Film on Film {\n  ...FilmBase\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n}\n\nfragment FilmItem_Film on Film {\n  ...FilmBase\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n  productId\n  video {\n    ...Video\n  }\n}',
): (typeof documents)['fragment FilmBase on Film {\n  id\n  title\n  description\n  releaseDate\n  ageRestriction\n  rating\n}\n\nfragment FilmCard_Film on Film {\n  ...FilmBase\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n}\n\nfragment FilmItem_Film on Film {\n  ...FilmBase\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n  productId\n  video {\n    ...Video\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetFilms($limit: Int!, $offset: Int!, $sort: FilmSort, $filter: FilmFilter) {\n  getFilms(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...FilmCard_Film\n    }\n    pageInfo {\n      totalCount\n      hasNextPage\n    }\n  }\n}\n\nquery GetFilm($id: String!) {\n  getFilm(id: $id) {\n    ...FilmItem_Film\n  }\n}',
): (typeof documents)['query GetFilms($limit: Int!, $offset: Int!, $sort: FilmSort, $filter: FilmFilter) {\n  getFilms(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...FilmCard_Film\n    }\n    pageInfo {\n      totalCount\n      hasNextPage\n    }\n  }\n}\n\nquery GetFilm($id: String!) {\n  getFilm(id: $id) {\n    ...FilmItem_Film\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetAllGenres($sort: GenreSort, $movieType: MovieTypeEnum) {\n  getAllGenres(sort: $sort) {\n    id\n    name\n    moviesCount(type: $movieType)\n  }\n}\n\nquery GetGenres($limit: Int!, $offset: Int!, $filter: GenreFilter, $sort: GenreSort) {\n  getGenres(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      id\n      name\n    }\n  }\n}',
): (typeof documents)['query GetAllGenres($sort: GenreSort, $movieType: MovieTypeEnum) {\n  getAllGenres(sort: $sort) {\n    id\n    name\n    moviesCount(type: $movieType)\n  }\n}\n\nquery GetGenres($limit: Int!, $offset: Int!, $filter: GenreFilter, $sort: GenreSort) {\n  getGenres(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      id\n      name\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation UploadImage($file: Upload!) {\n  uploadImage(file: $file) {\n    id\n    url\n    type\n  }\n}',
): (typeof documents)['mutation UploadImage($file: Upload!) {\n  uploadImage(file: $file) {\n    id\n    url\n    type\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment MovieImageCard_MovieImage on MovieImage {\n  id\n  type {\n    id\n    name\n  }\n  image {\n    url\n  }\n}',
): (typeof documents)['fragment MovieImageCard_MovieImage on MovieImage {\n  id\n  type {\n    id\n    name\n  }\n  image {\n    url\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetMoviesImages($limit: Int!, $offset: Int!, $sort: MovieImageSort, $filter: MovieImageFilter) {\n  getMoviesImages(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...MovieImageCard_MovieImage\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}',
): (typeof documents)['query GetMoviesImages($limit: Int!, $offset: Int!, $sort: MovieImageSort, $filter: MovieImageFilter) {\n  getMoviesImages(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...MovieImageCard_MovieImage\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment MoviePersonCard_MoviePerson on MoviePerson {\n  id\n  type {\n    id\n    name\n  }\n  role\n  person {\n    ...Person\n  }\n}',
): (typeof documents)['fragment MoviePersonCard_MoviePerson on MoviePerson {\n  id\n  type {\n    id\n    name\n  }\n  role\n  person {\n    ...Person\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetMoviesPersons($limit: Int!, $offset: Int!, $sort: MoviePersonSort, $filter: MoviePersonFilter) {\n  getMoviesPersons(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...MoviePersonCard_MoviePerson\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}',
): (typeof documents)['query GetMoviesPersons($limit: Int!, $offset: Int!, $sort: MoviePersonSort, $filter: MoviePersonFilter) {\n  getMoviesPersons(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...MoviePersonCard_MoviePerson\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment BaseMovieReview on MovieReview {\n  id\n  text\n  mark\n  createdAt\n  user {\n    ...BaseUser\n  }\n}\n\nfragment MovieReview on MovieReview {\n  ...BaseMovieReview\n  movie {\n    id\n    title\n  }\n}',
): (typeof documents)['fragment BaseMovieReview on MovieReview {\n  id\n  text\n  mark\n  createdAt\n  user {\n    ...BaseUser\n  }\n}\n\nfragment MovieReview on MovieReview {\n  ...BaseMovieReview\n  movie {\n    id\n    title\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateMovieReview($input: CreateMovieReviewInput!) {\n  createMovieReview(input: $input) {\n    ...MovieReview\n  }\n}',
): (typeof documents)['mutation CreateMovieReview($input: CreateMovieReviewInput!) {\n  createMovieReview(input: $input) {\n    ...MovieReview\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetMovieReview($id: Int!) {\n  getMovieReview(id: $id) {\n    ...MovieReview\n  }\n}\n\nquery HasMovieReview($movieId: String!) {\n  hasMovieReview(movieId: $movieId)\n}\n\nquery GetMoviesReviewsOffset($filter: MovieReviewFilter, $sort: MovieReviewSort, $offset: Int!, $limit: Int!, $withMovie: Boolean = false) {\n  getMoviesReviewsOffset(\n    filter: $filter\n    sort: $sort\n    offset: $offset\n    limit: $limit\n  ) {\n    nodes {\n      ...BaseMovieReview\n      movie @include(if: $withMovie) {\n        id\n        title\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetMoviesReviewsRelay($filter: MovieReviewFilter, $sort: MovieReviewSort, $before: String, $last: Int, $after: String, $first: Int, $withMovie: Boolean = false) {\n  getMoviesReviewsRelay(\n    filter: $filter\n    sort: $sort\n    before: $before\n    last: $last\n    first: $first\n    after: $after\n  ) {\n    edges {\n      node {\n        ...BaseMovieReview\n        movie @include(if: $withMovie) {\n          id\n          title\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n      hasNextPage\n    }\n  }\n}',
): (typeof documents)['query GetMovieReview($id: Int!) {\n  getMovieReview(id: $id) {\n    ...MovieReview\n  }\n}\n\nquery HasMovieReview($movieId: String!) {\n  hasMovieReview(movieId: $movieId)\n}\n\nquery GetMoviesReviewsOffset($filter: MovieReviewFilter, $sort: MovieReviewSort, $offset: Int!, $limit: Int!, $withMovie: Boolean = false) {\n  getMoviesReviewsOffset(\n    filter: $filter\n    sort: $sort\n    offset: $offset\n    limit: $limit\n  ) {\n    nodes {\n      ...BaseMovieReview\n      movie @include(if: $withMovie) {\n        id\n        title\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetMoviesReviewsRelay($filter: MovieReviewFilter, $sort: MovieReviewSort, $before: String, $last: Int, $after: String, $first: Int, $withMovie: Boolean = false) {\n  getMoviesReviewsRelay(\n    filter: $filter\n    sort: $sort\n    before: $before\n    last: $last\n    first: $first\n    after: $after\n  ) {\n    edges {\n      node {\n        ...BaseMovieReview\n        movie @include(if: $withMovie) {\n          id\n          title\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n      hasNextPage\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment MovieUser on MovieUser {\n  isBookmarked\n  isWatched\n  movieId\n  userId\n}',
): (typeof documents)['fragment MovieUser on MovieUser {\n  isBookmarked\n  isWatched\n  movieId\n  userId\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateMovieUser($input: CreateMovieUserInput!) {\n  createMovieUser(input: $input) {\n    ...MovieUser\n  }\n}\n\nmutation UpdateMovieUser($userId: String!, $movieId: String!, $input: UpdateMovieUserInput!) {\n  updateMovieUser(userId: $userId, movieId: $movieId, input: $input) {\n    ...MovieUser\n  }\n}',
): (typeof documents)['mutation CreateMovieUser($input: CreateMovieUserInput!) {\n  createMovieUser(input: $input) {\n    ...MovieUser\n  }\n}\n\nmutation UpdateMovieUser($userId: String!, $movieId: String!, $input: UpdateMovieUserInput!) {\n  updateMovieUser(userId: $userId, movieId: $movieId, input: $input) {\n    ...MovieUser\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetMovieUser($userId: String!, $movieId: String!) {\n  getMovieUser(userId: $userId, movieId: $movieId) {\n    ...MovieUser\n  }\n}\n\nquery GetMoviesUsers($limit: Int!, $offset: Int!, $sort: MovieUserSort, $filter: MovieUserFilter, $withMovie: Boolean = false) {\n  getMoviesUsers(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...MovieUser\n      movie @include(if: $withMovie) {\n        ...FilmCard_Film\n        ...SeriesCard_Series\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}',
): (typeof documents)['query GetMovieUser($userId: String!, $movieId: String!) {\n  getMovieUser(userId: $userId, movieId: $movieId) {\n    ...MovieUser\n  }\n}\n\nquery GetMoviesUsers($limit: Int!, $offset: Int!, $sort: MovieUserSort, $filter: MovieUserFilter, $withMovie: Boolean = false) {\n  getMoviesUsers(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...MovieUser\n      movie @include(if: $withMovie) {\n        ...FilmCard_Film\n        ...SeriesCard_Series\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation IncreaseMovieVisits($movieId: String!) {\n  increaseMovieVisits(movieId: $movieId)\n}',
): (typeof documents)['mutation IncreaseMovieVisits($movieId: String!) {\n  increaseMovieVisits(movieId: $movieId)\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Movie on Movie {\n  ...FilmCard_Film\n  ...SeriesCard_Series\n}',
): (typeof documents)['fragment Movie on Movie {\n  ...FilmCard_Film\n  ...SeriesCard_Series\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetMovie($id: String!) {\n  getMovie(id: $id) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetRandomMovies($limit: Int!, $offset: Int!) {\n  getRandomMovies(limit: $limit, offset: $offset) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetMostReviewedMovies($limit: Int!, $offset: Int!) {\n  getMostReviewedMovies(limit: $limit, offset: $offset) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetMostViewedMovies($limit: Int!, $offset: Int!) {\n  getMostViewedMovies(limit: $limit, offset: $offset) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetMoviesProtectedOffset($limit: Int!, $offset: Int!, $sort: MovieSort, $filter: MovieFilter) {\n  getMoviesProtectedOffset(\n    limit: $limit\n    offset: $offset\n    sort: $sort\n    filter: $filter\n  ) {\n    nodes {\n      ...FilmCard_Film\n      ...SeriesCard_Series\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetMoviesOffset($limit: Int!, $offset: Int!, $sort: MovieSort, $filter: MovieFilter) {\n  getMoviesOffset(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...FilmCard_Film\n      ...SeriesCard_Series\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetMoviesRelay($sort: MovieSort, $filter: MovieFilter, $before: String, $last: Int, $after: String, $first: Int) {\n  getMoviesRelay(\n    sort: $sort\n    filter: $filter\n    before: $before\n    last: $last\n    first: $first\n    after: $after\n  ) {\n    edges {\n      node {\n        ...FilmCard_Film\n        ...SeriesCard_Series\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n      hasNextPage\n      endCursor\n    }\n  }\n}',
): (typeof documents)['query GetMovie($id: String!) {\n  getMovie(id: $id) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetRandomMovies($limit: Int!, $offset: Int!) {\n  getRandomMovies(limit: $limit, offset: $offset) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetMostReviewedMovies($limit: Int!, $offset: Int!) {\n  getMostReviewedMovies(limit: $limit, offset: $offset) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetMostViewedMovies($limit: Int!, $offset: Int!) {\n  getMostViewedMovies(limit: $limit, offset: $offset) {\n    ...FilmCard_Film\n    ...SeriesCard_Series\n  }\n}\n\nquery GetMoviesProtectedOffset($limit: Int!, $offset: Int!, $sort: MovieSort, $filter: MovieFilter) {\n  getMoviesProtectedOffset(\n    limit: $limit\n    offset: $offset\n    sort: $sort\n    filter: $filter\n  ) {\n    nodes {\n      ...FilmCard_Film\n      ...SeriesCard_Series\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetMoviesOffset($limit: Int!, $offset: Int!, $sort: MovieSort, $filter: MovieFilter) {\n  getMoviesOffset(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...FilmCard_Film\n      ...SeriesCard_Series\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetMoviesRelay($sort: MovieSort, $filter: MovieFilter, $before: String, $last: Int, $after: String, $first: Int) {\n  getMoviesRelay(\n    sort: $sort\n    filter: $filter\n    before: $before\n    last: $last\n    first: $first\n    after: $after\n  ) {\n    edges {\n      node {\n        ...FilmCard_Film\n        ...SeriesCard_Series\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n      hasNextPage\n      endCursor\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Person on Person {\n  id\n  name\n  image {\n    url\n  }\n  country {\n    ...BaseCountry\n  }\n}',
): (typeof documents)['fragment Person on Person {\n  id\n  name\n  image {\n    url\n  }\n  country {\n    ...BaseCountry\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Plan on Plan {\n  id\n  name\n  prices {\n    ...PlanPrice\n  }\n}',
): (typeof documents)['fragment Plan on Plan {\n  id\n  name\n  prices {\n    ...PlanPrice\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetPlans {\n  getPlans {\n    ...Plan\n  }\n}',
): (typeof documents)['query GetPlans {\n  getPlans {\n    ...Plan\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment BasePrice on Price {\n  id\n  amount\n  currencyId\n}\n\nfragment PlanPrice on Price {\n  id\n  amount\n  interval\n  currency {\n    id\n    name\n    symbol\n  }\n}\n\nfragment Price on Price {\n  id\n  amount\n  currency {\n    id\n    name\n    symbol\n  }\n}',
): (typeof documents)['fragment BasePrice on Price {\n  id\n  amount\n  currencyId\n}\n\nfragment PlanPrice on Price {\n  id\n  amount\n  interval\n  currency {\n    id\n    name\n    symbol\n  }\n}\n\nfragment Price on Price {\n  id\n  amount\n  currency {\n    id\n    name\n    symbol\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Product on Product {\n  id\n  movieId\n  prices {\n    ...Price\n  }\n}',
): (typeof documents)['fragment Product on Product {\n  id\n  movieId\n  prices {\n    ...Price\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetProduct($id: String!) {\n  getProduct(id: $id) {\n    ...Product\n  }\n}',
): (typeof documents)['query GetProduct($id: String!) {\n  getProduct(id: $id) {\n    ...Product\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreatePurchaseSession($movieId: String!, $priceId: String!) {\n  createPurchaseSession(movieId: $movieId, priceId: $priceId)\n}',
): (typeof documents)['mutation CreatePurchaseSession($movieId: String!, $priceId: String!) {\n  createPurchaseSession(movieId: $movieId, priceId: $priceId)\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HasPurchase($movieId: String!) {\n  hasPurchase(movieId: $movieId)\n}',
): (typeof documents)['query HasPurchase($movieId: String!) {\n  hasPurchase(movieId: $movieId)\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment BaseRoomMovie on RoomMovie {\n  roomId\n  movieId\n  episodeNumber\n  order\n  showStart\n}\n\nfragment RoomMovie on RoomMovie {\n  roomId\n  movie {\n    ...SeriesCard_Series\n    ...FilmCard_Film\n  }\n  episodeNumber\n  showStart\n  order\n}',
): (typeof documents)['fragment BaseRoomMovie on RoomMovie {\n  roomId\n  movieId\n  episodeNumber\n  order\n  showStart\n}\n\nfragment RoomMovie on RoomMovie {\n  roomId\n  movie {\n    ...SeriesCard_Series\n    ...FilmCard_Film\n  }\n  episodeNumber\n  showStart\n  order\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateRoomMovie($input: CreateRoomMovieInput!) {\n  createRoomMovie(input: $input) {\n    ...RoomMovie\n  }\n}\n\nmutation DeleteRoomMovie($roomId: String!, $movieId: String!) {\n  deleteRoomMovie(roomId: $roomId, movieId: $movieId) {\n    ...BaseRoomMovie\n  }\n}',
): (typeof documents)['mutation CreateRoomMovie($input: CreateRoomMovieInput!) {\n  createRoomMovie(input: $input) {\n    ...RoomMovie\n  }\n}\n\nmutation DeleteRoomMovie($roomId: String!, $movieId: String!) {\n  deleteRoomMovie(roomId: $roomId, movieId: $movieId) {\n    ...BaseRoomMovie\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment BaseRoom on Room {\n  id\n  name\n  owner {\n    ...BaseUser\n  }\n}\n\nfragment Room on Room {\n  ...BaseRoom\n  currentMovie {\n    ...RoomMovie\n  }\n  participants {\n    ...BaseUser\n  }\n  movies {\n    ...RoomMovie\n  }\n}',
): (typeof documents)['fragment BaseRoom on Room {\n  id\n  name\n  owner {\n    ...BaseUser\n  }\n}\n\nfragment Room on Room {\n  ...BaseRoom\n  currentMovie {\n    ...RoomMovie\n  }\n  participants {\n    ...BaseUser\n  }\n  movies {\n    ...RoomMovie\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateRoom($input: CreateRoomInput!) {\n  createRoom(input: $input) {\n    ...Room\n  }\n}\n\nmutation JoinRoom($inviteToken: String!) {\n  joinRoom(inviteToken: $inviteToken) {\n    ...Room\n  }\n}\n\nmutation LeaveRoom($id: String!) {\n  leaveRoom(id: $id) {\n    ...Room\n  }\n}\n\nmutation GenerateRoomInvite($id: String!) {\n  generateRoomInvite(id: $id)\n}\n\nmutation DeleteRoom($id: String!) {\n  deleteRoom(id: $id) {\n    ...BaseRoom\n  }\n}\n\nmutation StartRoomPlayback($id: String!) {\n  startRoomPlayback(id: $id)\n}\n\nmutation EndRoomPlayback($id: String!) {\n  endRoomPlayback(id: $id)\n}',
): (typeof documents)['mutation CreateRoom($input: CreateRoomInput!) {\n  createRoom(input: $input) {\n    ...Room\n  }\n}\n\nmutation JoinRoom($inviteToken: String!) {\n  joinRoom(inviteToken: $inviteToken) {\n    ...Room\n  }\n}\n\nmutation LeaveRoom($id: String!) {\n  leaveRoom(id: $id) {\n    ...Room\n  }\n}\n\nmutation GenerateRoomInvite($id: String!) {\n  generateRoomInvite(id: $id)\n}\n\nmutation DeleteRoom($id: String!) {\n  deleteRoom(id: $id) {\n    ...BaseRoom\n  }\n}\n\nmutation StartRoomPlayback($id: String!) {\n  startRoomPlayback(id: $id)\n}\n\nmutation EndRoomPlayback($id: String!) {\n  endRoomPlayback(id: $id)\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetRoom($id: String!) {\n  getRoom(id: $id) {\n    ...Room\n  }\n}\n\nquery GetRooms($limit: Int!, $offset: Int!, $sort: RoomSort, $filter: RoomFilter) {\n  getRooms(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...BaseRoom\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetRoomCurrentPlayback($id: String!) {\n  getRoomCurrentPlayback(id: $id)\n}',
): (typeof documents)['query GetRoom($id: String!) {\n  getRoom(id: $id) {\n    ...Room\n  }\n}\n\nquery GetRooms($limit: Int!, $offset: Int!, $sort: RoomSort, $filter: RoomFilter) {\n  getRooms(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...BaseRoom\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nquery GetRoomCurrentPlayback($id: String!) {\n  getRoomCurrentPlayback(id: $id)\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'subscription RoomPlaybackStarted($id: String!) {\n  roomPlaybackStarted(id: $id) {\n    ...RoomMovie\n  }\n}\n\nsubscription RoomPlaybackEnded($id: String!) {\n  roomPlaybackEnded(id: $id) {\n    ...BaseRoomMovie\n  }\n}\n\nsubscription RoomDeleted($id: String!) {\n  roomDeleted(id: $id) {\n    ...BaseRoom\n  }\n}',
): (typeof documents)['subscription RoomPlaybackStarted($id: String!) {\n  roomPlaybackStarted(id: $id) {\n    ...RoomMovie\n  }\n}\n\nsubscription RoomPlaybackEnded($id: String!) {\n  roomPlaybackEnded(id: $id) {\n    ...BaseRoomMovie\n  }\n}\n\nsubscription RoomDeleted($id: String!) {\n  roomDeleted(id: $id) {\n    ...BaseRoom\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment BaseSeason on Season {\n  id\n  title\n  startReleaseDate\n  endReleaseDate\n  numberInSeries\n}\n\nfragment SeasonItem_Season on Season {\n  ...BaseSeason\n  episodes {\n    ...Episode\n  }\n}',
): (typeof documents)['fragment BaseSeason on Season {\n  id\n  title\n  startReleaseDate\n  endReleaseDate\n  numberInSeries\n}\n\nfragment SeasonItem_Season on Season {\n  ...BaseSeason\n  episodes {\n    ...Episode\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetSeasons($limit: Int!, $offset: Int!, $sort: SeasonSort, $filter: SeasonFilter) {\n  getSeasons(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...SeasonItem_Season\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}',
): (typeof documents)['query GetSeasons($limit: Int!, $offset: Int!, $sort: SeasonSort, $filter: SeasonFilter) {\n  getSeasons(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...SeasonItem_Season\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment BaseSeries on Series {\n  id\n  title\n  description\n  startReleaseDate\n  endReleaseDate\n  ageRestriction\n  rating\n}\n\nfragment SeriesCard_Series on Series {\n  ...BaseSeries\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n}\n\nfragment SeriesItem_Series on Series {\n  ...BaseSeries\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n  productId\n}',
): (typeof documents)['fragment BaseSeries on Series {\n  id\n  title\n  description\n  startReleaseDate\n  endReleaseDate\n  ageRestriction\n  rating\n}\n\nfragment SeriesCard_Series on Series {\n  ...BaseSeries\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n}\n\nfragment SeriesItem_Series on Series {\n  ...BaseSeries\n  studios {\n    name\n  }\n  countries {\n    name\n  }\n  genres {\n    name\n  }\n  cover {\n    url\n  }\n  productId\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetManySeries($limit: Int!, $offset: Int!, $sort: SeriesSort, $filter: SeriesFilter) {\n  getManySeries(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...SeriesCard_Series\n    }\n    pageInfo {\n      totalCount\n      hasNextPage\n    }\n  }\n}\n\nquery GetOneSeries($id: String!) {\n  getOneSeries(id: $id) {\n    ...SeriesItem_Series\n  }\n}',
): (typeof documents)['query GetManySeries($limit: Int!, $offset: Int!, $sort: SeriesSort, $filter: SeriesFilter) {\n  getManySeries(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {\n    nodes {\n      ...SeriesCard_Series\n    }\n    pageInfo {\n      totalCount\n      hasNextPage\n    }\n  }\n}\n\nquery GetOneSeries($id: String!) {\n  getOneSeries(id: $id) {\n    ...SeriesItem_Series\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment BaseStudio on Studio {\n  id\n  name\n}\n\nfragment Studio on Studio {\n  ...BaseStudio\n  countries {\n    ...BaseCountry\n  }\n}',
): (typeof documents)['fragment BaseStudio on Studio {\n  id\n  name\n}\n\nfragment Studio on Studio {\n  ...BaseStudio\n  countries {\n    ...BaseCountry\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetAllStudios($sort: StudioSort, $movieType: MovieTypeEnum) {\n  getAllStudios(sort: $sort) {\n    ...BaseStudio\n    moviesCount(type: $movieType)\n  }\n}\n\nquery GetStudios($limit: Int!, $offset: Int!, $filter: StudioFilter, $sort: StudioSort) {\n  getStudios(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      ...BaseStudio\n    }\n  }\n}',
): (typeof documents)['query GetAllStudios($sort: StudioSort, $movieType: MovieTypeEnum) {\n  getAllStudios(sort: $sort) {\n    ...BaseStudio\n    moviesCount(type: $movieType)\n  }\n}\n\nquery GetStudios($limit: Int!, $offset: Int!, $filter: StudioFilter, $sort: StudioSort) {\n  getStudios(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {\n    nodes {\n      ...BaseStudio\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation Subscribe($priceId: String!) {\n  subscribe(priceId: $priceId)\n}\n\nmutation CancelSubscription($id: String!) {\n  cancelSubscription(id: $id)\n}\n\nmutation CreateSubscriptionsManageLink {\n  createSubscriptionsManageLink\n}',
): (typeof documents)['mutation Subscribe($priceId: String!) {\n  subscribe(priceId: $priceId)\n}\n\nmutation CancelSubscription($id: String!) {\n  cancelSubscription(id: $id)\n}\n\nmutation CreateSubscriptionsManageLink {\n  createSubscriptionsManageLink\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HasActiveSubscription {\n  hasActiveSubscription\n}',
): (typeof documents)['query HasActiveSubscription {\n  hasActiveSubscription\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment BaseUser on User {\n  id\n  name\n  avatar {\n    url\n  }\n}\n\nfragment User on User {\n  ...BaseUser\n  email\n  createdAt\n  country {\n    id\n    name\n  }\n  role\n  isEmailConfirmed\n}',
): (typeof documents)['fragment BaseUser on User {\n  id\n  name\n  avatar {\n    url\n  }\n}\n\nfragment User on User {\n  ...BaseUser\n  email\n  createdAt\n  country {\n    id\n    name\n  }\n  role\n  isEmailConfirmed\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {\n  updatePassword(oldPassword: $oldPassword, newPassword: $newPassword) {\n    ...User\n  }\n}\n\nmutation UpdateMe($input: UpdateUserInput!) {\n  updateMe(input: $input) {\n    ...User\n  }\n}\n\nmutation UpdateAvatar($file: Upload!) {\n  updateAvatar(file: $file) {\n    ...User\n  }\n}',
): (typeof documents)['mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {\n  updatePassword(oldPassword: $oldPassword, newPassword: $newPassword) {\n    ...User\n  }\n}\n\nmutation UpdateMe($input: UpdateUserInput!) {\n  updateMe(input: $input) {\n    ...User\n  }\n}\n\nmutation UpdateAvatar($file: Upload!) {\n  updateAvatar(file: $file) {\n    ...User\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetMe {\n  getMe {\n    ...User\n  }\n}\n\nquery GetUser($id: String!) {\n  getUser(id: $id) {\n    ...User\n  }\n}\n\nquery GetUsers {\n  getUsers {\n    nodes {\n      ...BaseUser\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}',
): (typeof documents)['query GetMe {\n  getMe {\n    ...User\n  }\n}\n\nquery GetUser($id: String!) {\n  getUser(id: $id) {\n    ...User\n  }\n}\n\nquery GetUsers {\n  getUsers {\n    nodes {\n      ...BaseUser\n    }\n    pageInfo {\n      totalCount\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Video on Video {\n  dashManifestMedia {\n    url\n  }\n  hlsManifestMedia {\n    url\n  }\n  subtitles {\n    languageId\n    file {\n      url\n    }\n  }\n}',
): (typeof documents)['fragment Video on Video {\n  dashManifestMedia {\n    url\n  }\n  hlsManifestMedia {\n    url\n  }\n  subtitles {\n    languageId\n    file {\n      url\n    }\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
