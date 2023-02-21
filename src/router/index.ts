import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: () => import('@/layouts/MainLayout.vue'),
      redirect: {
        name: 'ExamplePage',
      },
      children: [
        {
          path: '/example',
          name: 'ExamplePage',
          component: () => import('@/pages/ExamplePage/ExamplePage.vue')
        },
      ],
    },
  ]
})

export default router
