import React, { lazy } from 'react';
import CommonLayout from '../layouts/common/index';
import AdminLayout from '../layouts/admin/index';
import TopPageLayout from '../layouts/toppage/index';

const TopPage = lazy(() => import('../views/TopPage'))
const SignupPage = lazy(() => import('../views/sign-up'))
const PageManagement = lazy(() => import('../views/PageManagement'))
const LoginPage = lazy(() => import('../views/LoginPage'))

const GuestPage = lazy(() => import('../views/guest'))

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
    Component: PageManagement,
    Layout:AdminLayout,
    isPrivate: true,
  },
  {
    path: '/template',
    exact: true,
    Component: TopPage,
    Layout:TopPageLayout,
    isPrivate: false,
  },
  {
    path: '/test',
    exact: true,
    Component: GuestPage,
    Layout:TopPageLayout,
    isPrivate: false,
  },
]

export default routes;