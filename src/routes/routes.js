import React, { lazy } from 'react';
import CommonLayout from '../layouts/common/index'

const LoginPage = lazy(() => import('../views/LoginPage'))
const SignupPage = lazy(() => import('../views/sign-up'))
const DashboardPage = lazy(() => import('../views/DashboardPage'))

const routes = [
  {
    path: '/',
    exact: true,
    Component: LoginPage,
    Layout:CommonLayout,
    isPrivate: false,
  },
  {
    path: '/sign-up',
    exact: true,
    Component: SignupPage,
    Layout:CommonLayout,
    isPrivate: false,
  },
  {
    path: '/dashboard',
    exact: true,
    Component: DashboardPage,
    Layout:CommonLayout,
    isPrivate: false,
  },
]

export default routes;