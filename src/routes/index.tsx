import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { IRoute } from '../types/route';
import DefaultLayout from '../layouts/DefaultLayout';
import { Fragment, Suspense } from 'react';
import PageWrapper from '../pages/PageWrapper';
import publicRoutes from './publicRoutes';
import { Spinner } from '@nextui-org/react';
import PageNotFound from '../pages/PageNotFound';

const renderRoutes = (routes: IRoute[]) => {
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
              <PageWrapper title={route.title}>{route.page}</PageWrapper>
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
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRouter />}>{renderRoutes(publicRoutes)}</Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
