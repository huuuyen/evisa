import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const Visa = Loadable(lazy(() => import('./visa/Index')));
const AddVisa = Loadable(lazy(() => import('./visa/FormAdd')));
const ProductService = Loadable(lazy(() => import('./product-service/Index')));
const CountryService = Loadable(lazy(() => import('./country-service/Index')));
// const AppForm = Loadable(lazy(() => import('./forms/AppForm')));
const VisalRoutes = [
    { path: '/admin/visa', element: <Visa /> },
    { path: '/admin/visa/add', element: <AddVisa /> },
    { path: '/admin/product-service', element: <ProductService /> },
    { path: '/admin/country-service', element: <CountryService /> },
    // { path: '/admin/product-service', element: <AppForm /> },
];

export default VisalRoutes;
