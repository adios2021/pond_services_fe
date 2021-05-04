import React, { lazy } from 'react';
import CommonLayout from '../layouts/common/index';
import AdminLayout from '../layouts/admin/index';
import TopPageLayout from '../layouts/toppage/index';

const TopPage = lazy(() => import('../views/TopPage'))
const SignupPage = lazy(() => import('../views/sign-up'))
const DashboardPage = lazy(() => import('../views/DashboardPage'))
const LoginPage = lazy(() => import('../views/LoginPage'))

const routes = [
  {
    path: '/',
    exact: true,
    Component: TopPage,
    Layout:TopPageLayout,
    isPrivate: false,
  },
  {
    path: '/login',
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
    Layout:AdminLayout,
    isPrivate: true,
  },
]

export default routes;