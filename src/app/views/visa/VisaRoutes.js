import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const Visa = Loadable(lazy(() => import('./visa/index')));
const AddVisa = Loadable(lazy(() => import('./visa/FormVisa')));
// const AppForm = Loadable(lazy(() => import('./forms/AppForm')));
const VisalRoutes = [
    { path: '/admin/visa', element: <Visa /> },
    { path: '/admin/visa/add', element: <AddVisa /> },
    // { path: '/admin/product-service', element: <AppForm /> },
];

export default VisalRoutes;
