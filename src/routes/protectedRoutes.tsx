import { lazy } from 'react';
import { IRoute } from '../types/route';
import SidebarLayout from '../layouts/SidebarLayout';

const UserProfile = lazy(() => import('../features/User/pages/UserProfile'));
const Admin = lazy(() => import('../features/Admin/pages/Admin'));
const SettingServiceOptions = lazy(
  () => import('../features/Admin/pages/SettingServiceOptions'),
);

const protectedRoutes: IRoute[] = [
  {
    page: <UserProfile />,
    path: 'profile',
    layout: SidebarLayout,
    role: ['user', 'admin'],
  },
  {
    page: <Admin />,
    path: 'admin',
    layout: SidebarLayout,
    role: ['admin'],
  },
  {
    page: <SettingServiceOptions />,
    path: 'setting-service-option',
    layout: SidebarLayout,
    role: ['admin', 'user'],
  },
];

export default protectedRoutes;
