import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const Agency = Loadable(lazy(() => import('./agency/Index')));
const VisalRoutes = [
    { path: '/admin/affiliate-agency', element: <Agency /> },

];
export default VisalRoutes;
