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
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>store</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Productos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Agregar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
       <v-list dense>
      <v-list-tile>
          <v-list-tile-action>
            <v-icon>edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sacar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
       <v-list dense>
      <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings_power</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Cerrar sesion</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Gustof-Bodega</v-toolbar-title>
       <img src="../assets/gustof.png">
    </v-toolbar>

        <v-btn
          color="red"
          dark

        >
          Productos por agotar

        </v-btn>

          <v-btn
          color="red"
          dark
        >
          Productos agotados
        </v-btn>
        <v-combobox
          v-model="select"
          :items="items"
          label="PRODUCTOS"
        ></v-combobox>
    <v-footer app fixed>
      <span>&copy; 2019</span>
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
<style>
.v-input__slot{
    width: 200px;
    margin: auto;
}
.v-combobox{
    background-color: yellow;
}
</style>

