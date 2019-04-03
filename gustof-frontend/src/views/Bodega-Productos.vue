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
      <v-toolbar-title>Bodega-Productos</v-toolbar-title>
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

         <article>
         <v-flex xs12 sm6 d-flex>
        <v-select
          :items="Productos"
          label="Productos"

        ></v-select>

      </v-flex>
         </article>
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
    Productos: ['Salchicha', 'Jamon', 'Queso', 'Carne plancha', 'Pollo desmechado', 'Mazorca', 'Tocineta']

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

p{

  font-size: 29px;
  font-weight: 100px;
}
.v-input__control {
  height: 0;
}
</style>
