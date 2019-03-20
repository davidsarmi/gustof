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
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>perm_identity</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Perfil</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Mi Empresa</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Cliente</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Proveedores</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Productos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Facturación</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Candados</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Salir</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Gustof</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <v-btn
                icon
                large
                :href="source"
                target="_blank"
                slot="activator"
              >
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
    drawer: true
  }),

  props: {
    source: String
  }
}
</script>
