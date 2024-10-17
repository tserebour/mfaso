import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
// const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));
const SignIn = lazy(() => import('pages/authentication/SignIn'));
const SignUp = lazy(() => import('pages/authentication/SignUp'));
const Page404 = lazy(() => import('pages/errors/Page404'));
const UserFeedback = lazy(() => import('pages/userfeedback/UserFeedback'));
const ProjectDashboard = lazy(() => import('pages/projectdashboard/ProjectDashboard'));
const Leaderboard = lazy(() => import('pages/leaderboard/Leaderboard'));

import PageLoader from 'components/loading/PageLoader';
import Progress from 'components/loading/Progress';

export const routes = [
  {
    element: (
      <Suspense fallback={<Progress />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: rootPaths.root,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Leaderboard />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: <AuthLayout />,
        children: [
          {
            path: paths.signin,
            element: <SignIn />,
          },
          {
            path: paths.signup,
            element: <SignUp />,
          },
        ],
      },

      {
        path: paths.leaderboard,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Leaderboard />
            </Suspense>
          </MainLayout>
        ),
      },

      {
        path: paths.projectdashboard,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <ProjectDashboard />
            </Suspense>
          </MainLayout>
        ),
      },

      {
        path: paths.feedback,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <UserFeedback />
            </Suspense>
          </MainLayout>
        ),
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/' });

export default router;
