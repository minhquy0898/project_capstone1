import { lazy } from 'react';
import { IRoute } from '../types/route';
import SideBySideLayout from '../layouts/SideBySideLayout';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../features/Authentication/pages/Login'));
const Register = lazy(
  () => import('../features/Authentication/pages/Register'),
);
const EventServices = lazy(
  () => import('../features/Booking/pages/EventServices'),
);

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
    isLogoutRequired: true,
  },
  {
    page: <Register />,
    path: 'register',
    layout: SideBySideLayout,
    isLogoutRequired: true,
  },
  {
    page: <EventServices />,
    path: 'dich-vu',
  },
];

export default publicRoutes;
