import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const CmsAccount = Loadable(lazy(() => import('./account/Index')));
const VisalRoutes = [
    { path: '/admin/cms-account', element: <CmsAccount /> },

];

export default VisalRoutes;
