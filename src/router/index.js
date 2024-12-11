import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Juegos from '@/views/Juegos.vue'
import Opinion from '@/views/Opinion.vue'
import NotFound from '@/views/NotFound.vue'

const ABOUT = () => import('../views/AboutView.vue');
const JUEGOS = ()=> import('@/views/Juegos.vue');
const AUTENTICACION = ()=> import('@/views/Autenticacion.vue');
const ADMINISTRACION = ()=> import('@/views/Administracion.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/juegos',
      name: 'juegos',
      component: JUEGOS,
    },
    {
      path: '/opinion/:gameName',
      name: 'opinion',
      component: Opinion,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ABOUT,
    },
    {
      path: '/autenticacion',
      name: 'autenticacion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AUTENTICACION,
    },
    {
      path: '/administracion',
      name: 'administracion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ADMINISTRACION,
    },
    {
      path:'/:pathMatch(.*)*',
      name: 'NotFound', 
      component: NotFound
    }
  ],
})

export default router
