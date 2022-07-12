
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/menu' },
      { path: '/menu', component: () => import('pages/MenuPage.vue') },
      { path: '/menu/favoritos', meta: { favorite: true }, component: () => import('pages/MenuPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
