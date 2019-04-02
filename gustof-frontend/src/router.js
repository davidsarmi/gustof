import Vue from 'vue'
import Router from 'vue-router'
import Administrador from '@/layouts/Administrador.vue'
import Bodega from '@/views/Bodega.vue'
import mesas from '@/views/Mesas.vue'
import Chef from '@/views/Chef.vue'
import Login from '@/views/Login.vue'
import asdasd from '@/views/administrador/perfil.vue'
import Candado from '@/views/administrador/candados.vue'
import cliente from '@/views/administrador/cliente.vue'
import facturacion from '@/views/administrador/facturacion.vue'
import miempresa from '@/views/administrador/miempresa.vue'
import producto from '@/views/administrador/productos.vue'
import proveedor from '@/views/administrador/proveedores.vue'
import salir from '@/views/administrador/salir.vue'
import BodegaProductos from '@/views/Bodega-Productos.vue'
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
      path: '/candado',
      name: 'candado',
      component: Candado
    },
    {
      path: '/cliente',
      name: 'cliente',
      component: cliente
    },
    {
      path: '/facturacion',
      name: 'facturacion',
      component: facturacion
    },
    {
      path: '/miempresa',
      name: 'miempresa',
      component: miempresa
    },
    {
      path: '/productos',
      name: 'productos',
      component: producto
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: proveedor
    },
    {
      path: '/salir',
      name: 'salir',
      component: salir
    }
  ]
})
