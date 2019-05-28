import Vue from 'vue'
import Router from 'vue-router'
import Administrador from '@/layouts/Administrador.vue'
import bodega from '@/views/bodega.vue'
import mesas from '@/views/Mesas.vue'
import mesasLogin from '@/views/mesasL.vue'
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
import CajaFactura from '@/views/CajaFactura.vue'
import CajaPedido from '@/views/CajaPedido.vue'
import store from '@/store'

Vue.use(Router)

function authUser(to, from, next) {

}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        const { user } = store.state
        if (Object.keys(user).length !== 0) {
          console.log(user)
          user.rol === 'mesero' ? next('/mesaslogin') : user.rol === 'chef' ? next('/chef') : user.rol === 'administrador' ? next('/administrador') : user.rol === 'caja' ? next('/cajafactura') : next()
        } else {
          next()
        }
      }
    },
    {
      path: '/administrador',
      name: 'administrador',
      component: Administrador
    },
    {
      path: '/bodega',
      name: 'bodega',
      component: bodega
    },
    {
      path: '/mesas',
      name: 'mesas',
      component: mesas
    },
    {
      path: '/mesaslogin',
      name: 'mesaslogin',
      component: mesasLogin
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
      path: '/chef',
      name: 'chef',
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
      name: 'sacarb',
      component: SacarB
    },
    {
      path: '/agregar',
      name: 'agregarb',
      component: AgregarB
    },
    {
      path: '/productos_por_agotar',
      name: 'productos_por_agotar',
      component: Productosporagotar
    },
    {
      path: '/productos_agotados',
      name: 'productos_agotados',
      component: Productosagotados
    },
    {
      path: '/cajapedido',
      name: 'cajapedido',
      component: CajaPedido
    },
    {
      path: '/cajafactura',
      name: 'cajafactura',
      component: CajaFactura
    }
  ]
})


