type RouteKey = 'home' | 'login' | 'films' | 'signUp' | 'users';

export const ROUTES: Record<RouteKey, string> = {
  login: '/login',
  signUp: '/sign-up',
  films: '/films',
  users: '/users',
  home: '/',
};
