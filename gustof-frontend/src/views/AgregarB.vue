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
        v-for="agreg in agregar"
        :key="agreg.agregar"
        :to="agreg.to"
        >
          <v-list-tile-content>
            <v-icon v-if="agreg.icon"></v-icon>
            <v-list-tile-tile>{{ agreg.text }}</v-list-tile-tile>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
   </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Agregar</v-toolbar-title>
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
        <v-flex xs12 sm6 d-flex>
        <v-select
          :items="Productos"
          label="Agregar Productos"

        ></v-select>
      </v-flex>
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
    drawer: true,
    Productos: ['Salchicha', 'Jamon', 'Queso', 'Carne plancha', 'Pollo desmechado', 'Mazorca', 'Tocineta'],
    agregar: [

      {
        text: 'PRODUCTOS',
        icon: 'store',
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
<style>
img {
    border-style: none;
    width: 120px;
    position: absolute;
    left: 612px;
}
.v-btn{
font-size:14px;
font-weight: 500;
margin:20px 401px;

}
</style>
