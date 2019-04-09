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
        v-for="bodepro in bodega"
        :key="bodepro.bodega"
        :to="bodepro.to"
        >
          <v-list-tile-content>
            <v-icon v-if="bodepro.icon"></v-icon>
            <v-list-tile-tile>{{ bodepro.text }}</v-list-tile-tile>
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
        <p> Todos los productos de bodega </p>
        <v-flex xs12 sm6 d-flex>
        <v-select
          :items="Productos"
          label="Productos"

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
    bodega: [

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
<style scoped>
img{
    border-style: none;
    width: 120px;
    left: 612px;
}
p{

  font-size: 29px;
  font-weight: 100px;
}
.v-input__control {
  height: 0;
}
</style>
