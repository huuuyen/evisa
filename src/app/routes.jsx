import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import visa from 'app/views/visa/VisaRoutes';
import report from 'app/views/report/ReportRoutes';
import cmsAccount from 'app/views/cmsAccount/CmsAccount';
import affiliateAgency from 'app/views/affiliate/AffiliateRoutes'
// landing page

const HomePage = Loadable(lazy(() => import('app/views/client/HomePage/Index')));
const FormEvisa = Loadable(lazy(() => import('app/views/client/FormVisa/Index')));
const FAQ = Loadable(lazy(() => import('app/views/client/FAQ/Index')));

const CheckEvisa = Loadable(lazy(() => import('app/views/client/CheckEvisa/Index')));



// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));

// echart page
const AppEchart = Loadable(lazy(() => import('app/views/charts/echarts/AppEchart')));

// dashboard page
const Analytics = Loadable(lazy(() => import('app/views/dashboard/Analytics')));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      ...visa,
      ...report,
      ...cmsAccount,
      ...affiliateAgency,
      // dashboard route
      {
        path: '/dashboard/default',
        element: <Analytics />,
        auth: authRoles.admin
      },

      // e-chart rooute
      {
        path: '/charts/echarts',
        element: <AppEchart />,
        auth: authRoles.editor
      }
    ]
  },
  // landing page
  { path: '/index', element: <HomePage /> },
  { path: '/form-evisa', element: <FormEvisa /> },
  { path: '/FAQ', element: <FAQ /> },
  { path: '/check-evisa', element: <CheckEvisa /> },
  // session pages route
  { path: '/session/404', element: <NotFound /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },
  { path: '/admin', element: <Navigate to="/session/signin" /> },
  { path: '/', element: <Navigate to="index" /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
