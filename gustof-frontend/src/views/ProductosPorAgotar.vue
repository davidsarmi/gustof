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
        v-for="bodeagotar in bodeguita"
        :key="bodeagotar.bodeguita"
        :to="bodeagotar.to"
        >
          <v-list-tile-content>
            <v-icon v-if="bodeagotar.icon"></v-icon>
            <v-list-tile-tile>{{ bodeagotar.text }}</v-list-tile-tile>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
   </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Productos por agotar</v-toolbar-title>
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
          :items="ProductosporA"
          label="Productos por agotar"

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
    ProductosporA: ['Salchicha', 'Jamon', 'Queso', 'Carne plancha', 'Pollo desmechado', 'Mazorca', 'Tocineta'],
    bodeguita: [

      {
        text: 'PRODUCTOS',
        icon: 'store',
        to: '/bodega_productos'
      },
      {
        text: 'AGREGAR',
        to: '/Agregar'
      },
      {
        text: 'SACAR',
        to: '/Sacar'
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
img{
    border-style: none;
    width: 120px;
    left: 612px;
}

</style>
