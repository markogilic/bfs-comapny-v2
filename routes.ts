export const publicRoutes = [
  '/',
  '/programs',
  '/programs/[id]',
  '/gallery',
  '/blog',
  '/blog/[slug]',
  '/auth/new-verification',
];

export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/pass-reset',
  '/auth/new-password',
];

export const apiAuthPrefix = '/api/auth';

export const DEFAULT_LOGIN_REDIRECT = '/dashboard';
