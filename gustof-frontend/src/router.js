import Vue from 'vue'
import Router from 'vue-router'
import Administrador from '@/layouts/Administrador.vue'
import Bodega from '@/views/Bodega.vue'
import mesas from '@/views/Mesas.vue'
import Chef from '@/views/Chef.vue'
import Login from '@/views/Login.vue'
import asdasd from '@/views/administrador/perfil.vue'
import BodegaProductos from '@/views/Bodega-Productos.vue'
import AgregarB from '@/views/AgregarB.vue'
import SacarB from '@/views/SacarB.vue'
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
    },
    {
      path: '/administrador/perfil',
      name: 'perfil',
      component: asdasd
    },
    {
      path: '/bodega_productos',
      name: 'bodega_productos',
      component: BodegaProductos
    },
    {
      path: '/Chef',
      name: 'Chef',
      component: Chef
    },
    {
      path: '/Agregar',
      name: 'AgregarB',
      component: AgregarB
    },
    {
      path: '/Sacar',
      name: 'SacarB',
      component: SacarB
    }

  ]
})
