import Vue from 'vue'
import Router from 'vue-router'
import Administrador from '@/layouts/Administrador.vue'
import Bodega from '@/views/Bodega.vue'
import mesas from '@/views/Mesas.vue'
import Login from '@/views/Login.vue'
import Meseros from '@/layouts/meseros.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/administrador',
      name: 'administrador',
      component: Administrador
    },
    {
      path: '/Bodega',
      name: 'Bodega',
      component: Bodega
    },
    {
      path: '/mesas',
      name: 'mesas',
      component: mesas
    }
  ]
})
