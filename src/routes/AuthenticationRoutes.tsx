import { lazy } from 'react';

// project imports
import Loadable from '@/components/ui/Loadable';
import MinimalLayout from '@/components/layout/MinimalLayout';
import { Navigate, RouteObject } from "react-router";

// login option 3 routing
const LoginPage = Loadable(lazy(() => import('@/views/pages/auth/LoginPage.tsx')));
const RegisterPage = Loadable(lazy(() => import('@/views/pages/auth/RegisterPage.tsx')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes: RouteObject = {
    path: '/',
    element: <MinimalLayout/>,
    children: [
        {
            path: '',
            index: true,
            element: <Navigate to='/admin'/>
        },
        {
            path: '/login',
            element: <LoginPage/>
        },
        {
            path: '/register',
            element: <RegisterPage/>
        }
    ]
};

export default AuthenticationRoutes;
