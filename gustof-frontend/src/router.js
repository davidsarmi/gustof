import Vue from 'vue'
import Router from 'vue-router'
import Administrador from '@/layouts/Administrador.vue'
import Bodega from '@/views/Bodega.vue'
import mesas from '@/views/Mesas.vue'
import Login from '@/views/Login.vue'
<<<<<<< HEAD
import asdasd from '@/views/administrador/perfil.vue'
=======
import Bodega_Productos from '@/views/Bodega-Productos.vue'
>>>>>>> 1d3d44588d3fe75be94a157c1930738b2bbf4c86

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
<<<<<<< HEAD
      path: '/administrador/perfil',
      name: 'perfil',
      component: asdasd
    }
=======
      path: '/bodega_productos',
      name: 'bodega_productos',
      component: Bodega_Productos
    },
>>>>>>> 1d3d44588d3fe75be94a157c1930738b2bbf4c86
  ]
})
