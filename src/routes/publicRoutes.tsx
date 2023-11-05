import { lazy } from 'react';
import { IRoute } from '../types/route';
import SideBySideLayout from '../layouts/SideBySideLayout';
import SidebarLayout from '../layouts/SidebarLayout';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../features/Authentication/pages/Login'));
const Register = lazy(
  () => import('../features/Authentication/pages/Register'),
);
const UserProfile = lazy(() => import('../features/User/pages/UserProfile'));

const publicRoutes: IRoute[] = [
  {
    page: <Home />,
    path: '/',
  },
  {
    page: <LandingPage />,
    path: 'landing-page',
  },
  {
    page: <Login />,
    path: 'login',
    layout: SideBySideLayout,
  },
  {
    page: <Register />,
    path: 'register',
    layout: SideBySideLayout,
  },
  {
    page: <UserProfile />,
    path: 'profile',
    layout: SidebarLayout,
  },
];

export default publicRoutes;
