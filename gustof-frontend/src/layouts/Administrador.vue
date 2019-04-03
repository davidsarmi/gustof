<template>
<div id="app">
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
        /* icon: 'home', */
        to: '/administrador/perfil'
      },
      {
        text: 'MI EMPRESA',
        to: '/administrador/miempresa'
      },
      {
        text: 'CLIENTE'
      },
      {
        text: 'PROVEEDORES'
      },
      {
        text: 'PRODUCTOS'
      },
      {
        text: 'FACTURACIÒN'
      },
      {
        text: 'CANDADOS'
      },
      {
        text: 'SALIR'
      }
    ]
  }),

  props: {
    source: String
  }
}
</script>
