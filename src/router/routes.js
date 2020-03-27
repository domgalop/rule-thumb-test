export default [
  {
    path: '/trials',
    name: 'Trials',
    component: () => import('../containers/dummy'),
  },
  {
    path: '/how-it-works',
    name: 'How It works',
    component: () => import('../containers/dummy'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../containers/dummy'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/layout/TheAppLayout'),
  },
];
