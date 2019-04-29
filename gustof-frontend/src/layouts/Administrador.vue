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
          <v-list-tile-content>
            <v-icon v-if="admin.icon"></v-icon>
            <v-list-tile-tile>{{ admin.text }}</v-list-tile-tile>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>administrador</v-toolbar-title>
    </v-toolbar>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
    <v-content>
        <v-container fill-height>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
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
        icon: 'home',
        to: '/administrador/perfil'
      },
      {
        text: 'MI EMPRESA',
        icon: 'edit',
        to: '/administrador/miempresa'
      },
      {
        text: 'CLIENTE',
        to: '/administrador/cliente'
      },
      {
        text: 'PROVEEDORES',
        to: '/administrador/proveedores'
      },
      {
        text: 'PRODUCTOS',
        to: '/administrador/productos'
      },
      {
        text: 'FACTURACIÒN',
        to: '/administrador/facturacion'
      },
      {
        text: 'BODEGA',
        to: '/bodega'
      },
      {
        text: 'PRODUCTOS DE BODEGA',
        to: '/bodega_productos'
      },
      {
        text: 'AGREGAR',
        to: '/agregar'
      },
      {
        text: 'SACAR',
        to: '/sacar'
      },
      {
        text: 'CANDADOS',
        to: '/administrador/candados'
      },
      {
        text: 'SALIR',
        to: '/'
      }
    ]
  }),

  props: {
    source: String
  }
}
</script>
