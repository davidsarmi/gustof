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
          <v-list-tile-content class=".font-weight-medium.font-italic">
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
        to: '/bodega'
      },
      {
        text: 'PRODUCTOS DE BODEGA',
        icon: 'restaurant',
        to: '/bodega_productos'
      },
      {
        text: 'AGREGAR',
        icon: 'plus_one',
        to: '/agregar'
      },
      {
        text: 'SACAR',
        icon: 'plus_one',
        to: '/sacar'
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
<style>
  .theme--dark.v-icon {
    color: #4A148C;
}
.v-list__tile__content{
  color: black;
}
.v-list--dense .v-list__tile{
  font-size: 15px;
  font-family:fantasy;
}
</style>
