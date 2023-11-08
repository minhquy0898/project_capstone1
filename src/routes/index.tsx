import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { IRoute } from '../types/route';
import DefaultLayout from '../layouts/DefaultLayout';
import { FC, Fragment, ReactNode, Suspense } from 'react';
import PageWrapper from '../pages/PageWrapper';
import publicRoutes from './publicRoutes';
import { Spinner } from '@nextui-org/react';
import PageNotFound from '../pages/PageNotFound';
import { useFetchUser } from '../apis/auth.api';
import { Role } from '../types/user';
import protectedRoutes from './protectedRoutes';

interface RolesAuthRouterProps {
  routeRole?: Role[];
  userRole?: Role;
}

const RolesAuthRouter: FC<RolesAuthRouterProps> = ({ routeRole, userRole }) => {
  if (!userRole) {
    return <Navigate to="/" replace />;
  }

  if (!routeRole || routeRole.includes(userRole)) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};

interface LogoutRequiredProps {
  isAuth?: boolean;
  isRequired?: boolean;
  children: ReactNode;
}

const LogoutRequired: FC<LogoutRequiredProps> = ({
  isAuth,
  children,
  isRequired,
}) => {
  if (isAuth && isRequired) {
    return <Navigate to="/" />;
  }

  return <Fragment>{children}</Fragment>;
};

const renderRoutes = (routes: IRoute[], isAuth?: boolean) => {
  return routes.map((route) => {
    let Layout;
    if (route.layout === undefined) {
      Layout = DefaultLayout;
    } else if (route.layout === null) {
      Layout = Fragment;
    } else {
      Layout = route.layout;
    }

    let { path } = route;

    if (route.params) {
      path = `${route.path}/${route.params}`;
    }

    return (
      <Route
        key={route.path}
        path={path}
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <LogoutRequired
                isAuth={isAuth}
                isRequired={route.isLogoutRequired}
              >
                <PageWrapper title={route.title}>{route.page}</PageWrapper>
              </LogoutRequired>
            </Suspense>
          </Layout>
        }
      />
    );
  });
};

export const PublicRouter = () => {
  return <Outlet />;
};

export default function AppRouter() {
  const { data: userData } = useFetchUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRouter />}>
          {renderRoutes(publicRoutes, userData?.isSuccess)}
        </Route>
        <Route element={<RolesAuthRouter routeRole={userData?.data.role} />}>
          {renderRoutes(protectedRoutes)}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
