import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const ReportVisa = Loadable(lazy(() => import('./reportVisa/Index')));
const ReportAgency = Loadable(lazy(() => import('./reportAgency/Index')));

// const CountryService = Loadable(lazy(() => import('./country-service/Index')));
// const AppForm = Loadable(lazy(() => import('./forms/AppForm')));
const VisalRoutes = [
    { path: '/admin/report/report-visa', element: <ReportVisa /> },
    { path: '/admin/report/report-agency', element: <ReportAgency /> },
    // { path: '/admin/product-service', element: <AppForm /> },
];

export default VisalRoutes;
