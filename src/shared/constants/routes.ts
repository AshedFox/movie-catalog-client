type RouteKey = 'home' | 'login' | 'films' | 'series' | 'signUp' | 'users' | 'collections';

export const ROUTES: Record<RouteKey, string> = {
  login: '/login',
  signUp: '/sign-up',
  films: '/films',
  collections: '/collections',
  series: '/series',
  users: '/users',
  home: '/',
};
