import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
const routers = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path : '/product-list',
        exact : false,
        main : () => <ProductListPage />
    },
    {
        path : '/product/add',
        exact : false,
        main : () => <ProductActionPage />
    },
    {
        path : '/product/:id/edit',
        export : false,
        main: ({math}) => <ProductActionPage math={math} />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFoundPage />
    }
];
export default routers;
