<template>
<div id="app">
          <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile
        v-for="admin in admins"
        :key="admin.admins"
        :to="admin.to"
        >
        <v-list-tile-action v-if="admin.icon">
          <v-icon>{{ admin.icon }}</v-icon>
        </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-tile>{{ admin.text }}</v-list-tile-tile>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn>
        <img src="@/assets/gustof.png" class="img-responsive" alt="" style="width:89px">
      </v-btn>
    </v-toolbar>
    <v-footer app fixed>
      <span>&copy; 2019</span>
    </v-footer>
    <v-content>
        <img data-v-097a1800="" src="/img/gustof.5ab63673.png">g
    </v-content>
  </v-app>
</div>
</template>

<script>
export default {
  el: '#app',
  data: () => ({
    drawer: true,
    admins: [
      {
        text: 'PERFIL',
        icon: 'group',
        to: '/administrador/perfil'
      },
      {
        text: 'MI EMPRESA',
        icon: 'store',
        to: '/administrador/miempresa'
      },
      {
        text: 'CLIENTE',
        icon: 'perm_identity',
        to: '/administrador/cliente'
      },
      {
        text: 'PROVEEDORES',
        icon: 'contacts',
        to: '/administrador/proveedores'
      },
      {
        text: 'PRODUCTOS',
        icon: 'restaurant',
        to: '/administrador/productos'
      },
      {
        text: 'FACTURACIÒN',
        icon: 'list',
        to: '/administrador/facturacion'
      },
      {
        text: 'BODEGA',
        icon: 'reorder',
        to: '/administrador/bodega'
      },
      {
        text: 'PRODUCTOS DE BODEGA',
        icon: 'restaurant',
        to: '/administrador/bodega_productos'
      },
      {
        text: 'AGREGAR',
        icon: 'plus_one',
        to: '/administrador/agregar'
      },
      {
        text: 'SACAR',
        icon: 'plus_one',
        to: '/administrador/sacar'
      },
      {
        text: 'CANDADOS',
        icon: 'no_encryption',
        to: '/administrador/candados'
      },
      {
        text: 'SALIR',
        icon: 'contacts',
        to: '/'
      }
    ]
  }),

  props: {
    source: String
  }
}
</script>
