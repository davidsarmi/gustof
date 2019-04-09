import Vue from 'vue'
import Router from 'vue-router'
import Administrador from '@/views/administrador/inicio.vue'
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
import BodegaProductos from '@/views/Bodega-Productos.vue'
import AgregarB from '@/views/AgregarB.vue'
import SacarB from '@/views/SacarB.vue'
import Productosporagotar from '@/views/ProductosPorAgotar.vue'
import Productosagotados from '@/views/ProductosAgotados.vue'
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
      path: '/administrador/candados',
      name: 'candado',
      component: Candado
    },
    {
      path: '/administrador/cliente',
      name: 'cliente',
      component: cliente
    },
    {
      path: '/administrador/facturacion',
      name: 'facturacion',
      component: facturacion
    },
    {
      path: '/administrador/miempresa',
      name: 'miempresa',
      component: miempresa
    },
    {
      path: '/administrador/productos',
      name: 'productos',
      component: producto
    },
    {
      path: '/administrador/proveedores',
      name: 'proveedores',
      component: proveedor
    },
    {
      path: '/sacar',
      name: 'SacarB',
      component: SacarB
    },
    {
      path: '/agregar',
      name: 'AgregarB',
      component: AgregarB
    },
    {
      path: '/ProductosPorAgotar',
      name: 'ProductosPorAgotar',
      component: Productosporagotar
    },
    {
      path: '/ProductosAgotados',
      name: 'ProductosAgotados',
      component: Productosagotados
    }
  ]
})
