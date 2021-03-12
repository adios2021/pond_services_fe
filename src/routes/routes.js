import React, { lazy } from 'react';
import AuthLayout from '../layouts/auth/index'

const LoginPage = lazy(() => import('../views/LoginPage'))
const SignupPage = lazy(() => import('../views/sign-up'))

const routes = [
    {
        path: '/',
        exact: true,
        Component: LoginPage,
        Layout:AuthLayout,
        isPrivate: false,
    },
    {
        path: '/sign-up',
        exact: true,
        Component: SignupPage,
        Layout:AuthLayout,
        isPrivate: false,
    },
]

export default routes;